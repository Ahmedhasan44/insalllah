// app.js dosyası
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Merhaba Dünya!\n');
});

server.listen(port, hostname, () => {
  console.log(`Sunucu adresi http://${hostname}:${port}/`);
});
