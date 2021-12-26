const mongoose = require('mongoose');
const { isURL } = require('validator');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isURL(v),
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
  likes: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
    }],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
