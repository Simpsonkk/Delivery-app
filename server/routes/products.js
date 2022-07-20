const Router = require('express');
const router = new Router();
const productscontroller = require('../controllers/productsController');

router.get('/:id', productscontroller.getProducts);

module.exports = router;
