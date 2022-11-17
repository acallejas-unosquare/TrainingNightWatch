function getData() {
  return require('../../dataExternal/unosquareForm'); // Using the correct path is important
  };

var validateContactUs = {
  contactUnosquare: function() {
    this.api.pause(1000);
    const form = getData();
    return this.waitForElementVisible('@contactusMenu', 1000)
      .click('@contactusMenu')
      .setValue('@companyTextField', form.company)
      .setValue('@phoneTextField', form.phone)
      .setValue('@messageTextArea', form.message)
      .click('@submitBtn')
      .waitForElementVisible('@nameWarningMsg')
  }
};

var validatePages = {
  clickinMultiplePages: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@contactusMenu', 1000)
      .click('@contactusMenu')
      .assert.urlEquals("https://www.unosquare.com/ContactUs")
      .click('@industriesMenu')
      .assert.urlEquals("https://www.unosquare.com/Industries")
      .click('@aboutMenu')
      .assert.urlEquals("https://www.unosquare.com/About")
      .click('@servicesMeu')
      .assert.urlEquals("https://www.unosquare.com/Services")
  }
}

module.exports = {
  url: 'https://www.unosquare.com',
  commands: [validateContactUs, validatePages],
  elements: {
    contactusMenu: {
      selector: "li a[href = '/ContactUs']"
    },
    industriesMenu: {
      selector: "li a[href = '/Industries']"
    },
    aboutMenu: {
      selector: "li a[href = '/About']"
    },
    servicesMenu: {
      selector: "li a[href = '/Services']"
    },
    blogMenu: {
      selector: "li:nth-child(8) > a"
    },
    companyTextField: {
      selector: "input.hs-input[name = 'company']"
    },
    phoneTextField: {
      selector: "input.hs-input[name = 'phone']"
    },
    messageTextArea: {
      selector: "textarea.hs-input[name = 'message']"
    },
    submitBtn: {
      selector: "input[value = 'Submit']"
    },
    nameWarningMsg: {
      selector: "//div[contains(@class, 'hs_name')]//label[contains(., 'Please complete this required field.')]",
      locateStrategy: 'xpath'
    }
  }
}