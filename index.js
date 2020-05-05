const express = require('express');

const server = express()

const client = require('./auth/auth');

const PORT = 5000;



server.listen(PORT, () => console.log(`Server is up on ${PORT}`));
  