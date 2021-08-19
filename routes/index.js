const router = require('express').Router();
const category = require('./category');
const product = require('./product');

router.use('/categories', category);
router.use('/products', product);

module.exports = router;
