var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', userCtrl.listUser);

//Tạo địa chỉ trang đăng ký
router.get('/reg', userCtrl.reg); //get để hiển thị form
router.post('/reg', userCtrl.reg)

//Trang sửa
router.get('/edit/:id_u', userCtrl.edit);
router.post('/edit/:id_u', userCtrl.edit);

router.get('/delete/:id_u', userCtrl.delete);
router.post('/delete/:id_u', userCtrl.delete);

module.exports = router;
