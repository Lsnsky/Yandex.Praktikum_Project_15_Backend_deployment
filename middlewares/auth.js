const { NODE_ENV, JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');


// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization || authorization.startsWith('Bearer')) {
    const token = authorization.replace('Bearer ', '');
    let payload;
    try {
      payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
    } catch (err) {
      next(err);
    }
    req.user = payload;
  }
  next();
};
