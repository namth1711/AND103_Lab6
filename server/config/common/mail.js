var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "namthph31259@fpt.edu.vn",
        pass: "hahaha"
    }
});
module.exports = transporter 