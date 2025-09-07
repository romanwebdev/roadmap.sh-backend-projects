const fs = require('fs');
const path = require('path');

const getPosts = () =>
  JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, '..', 'data', 'posts.json'),
      'utf-8'
    ) || '[]'
  );

module.exports = getPosts;
