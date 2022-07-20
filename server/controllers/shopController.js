const { Shops } = require('../models/models');

class ShopController {
  async getShops(req, res) {
    const shops = await Shops.findAll();
    return res.json(shops);
  }
}

module.exports = new ShopController();
