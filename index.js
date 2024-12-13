const express = require('express')
const apiRoutes = require('./routes/api');
const app = express();

const port = 3000;

app.use('/post', apiRoutes);

app.get("/", (req,res) =>{
    res.send('ok').status(200);
})

app.listen(3000, () =>{
    `listening on port ${port}`
})