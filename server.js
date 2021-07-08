const express = require('express');

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Express/Node.js server running on: http://localhost:${PORT}`);
  });