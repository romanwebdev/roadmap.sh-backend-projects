const createPath = require('../helpers/create-path');
let posts = require('../data/posts');
const updatePosts = require('../helpers/update-posts');

const renderAdminPage = (req, res) => {
  res.render(createPath('home'), { headTitle: 'Admin', posts, isAdmin: true });
};

const renderCreatePostPage = (req, res) => {
  res.render(createPath('form'), {
    headTitle: 'Create Article',
    title: 'New Article',
    link: '/admin/new',
    articleTitle: '',
    articleContent: '',
    articleDate: '',
    isAdmin: true,
  });
};

const renderEditPostPage = (req, res) => {
  const post = posts.find((item) => item.id === Number(req.params.id));

  if (post) {
    res.render(createPath('form'), {
      headTitle: 'Edit Article',
      title: 'Edit Article',
      link: `/admin/edit/${post.id}`,
      articleTitle: post.title,
      articleContent: post.content,
      articleDate: post.date,
      isAdmin: true,
    });
  } else {
    res.status(404).render(createPath('error'), {
      headTitle: 'Article Not Found',
      content: 'Article Not Found',
    });
    return;
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = {
      id: Date.now(),
      ...req.body,
    };

    await updatePosts([...posts, newPost]);
    posts = [...posts, newPost];

    res.redirect('/admin');
  } catch (error) {
    console.error(error);
  }
};

const editPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const newPost = {
      id: Number(postId),
      ...req.body,
    };
    const updated = posts.map((post) =>
      post.id === Number(postId) ? newPost : post
    );

    await updatePosts(updated);
    posts = updated;

    res.redirect('/admin');
  } catch (error) {
    console.error(error);
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const filtered = posts.filter((post) => post.id !== Number(postId));

    await updatePosts(filtered);
    posts = filtered;

    res.redirect('/admin');
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  renderAdminPage,
  renderCreatePostPage,
  renderEditPostPage,
  createPost,
  editPost,
  deletePost,
};
