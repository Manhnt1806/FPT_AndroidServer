const http
    = require('http');
const fs = require('fs');
const server = http.createServer((req, res, next)=>{
    //ghi log url
    console.log(req.url);
    switch (req.url) {
        case '/gt.html':
            //đọc file html và trả về client
            fs.readFile('gt.html', (err, data)=>{
                if(err){
                    console.log(err);
                    return res.end("Lỗi không tồn tại file gt!!!!!!!");
                }
                res.writeHead(200);
                res.write(data.toString('utf8'));
                return res.end();
            })
            break;
        case '/style.css':
            fs.readFile('style.css', (err, data)=>{
                if(err){
                    console.log(err);
                    return res.end("Lỗi không tồn tại file gt!!!!!!!");
                }
                res.writeHead(200);
                res.write(data.toString('utf8'));
                return res.end();
            })
            break;

        default:
            if(req.url.indexOf('/img/')>=0) {
                //Có tồn tại request truy cập thư mục img
                fs.readFile(req.url.substring(1), (err, data) => {
                    if (err) {
                        console.log(err);
                        return res.end("Lỗi không tồn tại file!!!!!!!");
                    }
                    ;
                    console.log(data);
                    //trả về ảnh không cần viết writeHead
                    return res.end(data);
                })
            }
            fs.readFile('home.html', (err, data)=>{
                if(err){
                    console.log(err);
                    return res.end("Lỗi không tồn tại file home!!!!!!!");
                }
                res.writeHead(200);
                res.write(data.toString('utf8'));
                return res.end();
            })
            break;
    }
});
server.listen(8080);
console.log("Server running.....");//node vidu1.js
