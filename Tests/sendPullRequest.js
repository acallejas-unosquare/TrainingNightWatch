module.exports = {
    '@tags': ['nightwatch'],
    "Send a Pull Request": function(browser) {
        const lnkGetStarted = "//a[text()='Get started']";
        const searchBarLnk = ".DocSearch-Button-Placeholder";
        const searchBar = ".DocSearch-Input";
        const searchText = "Asserts]";
        const firstResult = "#docsearch-item-0";
        const APIHeader = "//h3[text()='Basic Assertions']";
        const blockLnk = "//a[contains(text(), 'Blog') and contains(@class, 'header')]";
        const pageText = ".address";
        const validationText = "Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.";

        browser
        .windowMaximize()
        .url("https://nightwatchjs.org/")
        .useXpath().waitForElementVisible(lnkGetStarted)
        .useXpath().assert.textContains(lnkGetStarted, "Get")
        .useXpath().assert.attributeContains(lnkGetStarted, "style", "underline ")
        .useXpath().click(lnkGetStarted);
        browser.assert.urlContains("what-is-nightwatch.html");
        browser
        .useCss().click(searchBarLnk)
        .useCss().setValue(searchBar, searchText)
        .useCss().click(firstResult)
        .useXpath().verify.visible(APIHeader)
        .useXpath().assert.visible(blockLnk)
        .useXpath().click(blockLnk)
        .useCss().moveTo(".load-more", 0, 0)
        .useCss().assert.textContains(pageText, validationText);
        browser.saveScreenshot('tests_output/sendPullRequest.png');
        browser.end();

        
    }
}