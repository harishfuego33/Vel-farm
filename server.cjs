const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const Mailjet = require("node-mailjet");

dotenv.config();

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET
);
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/contact", (req, res) => {
  const { fullName, mailId, subject, description } = req.body;
  console.log(fullName, mailId, subject, description);

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: mailId,
          Name: fullName,
        },
        To: [
          {
            Email: "harishkumar.ct20@bitsathy.ac.in",
            Name: "HARISH",
          },
        ],
        Subject: subject,
        TextPart: "My first Mailjet email",
        HTMLPart:
          "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
        CustomID: "000001",
      },
    ],
  });
  request
    .then((result) => {
      console.log(result.body);
      res.status(200).json({ message: "Email sent successfully" });
    })
    .catch((err) => {
      console.error(err.statusCode, err.message);
      res.status(500).json({ error: "Error sending email" });
    });
});

const port = 8000;
console.log(port);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
