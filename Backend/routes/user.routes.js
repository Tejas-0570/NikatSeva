const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');
const { body } = require('express-validator');
const { loginUser } = require('../controller/user.controller');

// Register user

router.post('/register', [
  body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], userModel.registerUser);

router.post('/login', loginUser);

router.get('/getallusers', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;