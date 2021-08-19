const { Category } = require('../models');

exports.getCategories = async (req, res, next) => {
  try {
    const data = await Category.findAll();
    res.status(200).json({ data });
  } catch (err) {
    next(err);
  }
};
