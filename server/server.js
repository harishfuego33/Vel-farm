const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Mailjet = require("node-mailjet");
const dotenv = require("dotenv");

dotenv.config();

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET
);
const app = express();
const PORT = 5000;
app.use(cors);
app.use(bodyParser.json());
app.post("/`contact`", (req, res) => {
  const { fullName, mailId, subject, description } = req.body;
  console.log(fullName, mailId, subject, description);

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: mailId, // Preset sender email address
          Name: fullName,
        },
        To: [
          {
            Email: "harishkumar.ct20@bitsathy.ac.in", // The owner's email address
            Name: "Harish Kumar S ",
          },
        ],
        Subject: subject,
        TextPart: `Name: ${fullName}\nEmail: ${mailId}\nDetails: ${description}`,
      },
    ],
  });

  request
    .then((result) => {
      res.status(200).json({ message: "Email sent successfully" });
    })
    .catch((err) => {
      console.error(err.statusCode);
      res.status(500).json({ error: "Error sending email" });
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
