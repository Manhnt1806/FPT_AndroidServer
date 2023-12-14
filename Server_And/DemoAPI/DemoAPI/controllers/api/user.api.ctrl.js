var md = require('../../models/user.models')
exports.getUser= async (req, res, next)=>{
// lấy danh sách user
    let objRes = {
        msg: '',
        status: 0,
        data: []
    };
    try{
        objRes.data = await md.userModel.find();
        objRes.msg = "Lấy dữ liệu thành công";
    }catch(err){
        console.log(err);
        objRes.msg = err.message;
    }
    res.json(objRes);
}

exports.postUser= async (req, res, next)=>{
    // thêm user kết quả trả về data là 1 đối tượng vừa mới tạo
    let objRes = {
        msg: '',
        status: 0,
        data: {}
    };
    // lấy dữ liệu post bằng req.body
    console.log(req.body);
    // validate đơn giản:
    if(req.body.username.length <5){
        objRes.msg = "Username phải nhập ít nhất 5 ký tự";
        return res.json(objRes); // thoát khỏi hàm
    }
    // làm tương tự với các validate khác....


    // đến dưới này thì ghi csdl:
    try{
    // tạo đối tượng để ghi vào csdl:
        let objU = new md.userModel();
        objU.username = req.body.username;
        objU.passwd = req.body.passwd;
        objU.email = req.body.email;
        objRes.data = await objU.save();
        objRes.msg = "Thêm thành công";
        objRes.status = 1;
    }catch(err){
        objRes.msg = "Lỗi: " + err.message;
    }
    return res.json(objRes);
}

exports.putUser= async (req, res, next)=>{
    // sửa user
    let objRes = {
        msg: '',
        status: 0,
        data: {}
    };
    try{
        let id_u = req.params.id;
        let dieuKien = { _id: id_u};
        // xử lý sự kiện put
        let uname = req.body.username;
        let email = req.body.email;
        let passwd = req.body.passwd;
        let validate = true;
        // validate đơn giản:
        if(req.body.username.length <5){
            objRes.msg = "Username phải nhập ít nhất 5 ký tự";
            validate = false;
        }
        // tạo đối tượng lưu csdl
        if(validate){
            let objU_2 = {};// tạo đối tượng thường, không phải model
            objU_2.username = uname;
            objU_2.email = email;
            objU_2.passwd = passwd;
            // tìm theo chuỗi id và update
            await md.userModel.findByIdAndUpdate(id_u, objU_2);
            objRes.msg = "Cập nhật thành công";
            objRes.status = 1;
        }
        // trả lại thông tin user đã cập nhật
        objRes.data = await md.userModel.findById(dieuKien);
    }catch(err){
        objRes.msg = err.message;
    }
    return res.json(objRes);
}

exports.deleteUser= async (req, res, next)=>{
    // xóa user
    let objRes = {
        msg: '',
        status: 0,
        data: {}
    };
    let id_u = req.params.id;
    // xóa
    try{
        await md.userModel.findByIdAndDelete(id_u);
        objRes.msg = "Đã xóa thành công";
        objRes.status = 1;
    }catch(err){
        objRes.msg = err.message;
    }
    res.json (objRes);
}

exports.getOneUser = (req, res, next)=>{
    res.send("Hàm lấy 1 user");
}