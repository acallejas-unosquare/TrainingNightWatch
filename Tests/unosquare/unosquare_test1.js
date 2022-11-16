module.exports = {
    '@tags': ['test1'],
    'Demo test unosquare': function (browser) {
        var unosquare = browser.page.mainpage();

        unosquare
        .navigate()
        .waitForElementVisible('body')
        .assert.attributeContains("@servicesMenu", 'class', 'nav')
        .assert.attributeEquals("@servicesMenu", 'class', 'nav-link')
        .waitForElementVisible("@servicesMenu")
        .assert.textContains("@servicesMenu", "SERVICES")
        .assert.cssProperty("@aboutMenu", 'display', 'block')
        .assert.not.cssProperty("@aboutMenu", 'font-size', '12px')
        .click("@servicesMenu")
        .assert.visible("h2.subtitle")
        .assert.title("Software Engineering Services | Agile Software Development Services")
        .assert.urlContains("Services")
        .assert.urlEquals("https://www.unosquare.com/Services")
        .assert.not.title("Digital Transformation Services | Agile Staffing Solutions | Unosquare")
        .assert.not.urlContains("blog")
        .assert.not.urlEquals("https://blog.unosquare.com/")
        browser.saveScreenshot("tests_output/test1.jpg");
        browser.end();
    }
}