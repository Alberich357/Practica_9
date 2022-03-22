const express = require('express');
const app = express();

app.get('/', (req, res) => { //router handler
  res.send('<h1> Hello World, from route prueba</h1>');
});

app.listen(3000);
app.get('/uno', (req, res) =>{ //router handler
  res.send('Hello World, from route one');
});