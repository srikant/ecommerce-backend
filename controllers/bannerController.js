const banners = require('../models/bannerModel');
exports.getBanners = (req, res) => {
  res.status(200).json(banners);
}