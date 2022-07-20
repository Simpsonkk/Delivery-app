const Router = require('express');
const router = new Router();
const shopcontroller = require('../controllers/shopController');

router.get('/', shopcontroller.getShops);

module.exports = router;
