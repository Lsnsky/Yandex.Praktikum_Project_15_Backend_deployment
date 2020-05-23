const Card = require('../models/card');
const NotFoundError = require('../errors/not-found-err');
const BadRequestError = require('../errors/bad-request-err');
const AuthError = require('../errors/auth-err');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((card) => {
      if (!card) {
        throw new BadRequestError('Ошибка при отправке запроса');
      }
      res.send({ data: card });
    })
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  console.log(req.user.id);
  console.log(req.body);
  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      if (!card) {
        throw new BadRequestError('Ошибка при отправке запроса');
      }
      res.send({ data: card });
    })
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.id)
    .then((card) => {
      if (!card) {
        return Promise.reject(new NotFoundError(`Карточка с _id:${req.params.id} не найдена в базе данных`));
      }
      const { owner } = card;
      if (req.user._id === owner.toString()) {
        return Card.findByIdAndRemove(req.params.id);
      }
      return Promise.reject(new AuthError('нет доступа для удаления карточки'));
    })
    .then(() => res.status(200).send({ message: `Карточка с _id:${req.params.id} успешно удалена из базы данных` }))
    .catch(next);
};

// лайк
module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.id, { $addToSet: { likes: req.user._id } }, { new: true })
    .then((card) => {
      if (!card) {
        throw new BadRequestError('Ошибка при отправке запроса');
      }
      res.send({ data: card });
    })
    .catch(next);
};

// дизлайк
module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.id, { $pull: { likes: req.user._id } }, { new: true })
    .then((card) => {
      if (!card) {
        throw new BadRequestError('Ошибка при отправке запроса');
      }
      res.send({ data: card });
    })
    .catch(next);
};
