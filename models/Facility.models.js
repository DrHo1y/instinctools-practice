const { Schema, model } = require('mongoose');

const facilitySchema = new Schema({
  title: { type: String, required: true },
  facilityType: { type: String, required: true },
  location: {
    country: { type: Schema.Types.ObjectId, ref: 'Country', required: true },
    city: { type: Schema.Types.ObjectId, ref: 'City', required: true },
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
  rooms: [
    {
      name: { type: Number, required: false },
      roomType: { type: String, required: true },
      bedCount: { type: Number, required: true },
      descriptionRoom: { type: String, required: false },
      priceAdults: { type: Number, required: true },
      priceChildren: { type: Number, required: true },
    },
  ],
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

facilitySchema.methods.addRooms = function (room) {
  const clonedRooms = [...this.rooms];
  const cloneLength = clonedRooms.length;
  if (clonedRooms.length === 0) {
    room.name = 1; // eslint-disable-line no-param-reassign
  } else if (clonedRooms.length !== 0) {
    room.name = clonedRooms[cloneLength - 1].name + 1; // eslint-disable-line no-param-reassign
  }
  clonedRooms.push(room);
  this.rooms = clonedRooms;
  return this.save();
};

module.exports = model('Hotel', facilitySchema);
