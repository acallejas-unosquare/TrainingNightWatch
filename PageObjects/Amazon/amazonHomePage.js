function getData() {
    return require('../../dataExternal/amazonSearch');
};

var search = {
    searchProduct: function() {
        const info = getData();
        return this.waitForElementVisible("@searchBtn")
        .setValue("@searchBar", info.product)
        .click("@searchBtn")
    }
};

module.exports = {
    url: "https://www.amazon.com.mx/",
    commands: [search],
    elements: {
        searchBar: {
            selector: "input#twotabsearchtextbox"
        },
        searchBtn: {
            selector: "input#nav-search-submit-button"
        },
        firstResult: {
            selector: "div:nth-child(2) > div > div > div > div > div.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small > div.a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style > h2 > a"
        },
        pageResult: {
            selector: "#corePrice_feature_div > div > span > span:nth-child(2)"
        },
        btnAddCart: {
            selector: "input#add-to-cart-button"
        },
        btnCart: {
            selector: "div#nav-cart-count-container"
        },
        finalPrice: {
            selector: "span#sc-subtotal-amount-activecart"
        },
        btnDelete: {
            selector: "input[value='Eliminar']"
        }
    }
}