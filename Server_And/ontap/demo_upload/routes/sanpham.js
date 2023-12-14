var express = require('express');
var router = express.Router();
var spCtrl = require('../controllers/sanpham.controller')
//dành cho upload file
var multer = require('multer');
var objUpload = multer({dest: './tmp'})
//định nghĩa link
router.get('/', spCtrl.danh_sach);
router.get('/them-moi', spCtrl.them_sp)
//posst để thêm mới sp
router.post('/them-moi', objUpload.single('anh'), spCtrl.them_sp)



module.exports = router;