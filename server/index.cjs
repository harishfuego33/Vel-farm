const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const createTransport = require("nodemailer");
const json = require("body-parser").json;

dotenv.config();

const app = express();
app.use(cors());
app.use(json());
const PORT = 4000;

app.get("/", (req, res) => res.send("server is running"));

app.post("/contact", (req, res) => {
  const { fullName, mailId, subject, description } = req.body;
  console.log(fullName, mailId);
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL, // Your email address
      pass: process.env.PASSWORD, // Your email password
    },
  });

  let mailOptions = {
    from: `"${fullName}" <${mailId}>`, // sender address
    to: "harishkumar.ct20@bitsathy.ac.in", // list of receivers
    subject: subject, // Subject line
    text: description, // plain text body
    html: `<p>${description}</p>`, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error sending email");
    }
    console.log("Message sent: %s", info.messageId);
    res.send("Email has been sent");
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
