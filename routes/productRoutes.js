const express = require('express');
const { getProducts, getRecommendedProducts } = require('../controllers/productController');
const router = express.Router();

router.get('/', getProducts);
router.get('/recommended', getRecommendedProducts);

module.exports = router;
