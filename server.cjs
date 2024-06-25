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
  // Validate and sanitize user input (highly recommended for security)
  const { fullName, mailId, subject, description } = req.body;
  console.log(fullName);
  console.log(mailId);
  console.log(subject);
  console.log(description);
  // Input validation example (using a hypothetical validation library)
  if (!validateInput(fullName, mailId, subject, description)) {
    return res.status(400).json({ error: "Invalid input provided" });
  }
  const request = mailjet
    .post("send", { version: "v3.1" })
    .request({
      Messages: [
        {
          From: {
            Email: "harishkumar.ct20@bitsathy.ac.in",
            Name: "HARISH",
          },
          To: [
            {
              Email: "harishkumar.ct20@bitsathy.ac.in",
              Name: "HARISH",
            },
          ],
          Subject: "Greetings from Mailjet.",
          TextPart: "My first Mailjet email",
          HTMLPart:
            "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
          CustomID: "AppGettingStartedTest",
        },
      ],
    })
    .request.then((result) => {
      res.status(200).json({ message: "Email sent successfully" });
    })
    .catch((err) => {
      console.error(err.statusCode, err.message); // Log both status code and error message
      res.status(500).json({ error: "Error sending email" });
    });
});

const port = 8000;
console.log(port);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Example input validation function (replace with your preferred library)
function validateInput(fullName, mailId, subject, description) {
  // Implement validation logic here (e.g., check for empty strings, invalid email format)
  return true; // Replace with actual validation logic
}
