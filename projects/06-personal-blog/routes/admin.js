const express = require('express');
const router = express.Router();

const {
  renderAdminPage,
  renderCreatePostPage,
  renderEditPostPage,
  createPost,
  editPost,
  deletePost,
} = require('../controllers/admin');

router.get('/', renderAdminPage);
router.get('/new', renderCreatePostPage);
router.get('/edit/:id', renderEditPostPage);
router.post('/new', createPost);
router.post('/edit/:id', editPost);
router.post('/delete/:id', deletePost);

module.exports = router;
