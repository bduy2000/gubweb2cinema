const nodemailer = require('nodemailer');

exports.send = async function (to, subject, content) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL || 'sendmail24h@gmail.com',
      pass: process.env.EMAIL_PASSWORD || 'huytum01'
    }
  });

  const info = await transporter.sendMail({
    from: process.env.EMAIL || 'sendmail24h@gmail.com',
    to,
    subject,
    text: content,
  });
  console.log(info);
};