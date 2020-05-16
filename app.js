const express = require('express');

const app = express();

// require routes

const {getPosts} = require('./routes/post')

app.get('/' , getPosts)
const port = 3000;

app.listen(port, () =>
{
    console.log(`Node Js API is listening on port: ${port}`)
}); 