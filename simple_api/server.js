'use strict';

// const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const articles = require('./api/data.json');

const app = express();


// let nextId = 7;
app.use(cors());

app.set('port', (process.env.PORT || 3004));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache');
  next();
});


app.get('/api/article', (req, res) => {
  res.send(articles.posts);
});

app.get('/api/article/:id', (req, res) =>  {
  const article = articles.posts.find(article => article.postId == req.params.id);

  if (!article) return res.sendStatus(404);

  res.json({
    name: article.name,
    comment: article.comments});
});

// TODO add adding article
// app.post('/api/article', (req, res) => {
//   const article = {
//     postId: nextId++,
//     name: req.body.name,
//     date: new Date(),
//     text: req.body.text,
//     comments: req.body.comments
//   };
//
//   articles.posts.push(article);
//
//   res.send(article);
// });

// TODO add update article by id
// app.put('/api/article/:id', (req, res) => {
//   const article = articles.posts.find(article => article.postId == req.params.id);
//
//   if (!article) return res.sendStatus(404);
//
//   article.name = req.body.name || article.name;
//
//   res.json(article);
// });

// TODO add deleting article by id
// app.delete('/api/article/:id', (req, res) => {
//   const index = articles.posts.findIndex(article => article.postId == req.params.id);
//
//   if (index === -1) return res.sendStatus(404);
//
//   articles.posts.splice(index, 1);
//
//   res.sendStatus(204);
// });

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));