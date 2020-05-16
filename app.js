const express = require('express');
const app = express();
const morgan = require('morgan');

// require routes

const postRoutes = require('./routes/post')

const myOwnMiddleware = (req , res , next) =>
{
    console.log("Middleware applied !!!");

    next()
}
// Middleware
app.use(morgan("dev"));
app.use(myOwnMiddleware);

app.get('/' , postRoutes)
const port = 3000;

app.listen(port, () =>
{
    console.log(`Node Js API is listening on port: ${port}`)
}); 