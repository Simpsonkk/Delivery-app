const Router = require('express');
const router = new Router();
const shopRouter = require('./shops');
const productsRouter = require('./products');
const ordersRouter = require('./orders');

router.use('/shops', shopRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);

module.exports = router;
