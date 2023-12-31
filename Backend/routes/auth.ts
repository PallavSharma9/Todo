import jwt from 'jsonwebtoken';
import express from 'express';
import {z} from 'zod'
import { signUpInputProps } from '@pallavsharma7/common';
import { authenticateJwt, SECRET } from '../middleware/index.js'; // Adjust the path as needed
import { User } from '../db/index.js'; // Adjust the path as needed

const router = express.Router();



  router.post('/signup', async (req, res) => {
    const signUpInput = signUpInputProps.safeParse(req.body);
    if(!signUpInput.success) {
      return res.status(411).json({
        msg: signUpInput.error
      })
    }
    let username = signUpInput.data.username;
    let password = signUpInput.data.password;

    const user = await User.findOne({ username });
    if (user) {
      res.status(403).json({ message: 'User already exists' });
    } else {
      const newUser = new User({ username, password });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'User created successfully', token });
    }
  });
  
  router.post('/login', async (req, res) => {
    const logInInput = signUpInputProps.safeParse(req.body);
    if(!logInInput.success){
      return res.status(411).json({
        msg: logInInput.error
        })
    }
    let username = logInInput.data.username
    let password = logInInput.data.password

    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });

    router.get('/me', authenticateJwt, async (req, res) => {
      const userId = req.headers['userId']
      const user = await User.findOne({ _id: userId });
      if (user) {
        res.json({ username: user.username });
      } else {
        res.status(403).json({ message: 'User not logged in' });
      }
    });

  export default router