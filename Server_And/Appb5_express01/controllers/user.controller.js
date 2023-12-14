var md = require('../models/user.model')


exports.listUser = async (req, res, next)=>{
    let msg = '';
    let list = {_id:'', username:'', passwd:'', email:''};
    try{
        list = await md.userModel.find();
        msg = "lấy dữ liêu thành công!"
    }catch (err) {
        console.log(err)
        msg = err.message

    }
    return res.render("user/list", {listUser: list, msg: msg});
}







exports.edit = async (req, res, next )=>{
    let msg = {_id:'', username:'', passwd:'', email:''};
    let objU = {};
    try{
        let id_u = req.params.id_u;
        let dieuKien = {_id: id_u};

        //xử lý sự kiện posst
        if(req.method === 'POST'){
            let uname = req.body.username
            let email = req.body.email
            let passwd = req.body.passwd
            let validate = true;
            if (req.body.username.length < 5) {
                msg = "username ít nhât 5 kt";
                validate = false
            }
            //tạo đối tượng lưu csdl
            if(validate){
                let objU_2 = {};
                objU_2.username = uname;
                objU_2.email = email;
                objU_2.passwd = passwd;
                await md.userModel.findByIdAndUpdate(id_u, objU_2)
                msg = "Cập nhập thành công"
            }

        }
        objU = await md.userModel.findById(dieuKien)

    }catch (err) {
        msg =err.message    }
    res.render('user/edit', {msg: msg}, {objU: objU});
}
exports.delete = async (require, res, next)=>{
    let id_u = req.params.id_u;
    if(req.method === 'POST'){
        try{
            await md.userModel.findByIdAndDelete(id_u)
            res.send("Đã xóa <a href='/user'>DS</a>")
        }catch (err) {
            res.send(err.message)
        }
    }
    res.render('user/delete');
}
exports.reg = async (req, res, next) => {

    console.log(req.body);
    let msg = '';
    if (req.method === 'POST') {
        //validate
        if (req.body.username.length < 5) {
            msg = "username ít nhât 5 kt";
            return res.render('user/reg', {msg: msg});
        }
        //làm tương tự các validate khác
        //ghi csdl
        try {
            //tạo đối tượng đ ghi vào csdl
            let objU = new md.userModel();
            objU.username = req.body.username;
            objU.passwd = req.body.passwd;
            objU.email = req.body.email;
            await objU.save()
            msg = "ĐĂng ký thành cỗng"

        } catch (err) {
            msg = "Lỗi: " + err.message;
        }
    }


    res.render('user/reg')
}