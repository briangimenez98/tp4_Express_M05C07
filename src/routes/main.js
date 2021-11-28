var express = require('express');
var router = express.Router();
const {main,secondMain, admin} = require('../controllers/mainController');
const adminMiddleware = require('../middlewares/adminMiddleware')

router.get('/', main)
router.get('/second',secondMain);
router.get('/admin', adminMiddleware , admin)

module.exports = router;