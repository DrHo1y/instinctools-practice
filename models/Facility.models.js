const { Schema, model } = require('mongoose');

const facilitySchema = new Schema({
  name: { type: String, required: true },
  facilityType: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = model('Hotel', facilitySchema);
