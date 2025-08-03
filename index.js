const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const port = process.env.PORT || 3000;
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Deployed via GitHub Actions</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f9f9f9;
          margin: 0;
          padding: 50px;
          text-align: center;
        }
        h1 {
          color: #2e6da4;
        }
        p {
          font-size: 18px;
          color: #555;
        }
      </style>
    </head>
    <body>
      <h1>🚀 Deployment Successful!</h1>
      <p>This Node.js app was deployed to Azure via GitHub Actions.</p>
      <p>Made with ❤️ using Express and CI/CD.</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
