function getData() {
    return require('../../dataExternal/unosquareSearch');
};

var search = {
    searchQuerys: function() {
        this.api.pause(1000);
        const querys = getData();
        return this.waitForElementVisible('@searchBar', 1000)
            .setValue("@searchBar", querys.qry1)
            .waitForElementVisible("@searchBtn")
            .click("@searchBtn")
            .setValue("@searchBar", querys.qry2)
            .waitForElementVisible("@searchBtnResult")
            .click("@searchBtnResult")
            .setValue("@searchBar", querys.qry3)
            .waitForElementVisible("@searchBtnResult")
            .click("@searchBtnResult")
            .setValue("@searchBar", querys.qry4)
            .waitForElementVisible("@searchBtnResult")
            .click("@searchBtnResult")
    }
  };

module.exports =  {
    url: "https://blog.unosquare.com/",
    commands: [search],
    elements: {
        title: {
            selector: "div h1"
        },
        recentPostLbl : {
            selector: " main > label:nth-child(2)"
        },
        popularPostLbl : {
            selector: "main > label:nth-child(4)"
        },
        searchBar: {
            selector: "input#search-bar"
        },
        searchBtn:{
            selector: "#side-bar-container > form > button"
        },
        searchBtnResult: {
            selector: "div.col-lg-3 > form > button"
        },
        aboutMenu: {
            selector: "a[href='https://www.unosquare.com/About']"
        }
    }
}