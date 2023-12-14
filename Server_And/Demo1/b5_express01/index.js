var express = require('express');
var app = express();
//Định nghĩa các route để thực thi công việc
app.get('/', (req, res)=>{
    res.send("<h1>Trang chủ</h1>")
})
app.get('/gioithieu.php', (req, res)=>{
    res.send("<h1>Trang giới thiệu</h1>")
})
//mở côổng lắng nghe ết nối
app.listen(3000, (err)=>{
    if(err) throw err;
    console.log("Server đang cha cổng 3000")
})
//Chạy lênh node index.js