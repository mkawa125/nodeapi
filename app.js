const express = require('express');
const app = express();
const morgan = require('morgan');

// require routes

const { getPosts } = require('./routes/post')

// Middleware
app.use(morgan("dev"));

app.get('/' , getPosts)
const port = 3000;

app.listen(port, () =>
{
    console.log(`Node Js API is listening on port: ${port}`)
}); 