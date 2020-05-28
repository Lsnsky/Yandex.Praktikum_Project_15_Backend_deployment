const { NODE_ENV, JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const AuthError = require('../errors/auth-err');


// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization = '' } = req.headers;
  if (authorization || authorization.startsWith('Bearer')) {
    const token = authorization.replace('Bearer ', '');
    let payload;
    try {
      payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
    } catch (err) {
      return next(new AuthError('Неправильный email или пароль'));
    }
    req.user = payload;
  }
  next();
};
