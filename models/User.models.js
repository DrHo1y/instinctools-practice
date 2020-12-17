const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isRepresentative: { type: Boolean, required: true, default: false },
});

module.exports = model('User', userSchema);
