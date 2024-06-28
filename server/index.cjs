const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("server is running"));

app.post("/contact", (req, res) => {
  const { fullName, mailId, subject, description } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL, // Your email address
      pass: process.env.PASSWORD, // Your email password
    },
  });

  let mailOptions = {
    from: mailId, // sender address
    to: "harishkumar.ct20@bitsathy.ac.in", // list of receivers
    subject: subject, // Subject line
    text: description, // plain text body
    name: fullName,
    html: `<p>${description}</p>`, // html body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    res.send("Email has been sent");
  });
});
const port = 4000;
console.log(port);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
