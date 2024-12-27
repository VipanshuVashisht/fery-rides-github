const express = require('express');
const User = require('../models/user');

const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;

// Register User
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const newUser = new User({ username, password });
  try {
    await newUser.save();
    res.status(200).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user.' });
  }
});

module.exports = router;
