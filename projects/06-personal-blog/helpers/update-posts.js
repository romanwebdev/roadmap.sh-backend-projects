const fs = require('fs/promises');
const path = require('path');

const updatePosts = async (posts) => {
  await fs.writeFile(
    path.join(__dirname, '..', 'data', 'posts.json'),
    JSON.stringify(posts, null, 2)
  );
};

module.exports = updatePosts;
