const express = require('express');
const server = express();

const hostname = '127.0.0.1';
const port = 3000;

// Setup public files to be served
server.use(express.static('public'));

// Setup api calls
server.get('/json', (req, res) => {
    res.json({
        data: "Hello World"
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});