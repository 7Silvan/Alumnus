/**
 * User: silvan
 * Date: 5/10/13
 * Time: 11:51 PM
 */
// Copy in your particulars and rename this to mail.js
module.exports = {
    service: "SendGrid",
    host: "smtp.gmail.com",
    port: 465,
    secureConnection: false,
    //name: "servername",
    auth: {
        user: "7.gural@gmail.com",
        pass: "cell3389"
    },
    ignoreTLS: true,
    debug: false,
    maxConnections: 5 // Default is 5
}
