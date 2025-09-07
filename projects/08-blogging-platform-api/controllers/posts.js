import Post from '../models/post.js';

const getPosts = async (req, res) => {
  try {
    const { title, content, category } = req.query;
    let filter = {};
    if (title) filter.title = { $regex: title, $options: 'i' };
    if (content) filter.content = { $regex: content, $options: 'i' };
    if (category) filter.category = { $regex: category, $options: 'i' };

    const result = await Post.find(filter);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const result = await Post.findOne({ _id: postId });
    if (!result) {
      res.status(404).json({ message: 'Blog post not found' });
      return;
    }

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const result = await Post.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const result = await Post.findOneAndUpdate(
      { _id: postId },
      { $set: req.body },
      { new: true }
    );
    if (!result) {
      res.status(404).json({ message: 'Blog post not found' });
      return;
    }

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const result = await Post.deleteOne({ _id: postId });
    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Blog post not found' });
      return;
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export { getPosts, getPost, createPost, updatePost, deletePost };
