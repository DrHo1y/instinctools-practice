const { Router } = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const Facility = require('../models/Facility.models');
const Country = require('../models/Country.models');
const City = require('../models/City.models');

const router = Router();

router.post('/add', authMiddleware, async (req, res) => {
  try {
    const facility = new Facility({
      title: req.body.title,
      facilityType: req.body.facilityType,
      location: {
        country: req.body.country,
        city: req.body.city,
        address: req.body.address,
        idx: req.body.idx,
      },
      description: req.body.description,
      services: {
        parking: req.body.parking,
        breakfast: req.body.breakfast,
        amenity: {
          freeWifi: req.body.freeWifi,
          bar: req.body.bar,
          sauna: req.body.sauna,
          garden: req.body.garden,
          terrace: req.body.terrace,
          nonSmoking: req.body.nonSmoking,
          airConditioner: req.body.airConditioner,
          jacuzzi: req.body.jacuzzi,
          pool: req.body.pool,
          familyRoom: req.body.familyRoom,
        },
      },
      priceRange: {
        minPrice: req.body.minPrice,
        maxPrice: req.body.maxPrice,
      },
      userId: req.user.userId,
    });
    facility.save();
    return res.status(200).json({ msg: 'Success' });
  } catch (e) {
    return res.status(500).json({ msg: `Server error! Try again.${e}` });
  }
});

router.get('/all', authMiddleware, async (req, res) => {
  try {
    const hotels = await Facility.find({ userId: req.user.userId });
    return res.status(200).json({ msg: 'Success', data: hotels });
  } catch (e) {
    return res.status(500).json({ msg: 'Server error! Try again.' });
  }
});

router.post('/get/location', async (req, res) => {
  try {
    const { location } = req.body;
    const candidate =
      (await Country.findOne({ name: location })) || (await City.findOne({ name: location }));
    if (!candidate) {
      return res.status(404).json({ msg: 'Location not found!' });
    }
    let place = '';
    let candidateId = '';
    if (candidate.countryId) {
      place = 'city';
      candidateId = candidate._id;
    } else if (candidate.shortName) {
      place = 'country';
      candidateId = candidate._id;
    }
    const facilityCandidates = await Facility.find({
      [`location.${place}`]: candidateId,
    }).populate('location.country location.city', 'name');
    if (facilityCandidates.length === 0) {
      return res.status(404).json({ msg: 'Facilities not found!' });
    }
    return res.status(200).json({ msg: 'Success', data: facilityCandidates });
  } catch (e) {
    return res.status(500).json({ msg: `Server error! Try againg. Error: ${e}` });
  }
});

module.exports = router;
