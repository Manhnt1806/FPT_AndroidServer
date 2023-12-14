var http = require('http');
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<meta charset="utf-8"/><h1>Xin chào</h1></meta>');
    res.end();
}).listen(88);