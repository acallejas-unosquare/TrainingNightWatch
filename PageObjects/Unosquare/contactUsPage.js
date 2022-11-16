module.exports = {
    url: 'https://www.unosquare.com/ContactUs',
    elements: {
        title: {
            selector: "h2.subtitle"
        },
        name: {
            selector: "input[name='name']"
        },
        email: {
            selector: "input[name='email']"
        },
        company: {
            selector: "input[name='company']"
        },
        phone: {
            selector: "input[name='phone']"
        },
        message: {
            selector: "div.input textarea"
        },
        submit: {
            selector: "input[value='Submit']"
        },
    }
}