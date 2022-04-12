const express = require('express');
const app = express();

app.use('/',express.static(path.join(__dirname,'views')));



const server = app.listen(process.env.PORT | 3000, ()=> console.log(`Listening on port ${process.env.PORT}...   http://localhost:${process.env.PORT}`)); 