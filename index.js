let express = require("express");
let socket = require("socket.io");
//setup app
let app = express();

//setup server
let server = app.listen(5000, () => {
  console.log("node server is running at port 5000 ");
});

//routes setup
app.get("/", (res, req) => {
  req.sendFile(__dirname + "/public/index.html");
});

//socket setup
let io = socket(server);
io.on("connection", (socket) => {
  // console.log("socket connection connected " + socket.id);
  socket.on("chat", (data) => {
    // console.log(data);
    //send  message to all sockets
    io.sockets.emit("chat", data);
  });

  //typing event
  socket.on("typing", (name) => {
    //send typing event except that socket (broading)
    socket.broadcast.emit("typing", name);
  });
});
