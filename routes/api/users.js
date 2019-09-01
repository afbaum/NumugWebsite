const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator');


// @route   POST api/users/
// @desc    Tests User route
// @access  Public
router.post('/', [
  check('email').isEmail(), check('password').isLength({ min:8 })
](req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array()})
  }

  User.create({
    
  })
});


module.exports = router;
