module.exports = {
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
        .assert.not.cssProperty("li a[href = '/About']", 'font-size', '12px');
        browser.end();
    }
}