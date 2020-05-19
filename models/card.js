const mongoose = require('mongoose');
const validator = require('validator');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },

  link: {
    type: String,
    validate: {
      validator(link) {
        return validator.isURL(link);
      },
      message: (url) => `${url.value} некорректный адрес!`,
    },
    required: true,
  },

  owner: {
    type: { ObjectId },
    ref: 'User',
    required: true,
  },

  likes: {
    type: [ObjectId],
    ref: 'User',
    default: [],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Card', cardSchema);
