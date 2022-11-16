module.exports = {
    'test pages validation' : function(browser) {
      var unosquare = browser.page.mainpage();

      unosquare
      .navigate()
      .waitForElementVisible('@contactusMenu')
      .click('@contactusMenu')
      .click('@industriesMenu')
      browser.end();
    },

    'Test1' : function(browser) {
      var unosquare = browser.page.mainpage();
      var contactUs = browser.page.contactUsPage();

      const name = "Test1";
      const email = "correo@correo.com";
      const company = "unosquare";
      const phone = "5566778899";
      const message = "This is a test";

      unosquare
      .navigate()
      .waitForElementVisible('@contactusMenu')
      .click('@contactusMenu');

      contactUs
      .assert.urlEquals("https://www.unosquare.com/ContactUs")
      .assert.title("Agile Collaborative Software Development | Contact Unosquare")
      .setValue("@name", name)
      .setValue("@email", email)
      .setValue("@company", company)
      .setValue("@phone", phone)
      .setValue("@message", message)
      .assert.not.cssProperty("@name", "inputmode", "text")
      .assert.attributeContains("@name", "inputmode", "text")
      .assert.not.cssProperty("@name", "type", "number")
      .assert.not.textContains("@title", "CONTACT");

      browser.saveScreenshot("tests_output/contactUs.jpg");
      browser.end();
    },

    'Test2' : function(browser) {
      var unosquare = browser.page.mainpage();

      unosquare
      .navigate()
      .waitForElementVisible('@industriesMenu')
      .click('@industriesMenu')
      browser.end();
    },
    
    'Test3 this test should fail' : function(browser) {
      var unosquare = browser.page.mainpage();
      var aboutPage = browser.page.aboutPage();

      unosquare
      .navigate()
      .waitForElementVisible('@aboutMenu')
      .click('@aboutMenu');

      aboutPage.
      assert.cssProperty("@fistLinkIn", "class", "mt-3");
      browser.end();
    },

    'test command example': function(browser) {
      var unosquare = browser.page.mainpage();
      unosquare
      .navigate()
      .contactUnosquare();
      
      browser.end();
    },

    'test refactor command 1': function(browser) {
      var unosquare = browser.page.mainpage();
      unosquare
      .navigate()
      .clickinMultiplePages();
      
      browser.end();
    }

}
