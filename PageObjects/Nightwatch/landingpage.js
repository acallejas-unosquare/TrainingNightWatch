var validatePages = {
    clickinMultiplePages: function() {
      this.api.pause(1000);
      return this.waitForElementVisible('@guideMenu', 1000)
        .click('@guideMenu')
        .assert.urlEquals("https://nightwatchjs.org/guide/overview/what-is-nightwatch.html")
        .click('@apiMenu')
        .assert.urlEquals("https://nightwatchjs.org/api/")
        .click('@communityMenu')
        .assert.urlEquals("https://nightwatchjs.org/about/community/")
        .click('@blogMenu')
        .assert.urlEquals("https://nightwatchjs.org/blog/")
    }
  }

module.exports = {
    url: 'https://nightwatchjs.org/',
    commands: [validatePages],
    elements: {
        guideMenu : {
            selector: "div.nav-links-left > div:nth-child(1)"
        },
        apiMenu : {
            selector: "div.nav-links-left > div:nth-child(2)"
        },
        communityMenu : {
            selector: "div.nav-links-left > div:nth-child(3)"
        },
        blogMenu : {
            selector: "div.nav-links-left > div:nth-child(4)"
        },
        lnkGetStarted : { 
            selector  : "span a[href='https://nightwatchjs.org/guide/overview/what-is-nightwatch.html']"
        },
        searchBarLnk : { 
            selector  : "#docsearch > button"
        },
        searchBar : { 
            selector  : "input.DocSearch-Input"
        },
        firstResult : { 
            selector : "#docsearch-item-0"
        },
        APIHeader : { 
            selector : "h3#basic-assertions"
        },
        blockLnk : { 
            selector : "div.nav-item a[href='https://nightwatchjs.org/blog/']"
        },
        pageText : { 
            selector : ".address"
        }
    }
}