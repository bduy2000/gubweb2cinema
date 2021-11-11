const nodemailer = require('nodemailer');

exports.send = async function (to, subject, content) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL || 'Type your email',
      pass: process.env.EMAIL_PASSWORD || 'Type your password'
    }
  });
 

  const info = await transporter.sendMail({
    from: process.env.EMAIL || 'Type your email',
    to,
    subject,
    text: content,
  });
  console.log(info);
};
