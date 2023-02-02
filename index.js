const express = require('express');
const app = express()
const port = 3000;
const fs = require('fs');
app.get('/', (req, res) => {
  res.end('Hello World!');
});
app.get('/sun', (req, res) => {
    res.end('Hello Sun');
  });

  app.get('/list_movies', (req, res) => {
    fs.readFile(__dirname + '/' + 'movies.json', (err, data) => {
        res.end(data);
    });
  });

  app.get('/Sita_Ramam', (req, res) => {
    fs.readFile(__dirname + '/' + 'Sita Ramam.json', (err, data) => {
        res.end(data);
    });
  });

  app.get('/Drishyam 2', (req, res) => {
    fs.readFile(__dirname + '/' + 'Drishyam 2.json', (err, data) => {
        res.end(data);
    });
  });

  app.get('/Jersey', (req, res) => {
    fs.readFile(__dirname + '/' + 'Jersey.json', (err, data) => {
        res.end(data);
    });
  });

  app.get('/Jaadugar', (req, res) => {
    fs.readFile(__dirname + '/' + 'Jaadugar.json', (err, data) => {
        res.end(data);
    });
  });

  app.get('/Kantara', (req, res) => {
    fs.readFile(__dirname + '/' + 'Kantara.json', (err, data) => {
        res.end(data);
    });
  });




app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });