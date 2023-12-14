var express = require('express');
var router = express.Router();
var api_u = require('../controllers/api/user.api.ctrl');

router.get('/', api_u.getUser);
router.get('/:id', api_u.getOneUser);
router.post('/', api_u.postUser);
router.put('/:id', api_u.putUser);
router.delete('/delete/:id', api_u.deleteUser);

module.exports = router;//dòng cuối cùng
