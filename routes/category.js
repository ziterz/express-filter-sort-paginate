const router = require('express').Router();
const category = require('../controllers/category');

router.get('/', category.getCategories);

module.exports = router;
