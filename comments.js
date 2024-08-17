//Create web server
const express = require('express');
const bodyParser = require('body-parser');
//Create web server
const app = express();
app.use(bodyParser.json());
//Create web server
const comments = require('./comments');
//Create web server
const users = require('./users');
//Create web server
const posts = require('./posts');
//Create web server
app.use('/comments', comments);
//Create web server
app.use('/users', users);
//Create web server
app.use('/posts', posts);
//Create web server
app.listen(3000, () => {
  console.log('Server is up and running on port 3000');
});
//Create web server
module.exports = app;
