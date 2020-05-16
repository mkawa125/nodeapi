const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

// DB Connection
mongoose.connect(process.env.MONGO_URI , { useNewUrlParser: true , useUnifiedTopology: true }).then(() => console.log("Database connected"))

mongoose.connection.on("error", err =>
{
    console.log(`Database COnnection Error: ${ err.message }`)
});

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