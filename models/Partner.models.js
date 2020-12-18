const { Schema, model } = require('mongoose');

const partnerSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isPartner: { type: Boolean, required: true, default: true },
});

module.exports = model('Partner', partnerSchema);
