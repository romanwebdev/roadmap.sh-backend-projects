const base64 = require('base-64');
const createPath = require('../helpers/create-path');

const decodeCredentials = (authHeader) => {
  const endcodedCredentials = authHeader.trim().replace(/^Basic\s+/i, '');
  const decodedCredentials = base64.decode(endcodedCredentials);
  return decodedCredentials.split(':');
};

const authMiddleware = (req, res, next) => {
  const [username, password] = decodeCredentials(
    req.headers.authorization || ''
  );

  if (username === 'admin' && password === 'admin') {
    return next();
  }

  res.set('WWW-Authenticate', 'Basic realm="Restricted Area"');
  res.status(401).render(createPath('error'), {
    headTitle: 'Authentication required',
    content: 'Authentication required',
  });
};

module.exports = authMiddleware;
