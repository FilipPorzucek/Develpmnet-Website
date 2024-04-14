const http = require('http');
const fetch = require('node-fetch');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    fetch('https://filipporzucek.github.io/FirstProtfolioProject/data.json')
        .then(response => response.json())
        .then(data => {
            res.end(JSON.stringify(data));
        })
        .catch(error => {
            res.statusCode = 500;
            res.end('Internal Server Error');
        });
});

const PORT = 3000;

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
});