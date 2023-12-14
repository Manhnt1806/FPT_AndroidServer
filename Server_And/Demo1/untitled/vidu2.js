const http
    = require('http');
const server= http.createServer((req, res)=>{
    console.log(req.url); //xem dia chi
    switch (req.url) {
        case '/':
            homePage(req, res);
            break;
        case '/gioithieu.html':
            aboutPage(req, res);
            break;
        default:
            res.writeHead(200,
                {'Content-Type':'Text/html; charset=utf-8'});
            res.end('<h1>Trang k ton tai</h1>')
    }
});

const homePage = (req, res)=>{
    res.writeHead(200, {'Content-Type':'Text/html; charset=utf-8'})
    res.end('<h1>Day la trang Home</h1>')
}
const aboutPage = (req, res)=>{
    res.writeHead(200, {'Content-Type':'Text/html; charset=utf-8'})
    res.end('<h1>Day la trang GT</h1>')
}
server.listen(88);
console.log("Server chay: http://localhost:88")