import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

const registerUser = asyncHandler(async (req, res) => {
  console.log('Received registration request:', req.body);
  const { name, email, password } = req.body;

  try {
    console.log('Checking if user exists');
    const userExists = await User.findOne({ email });

    if (userExists) {
      console.log('User already exists');
      return res.status(400).json({
        message: 'User already exists'
      });
    }

    console.log('Creating new user');
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      console.log('User created successfully');
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      console.log('Failed to create user');
      res.status(400);
      throw new Error('Invalid user data');
    }
  } catch (error) {
    console.error('Registration error:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Validation error',
        error: error.message,
      });
    }
    
    res.status(500).json({
      message: 'Server error during registration',
      error: error.message,
    });
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    return res.status(401).json({
      message: 'Invalid email or password'
    });
  }
});

export { registerUser, authUser };