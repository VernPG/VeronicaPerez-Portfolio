const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; //do i need to change this?

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/send-email', (req, res) => {
  const { fullName, email, message, contactType } = req.body;


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'v.perez.gangsei@gmail.com',
      pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD', //how do i hide this?
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'v.perez.gangsei@gmail.com', 
    subject: "Saw your portfolio and I would like to connect!",
    html: `
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Contact Type:</strong> ${contactType}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send('Email sent successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
