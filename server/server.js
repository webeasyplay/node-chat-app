const path = require('path');

const publicPath = path.join(__dirname + '/../public');

console.log(publicPath);

const express = require('express');
const app = express();
const port = process.env.port || 3000
// app.use(app.static(publicPath));

app.listen(port,()=>{
    console.log(`server running${port}`);

})