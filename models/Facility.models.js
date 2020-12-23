const { Schema, model } = require('mongoose');

const facilitySchema = new Schema({
  title: { type: String, required: true },
  facilityType: { type: String, required: true },
  location: {
    country: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    idx: { type: String, required: true },
  },
  description: { type: String, required: true },
  services: {
    parking: { type: String, required: true },
    breakfast: { type: Boolean, required: true, default: false },
    amenity: {
      freeWifi: { type: Boolean, required: true, default: false },
      bar: { type: Boolean, required: true, default: false },
      sauna: { type: Boolean, required: true, default: false },
      garden: { type: Boolean, required: true, default: false },
      terrace: { type: Boolean, required: true, default: false },
      nonSmoking: { type: Boolean, required: true, default: false },
      airConditioner: { type: Boolean, required: true, default: false },
      jacuzzi: { type: Boolean, required: true, default: false },
      pool: { type: Boolean, required: true, default: false },
      familyRoom: { type: Boolean, required: true, default: false },
    },
  },
  priceRange: {
    minPrice: { type: Number, required: true, default: 0 },
    maxPrice: { type: Number, required: true, default: 0 },
  },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = model('Hotel', facilitySchema);
