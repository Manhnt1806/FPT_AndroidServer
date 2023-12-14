var fs
    = require('fs')
exports.danh_sach = (req, res, next)=>{
    //render ra view danh sách
    res.render('sanpham/danh_sach')
}
exports.them_sp = (req, res, next)=>{
    //ghi log để xem dữ liệu post lên
    console.log(req.file, req.body);
    if(req.method == 'POST'){
        //di chuyển file từ thư mục tạm /tmp sang thư mục public/upload
        //fs.rename(đường dẫn tmp, đường dẫn mới, hàm callback)
        fs.rename(req.file.path, "./public/uploads"+req.file.originalname,
            (err)=>{
            if(err){
                console.log(err)
            }else {
                console.log("url : http://localhost:3000/uploads/"+req.file.originalname)
            }
            })
        //fs.renameSync: tự nghiên cứu
    }
    res.render('sanpham/them_sp')
}