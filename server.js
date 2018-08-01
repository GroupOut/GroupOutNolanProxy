const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/deals/:id', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log('proxy listening on port: ' + port);
})