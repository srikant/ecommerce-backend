const products = require('../models/productModel');
exports.getProducts = (req, res) => {
  res.status(200).json(products);
};