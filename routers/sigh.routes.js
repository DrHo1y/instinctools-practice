const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const getSecretKey = require('../utils/getJwtSecret');
const authMiddleware = require('../middleware/auth.middleware');
const User = require('../models/User.models');
const Partner = require('../models/Partner.models');

const router = Router();

router.post(
  '/register',
  [
    check('name', 'This name must be 2+ characterl long').exists().trim().isLength({ min: 2 }),
    check('surname', 'This surname must be 2+ character long').exists().trim().isLength({ min: 2 }),
    check('email', 'Email is not valid')
      .isEmail()
      .trim()
      .normalizeEmail({ gmail_remove_dots: false }),
    check('password', 'Password is not valid').exists().trim().isLength({ min: 8, max: 64 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
      }

      const candidate = await User.findOne({ email: req.body.email });
      if (candidate) {
        return res.status(409).json({ msg: 'User with this email already exists' });
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 12);
      const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: hashedPassword,
      });
      await user.save();
      return res.status(201).json({ msg: 'User created' });
    } catch (e) {
      return res.status(500).json({ msg: 'Server error! Try again.' });
    }
  }
);

router.post(
  '/login',
  [
    check('email', 'Email is not valid')
      .isEmail()
      .trim()
      .normalizeEmail({ gmail_remove_dots: false }),
    check('password', 'Password is not valid').exists().trim().isLength({ min: 8, max: 64 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
      }
      const candidate = await User.findOne({ email: req.body.email });
      if (!candidate) {
        return res.status(404).json({ msg: 'User not found' });
      }
      const isMatch = await bcrypt.compare(req.body.password, candidate.password);
      if (!isMatch) {
        return res.status(401).json({ msg: 'You entered an incorrect password' });
      }
      const token = jwt.sign(
        {
          email: candidate.email,
          userId: candidate._id,
        },
        getSecretKey(),
        { expiresIn: '1h' }
      );
      return res.status(200).json({
        token: `Bearer ${token}`,
        msg: 'OK',
        user: {
          name: candidate.name,
          userId: candidate._id,
          email: candidate.email,
        },
      });
    } catch (e) {
      return res.status(500).json({ msg: 'Server error! Try arain.' });
    }
  }
);

router.post(
  '/partner/register',
  [
    check('name', 'This name must be 2+ characterl long').exists().trim().isLength({ min: 2 }),
    check('surname', 'This surname must be 2+ character long').exists().trim().isLength({ min: 2 }),
    check('phoneNumber', 'Phone number is not valid').trim().isLength({ min: 13 }),
    check('email', 'Email is not valid')
      .isEmail()
      .trim()
      .normalizeEmail({ gmail_remove_dots: false }),
    check('password', 'Password is not valid').exists().trim().isLength({ min: 8, max: 64 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
      }

      const candidate = await Partner.findOne({ email: req.body.email });
      if (candidate) {
        return res.status(409).json({ msg: 'Partner with this email already exists' });
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 12);
      const partner = new Partner({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: hashedPassword,
      });
      await partner.save();
      return res.status(201).json({ msg: 'Partner created' });
    } catch (e) {
      return res.status(500).json({ msg: 'Server error! Try again.' });
    }
  }
);

router.post(
  '/partner/login',
  [
    check('email', 'Email is not valid')
      .isEmail()
      .trim()
      .normalizeEmail({ gmail_remove_dots: false }),
    check('password', 'Password is not valid').exists().trim().isLength({ min: 8, max: 64 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
      }
      const candidate = await Partner.findOne({ email: req.body.email });
      if (!candidate) {
        return res.status(404).json({ msg: 'Partner not found' });
      }
      const isMatch = await bcrypt.compare(req.body.password, candidate.password);
      if (!isMatch) {
        return res.status(401).json({ msg: 'You entered an incorrect password' });
      }
      const token = jwt.sign(
        {
          email: candidate.email,
          userId: candidate._id,
        },
        getSecretKey(),
        { expiresIn: '1h' }
      );
      return res.status(200).json({
        token: `Bearer ${token}`,
        msg: 'OK',
        isPartner: true,
        user: {
          name: candidate.name,
          userId: candidate._id,
          email: candidate.email,
        },
      });
    } catch (e) {
      return res.status(500).json({ msg: 'Server error! Try arain.' });
    }
  }
);

router.get('/auth', authMiddleware, async (req, res) => {
  try {
    const user =
      (await User.findOne({ _id: req.user.userId })) ||
      (await Partner.findOne({ _id: req.user.userId }));
    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id,
      },
      getSecretKey(),
      { expiresIn: '1h' }
    );
    return res.status(200).json({
      token: `Bearer ${token}`,
      msg: 'OK',
      user: {
        name: user.name,
        userId: user._id,
        email: user.email,
        isPartner: user.isPartner,
      },
    });
  } catch (e) {
    return res.status(500).json({ msg: 'Server error! Try arain.' });
  }
});

module.exports = router;
