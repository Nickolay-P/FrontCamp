const express = require('express');
const server = express();
const body_parser = require('body-parser');

let data = [
  { "id": "0", "word": "I", "mirror": "Not all"},
  { "id": "1", "word": "Love", "mirror": "Hate"},
  { "id": "2", "word": "Node", "mirror": "Node"},
  { "id": "3", "word": "Js", "mirror": "Js"},
];

server.use(body_parser.json());

server.get("/news", (req, res) => {
  res.json(data);
});

server.get("/news/:id", (req, res) => {
  const news = data.find(item => item.id === req.params.id);
  news ? res.json(news) : res.sendStatus(404);
});

server.post("/news", (req, res) => {
  data.push(req.body);
  res.sendStatus(201);
});

server.put("/news/:id", (req, res) => {
  const newNews = [];
  data.forEach(previousNews => {
    previousNews.id === req.params.id ? newNews.push(req.body) : newNews.push(previousNews);
  });
  data = newNews;
  res.sendStatus(200);
});

server.delete("/news/:id", (req, res) => {
  data = data.filter(news => news.id !== req.params.id);
  res.sendStatus(200);
});

server.use((err, req, res, next) => {
  res.status(500).send('Error');
  res.render('error', { error: err });
});

server.listen(4000);