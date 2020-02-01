/*const http = require("http"); //common js model,es6 supported by v13
const getQueryString = require("./getQueryString");

//process has methods(of that module) ,properties,functions
console.log("hi");

http
  .createServer((request, response) => {
    //res.writeHead(200,{"Content-Type":"text/html"});
    response.writeHead(200, { "Content-Type": "application/json" }); //MIME TYPE
    const queryObject = getQueryString(request.url);
    response.write(JSON.stringify(queryObject));
    response.end();
    //res.write("hello..");
  })
  //console.log("wait");
  .listen(8080);
//server will listen to request port

//wikipedia.com/books/?isbn=20034324
*/
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
