module.exports = {
    "amazon": async function (browser) {
        var amazonPage = browser.page.amazonHomePage();
        

        amazonPage
        .navigate()
        .searchProduct();
        browser.useXpath().waitForElementVisible("//*[@id='search']/div[1]/div[1]/div/span[1]/div[1]/div[2]/div/div/div/div/div[2]/div[3]/div/a/span[1]/span[2]");
        const priceResult = await browser.useXpath().getText("//*[@id='search']/div[1]/div[1]/div/span[1]/div[1]/div[2]/div/div/div/div/div[2]/div[3]/div/a/span[1]/span[2]/span[2]");
        console.log("----------------");
        console.log(priceResult);
        console.log("----------------");

        amazonPage
        .useCss().click("@firstResult");

        const priceProduct = await amazonPage.getText("@pageResult");
        console.log("*****************");
        console.log(priceProduct);
        console.log("*****************");
        assert.textContains(priceResult, priceProduct);

        amazonPage
        .useCss().click("@btnAddCart")
        .useCss().waitForElementVisible("@btnCart");
        browser.pause(2000);
        amazonPage.click("@btnCart");

        const priceCart = await amazonPage.getText("@finalPrice");
        console.log("==================");
        console.log(priceCart);
        console.log("==================");
        assert.textContains(priceProduct, priceCart);
        
        amazonPage.click('@btnDelete');

        browser.end();
    }
}