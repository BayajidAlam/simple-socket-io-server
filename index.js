const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const http = require('http');
const server = http.createServer(app)

// home response 
app.get('/', (req,res)=>{
  res.send('Socket io Server is running')
})


// check weather app is listening 
app.listen(port, ()=>{
  console.log(`app is listening on port${port}`)
})