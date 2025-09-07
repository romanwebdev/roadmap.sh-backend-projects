export const validatePost = (req, res, next) => {
  const { title, content, category, tags } = req.body;

  if (!title || !content || !category || !tags) {
    res.status(400).json({ message: 'Missing required fields' });
    return;
  }

  if (
    !Array.isArray(tags) ||
    tags.length === 0 ||
    !tags.every((tag) => typeof tag === 'string')
  ) {
    res
      .status(400)
      .json({ message: 'Tags must be a non-empty array of strings' });
    return;
  }

  if (
    typeof title !== 'string' ||
    typeof content !== 'string' ||
    typeof category !== 'string'
  ) {
    res
      .status(400)
      .json({ message: 'Title, content, and category must be strings' });
    return;
  }

  next();
};
