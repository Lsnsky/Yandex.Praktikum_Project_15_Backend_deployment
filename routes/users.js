const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getUsers,
  getUserById,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getUserById);

// обновление профиля пользователя
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }).unknown(true),
}), updateUserProfile);

// обновление аватара пользователя
router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required(),
  }).unknown(true),
}), updateUserAvatar);


module.exports = router;
