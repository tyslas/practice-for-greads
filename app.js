const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'hbs')

app.get('/', (req, res, next) => {
  res.send("get method on the index page");
});

app.get('/movies', (req, res, next) => {
  res.send("get method on the movies page");
});

app.get('/people', (req, res, next) => {
  res.send("get method on the people page");
});

app.get('/people-movies', (req, res, next) => {
  res.send("get method on the people-movies page");
});

app.listen(port, () => {
  console.log('listening on port:', port);
});
