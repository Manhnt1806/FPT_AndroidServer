const myMD = require('../models/user.model');


exports.Login = async (req, res, next)=>{
    let msg = '';
    if(req.method == 'POST'){
        try {
            let objU = await myMD.userModel.findOne({username: req.body.username});
            console.log(objU);
            if(objU != null ){
// tồn tại username ==> kiểm tra passwd
                if(objU.passwd == req.body.passwd){
// đúng thông tin tài khoản ==> lưu vào session
                    req.session.userLogin = objU;
// chuyển trang về trang quản trị
                    return res.redirect('/users');
                }else{
                    msg = 'Sai password';
                }
            }else{
                msg = 'Không tồn tại tài khoản: ' + req.body.username;
            }
        } catch (error) {
            msg = error.message;
        }
    }
    res.render('user/login', {msg:msg})
}
