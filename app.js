// app.js

const http = require('http');

const PORT = 3000;

function sayHello(name) {
  if (!name) {
    console.log("Name is required");
    return;
  }
  console.log(`Hello, ${name}!`);
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    sayHello("World");
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Node.js Server\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' }
