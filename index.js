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
  console.log("socket connection connected " + socket.id);
});
