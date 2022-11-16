module.exports = {
    '@tags': ['nightwatch'],
    "Send a Pull Request": function(browser) {
        var night = browser.page.landingpage();
        const validationText = "Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.";
        const searchText = "Asserts";
        
        night
        .navigate()
        .assert.title("Nightwatch.js | Node.js powered End-to-End testing framework")
        .assert.urlEquals("https://nightwatchjs.org/")
        .waitForElementVisible('@lnkGetStarted')
        .assert.textContains('@lnkGetStarted', "Get")
        .assert.attributeContains('@lnkGetStarted', "style", "underline ")
        .click('@lnkGetStarted')
        .assert.urlContains("what-is-nightwatch.html")
        .click('@searchBarLnk')
        .setValue('@searchBar', searchText)
        .click('@firstResult')
        .verify.visible('@APIHeader')
        .assert.visible('@blockLnk')
        .assert.enabled('@blockLnk')
        .click('@blockLnk');
        browser.moveTo(".load-more", 0, 0);
        night.assert.textContains('@pageText', validationText);
        night.saveScreenshot('tests_output/sendPullRequest.png');
        night.end();

        
    },

    'test refactor command 2': function(browser) {
        var night = browser.page.landingpage();
        night
        .navigate()
        .clickinMultiplePages();
        
        browser.end();
      }
}