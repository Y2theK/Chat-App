const express = require("express");

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
