// Create web server 

// Importing the required modules
const express = require('express');
const app = express();

// Importing the comments data
const comments = require('./data/comments');

// Importing the posts data
const posts = require('./data/posts');

// Importing the likes data
const likes = require('./data/likes');

// Importing the users data
const users = require('./data/users');

// Importing the comments router
const commentsRouter = require('./routes/comments');

// Importing the posts router
const postsRouter = require('./routes/posts');

// Importing the likes router
const likesRouter = require('./routes/likes');

// Importing the users router
const usersRouter = require('./routes/users');

// Importing the middleware
const bodyParser = require('body-parser');

// Using the middleware
app.use(bodyParser.json());

// Using the comments router
app.use('/comments', commentsRouter);

// Using the posts router
app.use('/posts', postsRouter);

// Using the likes router
app.use('/likes', likesRouter);

// Using the users router
app.use('/users', usersRouter);

// Listening to the port 4000
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
