const express = require('express');
const http = require('http');
const app = express();

// 👇 Hardcoded secret (Security Hotspot)
const SECRET_KEY = 'super-secret-key-123';

app.get('/', (req, res) => {
  const userInput = req.query.input;

  // 👇 Vulnerability: Using eval on user input
  try {
    const result = eval(userInput); // ❌ Dangerous!
    res.send(`Eval result: ${result}`);
  } catch (e) {
    res.status(400).send('Invalid input');
  }
});

app.get('/insecure', (req, res) => {
  // 👇 Using HTTP instead of HTTPS (Security Hotspot)
  http.get('http://example.com', (response) => {
    res.send('Insecure request sent');
  });
});

app.get('/risky', (req, res) => {
  // 👇 Swallowed exception (Code Smell)
  try {
    riskyOperation();
  } catch (e) {
    // silently ignored ❌
  }
  res.send('Risky operation attempted');
});

function riskyOperation() {
  throw new Error('Something went wrong!');
}

// 👇 Code Duplication Example
function duplicateCodeBlock() {
  console.log('Duplicated Line 1');
  console.log('Duplicated Line 2');
  console.log('Duplicated Line 3');
}

function anotherDuplicateBlock() {
  console.log('Duplicated Line 1');
  console.log('Duplicated Line 2');
  console.log('Duplicated Line 3');
}

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
