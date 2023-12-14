var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller');


/* GET users listing. */
router.get('/',function(req, res, next) {
// hiển thị thông tin của user đã đăng nhập
  let objU = req.session.userLogin;
  res.send(objU);
});

router.get('/login',userCtrl.Login);
router.post('/login' ,userCtrl.Login);


module.exports = router;
