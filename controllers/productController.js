const products = require('../models/productModel');
const recommendedProducts = require('../models/recommendedProductModel');
exports.getProducts = (req, res) => {
  res.status(200).json(products);
};
exports.getRecommendedProducts = (req, res) => {
  res.status(200).json(recommendedProducts);
};
