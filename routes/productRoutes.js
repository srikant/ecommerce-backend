const express = require('express');
const { getProducts, getRecommendedProducts } = require('../controllers/productController');
const { getBanners } = require('../controllers/bannerController');
const router = express.Router();

router.get('/', getProducts);
router.get('/recommended', getRecommendedProducts);

router.get('/banners', getBanners);

module.exports = router;
