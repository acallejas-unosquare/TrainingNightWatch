module.exports = {
    before: function (browser) {
    },
    after: function (browser) {
        browser.end();
    },

    'API Testing - GET Positive': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            //var data = JSON.parse(response.body)
            console.log(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.copyright, 'Mike Selby')
            browser.assert.equal(response.body.media_type, 'image')
            browser.assert.equal(response.body.service_version, 'v1')
        })
    },

    'API Testing - GET Negative': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.copyright, 'My Name')
        })
    },

    'API Testing - POST': function (browser) {
        var apiUrl = 'https://reqres.in/api/users'
        var postData = {'name':'QA CoE Name', 'job':'Unosquare QA'}
        browser.apiPost(apiUrl, postData, null, null, function (response) {
  
            browser.assert.equal(response.statusCode, '201')
            browser.assert.equal(response.body.name, 'QA CoE Name')
            browser.assert.equal(response.body.job, 'Unosquare QA')
        })
    },

    'My GET test1': function (browser) {
        var apiURL = "https://api.nasa.gov/EPIC/api/natural?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct";
        browser.apiGet(apiURL, function (response){
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body[0].identifier, "20221115003634");
            browser.assert.equal(response.body[0].version, "03");
            browser.assert.equal(response.body[0].caption, "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft");
        });
    },

    'My GET test2': function (browser) {
        var apiURL = "https://tle.ivanstanojevic.me/api/tle/";
        browser.apiGet(apiURL, function (response){
            browser.assert.equal(response.statusCode, '200');
            browser.assert.equal(response.body.totalItems, '17153');
            browser.assert.equal(response.body.member[0].name, 'ISS (ZARYA)');
            browser.assert.equal(response.body.member[1].name, 'CENTAURI-2');
        });
    },

    'My POST test1': function (browser) {
        var apiURL = "https://reqres.in/api/login";
        var postData = { 
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        };
        browser.apiPost(apiURL, postData, null, null, function (response) {
            browser.assert.equal(response.statusCode, '200');
            browser.assert.equal(response.body.token, 'QpwL5tke4Pnpja7X4');
        });
    },
};