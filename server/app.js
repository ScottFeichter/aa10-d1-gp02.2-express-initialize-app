const express = require("express");

const app = express();

app.get('/status', (req, res) => {
  res.send('Hello from the server app!');
});

const port = 5001;

app.listen(port, console.log(`Server lisenting on port ${port}...`));
