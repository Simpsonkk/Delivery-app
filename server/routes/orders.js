const Router = require('express');
const router = new Router();
const ordersController = require('../controllers/ordersController');

router.post('/', ordersController.setOrders);

module.exports = router;
