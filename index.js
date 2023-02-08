const express = require('express');
const { Server } = require("socket.io");
const app = express();
const port = process.env.PORT || 5000;

const http = require('http');
const httpServer = http.createServer(app)
const io = new Server(httpServer)

io.on("connection", (socket)=>{
  console.log("New user connected to our app")
  socket.on("disconnect", (socket)=>{
    console.log("User disconnect")
  })

  socket.on("testEvent", (data)=>{
    console.log(data)
  })
})

// home response 
app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/app.html')
})

// check weather app is listening 
httpServer.listen(port, ()=>{
  console.log(`app is listening on port${port}`)
})