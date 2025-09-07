const express = require('express');
const createPath = require('./helpers/create-path');
const getPosts = require('./helpers/get-posts');
const articleRouter = require('./routes/article');
const adminRouter = require('./routes/admin');
const authMiddleware = require('./middlewares/auth-middleware');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static('styles'));
app.use(express.urlencoded({ extended: false }));

app.use('/article', articleRouter);
app.use('/admin', authMiddleware, adminRouter);

app.get('/', (req, res) => {
  const posts = getPosts();
  const sortedPosts = posts.sort((a, b) => (b.date > a.date ? 1 : -1));
  res.render(createPath('home'), {
    headTitle: 'Home',
    posts: sortedPosts,
    isAdmin: false,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
