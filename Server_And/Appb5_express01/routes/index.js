var express = require('express');
var router = express.Router();
//nhung controller
var homeCtrl = require('../controllers/home.controller');
/* GET home page. */

//http://localhost:3000/ day la trang chu
router.get('/', homeCtrl.homePage);//tu goi vao ham homePage

//http://localhost:3000/contact.html day la trang lien he
router.get('/contact/:nhom?', homeCtrl.contactPage);//bắt buc có param
// nếu muốn param đó là tùy chọn có thể xuất hiện hoặc không xuất hiện thì thêm dấu ? ở cuối tên param

module.exports = router; //khong duoc quen dong nay
