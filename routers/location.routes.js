const { Router } = require('express');
const Country = require('../models/Country.models');
const City = require('../models/City.models');

const router = Router();

router.get('/country', async (req, res) => {
  try {
    const counties = await Country.find();
    return res.status(200).json({ msg: 'Success', data: counties });
  } catch (e) {
    return res.status(500).json({ msg: 'Server error! Try again.' });
  }
});
router.post('/city', async (req, res) => {
  try {
    const cities = await City.find({ countryId: req.body.countryId });
    return res.status(200).json({ msg: 'Success', data: cities });
  } catch (e) {
    return res.status(500).json({ msg: 'Server error! Try again.' });
  }
});

module.exports = router;
