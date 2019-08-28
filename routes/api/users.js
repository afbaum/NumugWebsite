const express = require('express');
const router = express.Router();

// @route   GET api/user
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.json({msg: "User works"}));

// @route   GET api/users/test
// @desc    Tests User route
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'User Works'}));

module.exports = router;
