const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
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
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Sever Error');
  }
});

// @route   Post api/users/authorize/:id
// @desc    authorize  registered users
// @access  Private
router.post('/authorize/:id', auth, async (req, res)=> {

  const {confirm} = req.body;

  const userconfirm ={};
  userconfirm.user = req.params.id;
  if(confirm) userconfirm.confirm = confirm;

  try{
    let user = await User.findOne({ _id: userconfirm.user });

    if(user) {
      user = await User.findOneAndUpdate(
        { _id: userconfirm.user },
        { $set: userconfirm},
        { new: true}
      );

      return res.json(user);
    };

    await user.save();
    res.json(profile);

  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/users/authorize/:id
// @desc    delete registered users
// @access  Private
router.delete('/authorize/:id', auth, async (req, res)=> {

  const {confirm} = req.body;

  const userconfirm ={};
  userconfirm.user = req.params.id;
  if(confirm) userconfirm.confirm = confirm;

  try{
    let user = await User.findOne({ _id: userconfirm.user });

    if(user) {
      user = await User.findOneAndRemove(
        { _id: userconfirm.user },
      );
    };

    res.json({ msg: 'User Deleted'});
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




module.exports = router;
