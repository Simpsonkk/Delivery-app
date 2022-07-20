const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Shops = sequelize.define('shops', {
  shopId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  shop: { type: DataTypes.STRING, unique: true },
});

const Products = sequelize.define('products', {
  productId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  img: { type: DataTypes.STRING, unique: true },
  price: { type: DataTypes.INTEGER },
  shopShopId: { type: DataTypes.INTEGER, primaryKey: true },
});

const Orders = sequelize.define('orders', {
  orderNumber: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  shop: { type: DataTypes.STRING},
  dishesNameAndQuantity: { type: DataTypes.STRING },
  totalPrice: { type: DataTypes.STRING },
  userName: { type: DataTypes.STRING },
  userEmail: { type: DataTypes.STRING },
  userPhone: { type: DataTypes.STRING },
  userAddress: { type: DataTypes.STRING },
});

Shops.hasMany(Products);
Products.belongsTo(Shops);

module.exports = {
  Shops,
  Products,
  Orders,
};
