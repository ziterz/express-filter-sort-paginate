const router = require('express').Router();
const product = require('../controllers/product');

router.get('/', product.getProducts);

module.exports = router;
