const nodemailer = require('nodemailer');
const catchAsync = require('./catchAsync');

const sendEmail = catchAsync(async options => {
  // 1) Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
    // activate in gmail 'less secure app' option=nese dojme me e perdore gmail
  });

  // 2) define the email options
  const mailOptions = {
    from: 'Jonas Schmendtmann <hello@jonas.io>',
    to: options.email,
    subject: options.subject,
    text: options.message
    // html:
  };

  // 3) send the email with nodemailer
  await transporter.sendMail(mailOptions);
});

module.exports = sendEmail;
