const { Orders } = require('../models/models');

class OrdersController {
  async setOrders(req, res) {
    const body = {
      ...req.body,
      dishesNameAndQuantity: JSON.stringify(req.body.dishesNameAndQuantity),
    };
    console.log('body', body);
    const orders = await Orders.create(body);
    return res.json(orders);
  }
}

module.exports = new OrdersController();
