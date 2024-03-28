const express = require('express');
const ejs = require('ejs');

// https://academy.patika.dev/tr/courses/nodejs/odev8

const app = express();

// Template Engines
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));

// Routes

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

/* https://academy.patika.dev/tr/courses/nodejs/odev7
app.get('/', (req, res) => {
  const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
  res.send(blog);
});
*/

const port = 3000;

app.listen(port, () => {
  console.log('App listening on port 3000!');
});
