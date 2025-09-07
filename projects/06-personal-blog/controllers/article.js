const createPath = require('../helpers/create-path');
const getPosts = require('../helpers/get-posts');

const getArticle = (req, res) => {
  const posts = getPosts();
  const post = posts.find((p) => p.id === +req.params.id);

  if (!post) {
    res.status(404).render(createPath('error'), {
      headTitle: 'Article Not Found',
      content: 'Article Not Found',
    });
    return;
  }

  res.render(createPath('article'), {
    headTitle: `Article ${req.params.id}`,
    ...post,
  });
};

module.exports = { getArticle };
