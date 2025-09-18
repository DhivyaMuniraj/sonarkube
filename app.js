// app.js

const http = require('http');

const PORT = 3000;

function sayHello(name) {
  if (!name) {
    console.log("Name is requiredd");
    console.log("Name is requiredd");
    console.log("Name is requiredd");
    return;
  }
  console.log(`Hello, ${name}!`);
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    sayHello("World");
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Node.js Server\n');
  } else if (req.url === "/hello") {
    sayHello("User");
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello User\n');
  } else if (req.url === "/greet") {
    sayHello("Guest");
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Greetings Guest\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
