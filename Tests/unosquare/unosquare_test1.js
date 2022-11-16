module.exports = {
    '@tags': ['test1'],
    'Demo test unosquare': function (browser) {
        browser
        .windowMaximize()
        .url('https://www.unosquare.com')
        .waitForElementVisible('body')
        .assert.attributeContains("li a[href ='/Services']", 'class', 'nav')
        .assert.attributeEquals("li a[href ='/Services']", 'class', 'nav-link')
        .waitForElementVisible("li a[href ='/Services']")
        .assert.textContains("li a[href= '/Services']", "SERVICES")
        .assert.cssProperty("li a[href = '/About']", 'display', 'block')
        .assert.not.cssProperty("li a[href = '/About']", 'font-size', '12px')
        .click("a[href='/Services']")
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