module.exports = {
    "unosquare":function (browser) {
        var unosquare = browser.page.mainpage();
        
        unosquare
        .navigate()
        .click("@blogMenu");

        var unosquareBlog = browser.page.blogPage();
        unosquareBlog
        .assert.visible("@title")
        .assert.urlEquals("https://blog.unosquare.com/")
        .assert.visible("@recentPostLbl")
        .assert.visible("@popularPostLbl")
        .searchQuerys()
        .click("@aboutMenu");

        var unosquareAbout = browser.page.aboutPage();
        unosquareAbout
        .assert.elementPresent("@nameMario")
        .assert.elementPresent("@nameGiancarlo")
        .assert.elementPresent("@nameEduardo")
        .assert.elementPresent("@nameIgnacio")
        .assert.elementPresent("@nameDiego");

        browser.end();
    }
}