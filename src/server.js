'use strict';

const express = require('express');
const app = express(); 

const PORT = process.env.PORT || 3002;


app.get('/', (req, res) => {
  res.status(200).send(`Hello class!`);
});

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}
// module.exports = {
//   app, // if the names are the same, by default it will use prop and values as the name listed (ie app = app)
//   start,
// };

module.exports = {app, start}; //another way to write it