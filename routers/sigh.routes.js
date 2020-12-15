const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const User = require('../models/User.models')

const router = Router()

router.post(
  '/register',
  [
    check('name', 'This name must be 2+ characterl long')
      .exists()
      .trim()
      .isLength({ min: 2 }),
    check('surname', 'This surname must be 2+ character long')
      .exists()
      .trim()
      .isLength({ min: 2 }),
    check('email', 'Email is not valid')
      .isEmail()
      .trim()
      .normalizeEmail({ gmail_remove_dots: false }),
    check('password', 'Password is not valid')
      .exists()
      .trim()
      .isLength({ min: 8, max: 64 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(422).json(errors.array())
      }

      const candidate = await User.findOne({ email: req.body.email })
      if (candidate) {
        return res
          .status(409)
          .json({ msg: 'User with this email already exists' })
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 12)
      const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: hashedPassword,
      })
      await user.save()
      return res.status(201).json({ msg: 'User created' })
    } catch (e) {
      return res.status(500).json({ msg: 'Server error! Try again.' })
    }
  }
)

module.exports = router