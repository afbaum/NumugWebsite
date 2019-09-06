const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const {check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route   POST api/users/
// @desc    Register User route
// @access  Public
router.post('/', [
  check('email', 'Please include a valid email').isEmail(),
  check('name', 'Name is required').not().isEmpty(),
  check('password', 'Password must be at least 8 characters').isLength({ min:8 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()})
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if(user) {
      return res.status(400).json({ errors: [{msg: 'User already exsits'}]})
    }
    user = new User({
      name,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.send('User registered');

  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/users
// @desc    GET all users
// @access  Public
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Sever Error');
  }
});


module.exports = router;
