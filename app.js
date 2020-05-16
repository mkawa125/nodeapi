const express = require('express');

const app = express();

app.get('/', (req, res) =>
{
    res.send('Hello from Node JS api');
})
const port = 3000;

app.listen(port, () =>
{
    console.log(`Node Js API is listening on port: ${port}`)
}); 