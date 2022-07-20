const { Products } = require('../models/models');

class ProductsController {
  async getProducts(req, res) {
    const shopId = req.params.id;
    const product = await Products.findAll({
      where: {
        shopShopId: shopId,
      },
    });
    return res.json(product);
  }
}

module.exports = new ProductsController();
