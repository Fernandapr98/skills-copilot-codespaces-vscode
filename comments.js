// Create web server
// Create comments array
// Create routes
// Create route to get all comments
// Create route to get comment by id
// Create route to post a comment
// Create route to delete a comment

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = [];

app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get comment by id
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).send('The comment with the given ID was not found');
  }
  res.json(comment);
});

// Post a comment
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    name: req.body.name,
    comment: req.body.comment
  };
  comments.push(comment);
  res.json(comment);
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).send('The comment with the given ID was not found');
  }
  const index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.json(comment);
});

app.listen(3000, () => console.log('Server is running...'));

// Test with Postman
// GET http
