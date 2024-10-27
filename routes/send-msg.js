const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../msg.txt");

// Synchronous function to get messages from the file
function getMessages() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
    return "";
  }
}

// GET route to display the chat form and messages
router.get("/", (req, res) => {
  const fileData = getMessages();
  res.send(`
    <html>
      <body>
        <pre>${fileData}</pre>
        <h1>Type your message here</h1><br>
        <form onsubmit="sendMessage(event)">
          <label>Message:</label>
          <input type="text" id="msg" required />
          <button type="submit">Send</button>
        </form>
        <script>
          async function sendMessage(event) {
            event.preventDefault();
            const username = localStorage.getItem('username');
            const message = document.getElementById('msg').value;
            if (!username) {
              alert("Please log in first.");
              window.location.href = '/login';
              return;
            }
            const response = await fetch('/send-msg', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username, message })
            });
            if (response.ok) {
              window.location.reload();
            } else {
              alert("Failed to send message.");
            }
          }
        </script>
      </body>
    </html>
  `);
});

// POST route to handle message saving
router.post("/", (req, res) => {
  const { username, message } = req.body;
  if (!username || !message) {
    return res.status(400).send("Username and message are required.");
  }
  const logMessage = `${username}: ${message}\n`;
  fs.appendFile(filePath, logMessage, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).send("Failed to save message.");
    }
    res.status(200).send("Message saved successfully.");
  });
});

module.exports = router;
