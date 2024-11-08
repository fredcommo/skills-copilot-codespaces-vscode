// Create web server
// Handle POST and GET request
// Add comments to the comments array
// Display comments on the browser
// Run the server on port 3000

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const comments = [];

app.get('/comments', (req, res) => {
  let commentsHtml = '<ul>';
  comments.forEach(comment => {
    commentsHtml += `<li>${comment}</li>`;
  });
  commentsHtml += '</ul>';
  res.send(commentsHtml);
});

app.post('/comments', (req, res) => {
  comments.push(req.body.comment);
  res.send('Comment added!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server using node comments.js
// Open the browser and go to http://localhost:3000/comments
// Add some comments using Postman

// To test