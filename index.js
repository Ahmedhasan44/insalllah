// index.js

const http = require('http');

const hostname = '0.0.0.0'; // Tüm arabirimleri dinle
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Yemek tarifleri</title></head><body><h1>Merhaba Dünya!</h1></body></html>');
});

server.listen(port, hostname, () => {
  console.log(`Sunucu adresi http://${hostname}:${port}/`);
});
