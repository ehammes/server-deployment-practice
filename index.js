'use strict';

// ***REQUIRE
// const person = require('./person');
// person();

// const express = require('express');
// const app = express(); // singleton

// const PORT = process.env.PORT || 3002;

// // **ROUTES

// app.get(`/`, (req, res) => {
//   res.status(200).send(`Hello class!`);
// });

// app.listen(PORT, () => console.log(`listening on port ${PORT}`));

const server = require('./src/server');

server.start();
