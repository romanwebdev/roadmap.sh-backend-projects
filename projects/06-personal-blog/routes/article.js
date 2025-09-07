const express = require('express');
const router = express.Router();
const { getArticle } = require('../controllers/article');

router.get('/:id', getArticle);

module.exports = router;
