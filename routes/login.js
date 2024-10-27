const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h2>Login</h2>
        <form method="POST" onsubmit="login(event)">
          <label>Username:</label>
          <input type="text" id="username" name="username" required />
          <button type="submit">Login</button>
        </form>
        <script>
          async function login(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            localStorage.setItem('username', username);
            window.location.href = '/send-msg';
          }
        </script>
      </body>
    </html>
  `);
});

module.exports = router;
