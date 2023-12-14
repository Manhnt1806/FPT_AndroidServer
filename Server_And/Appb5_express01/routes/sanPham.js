var express = require('express');
var router = express.Router();
//nhung controller
var spCtrl = require('../controllers/sanpham.controller');
/* GET home page. */

//http://localhost:3000/ day la trang chu
router.get('/', spCtrl.listPage);//tu goi vao ham homePage

//http://localhost:3000/contact.html day la trang lien he
router.get('/add.html', spCtrl.addPage);//tu goi vao ham contactPage

module.exports = router; //khong duoc quen dong nay
