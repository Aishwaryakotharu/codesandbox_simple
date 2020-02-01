const express = require("express");

const app = express(); //app is instance and has to listen to some port

app.get("/", (request, response) => {
  response.send("hello");
});

app.get("/profile", (request, response) => {
  response.send("profile page");
});

const server = app.listen("8080", () => {
  //console.log("server running on port "+server.address().port+".");  //formatted strings
  //console.log(`server running on port ${server.address().port}.${2+3}.${express()}`);  //template strings
  console.log(`server running on port ${server.address().port}.`);
});
