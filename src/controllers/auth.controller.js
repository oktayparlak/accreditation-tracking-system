const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/User');

exports.login = async (req, res) => {
  try {
    const { username, password, type } = req.body;
    const user = await User.findOne({ where: { username, type } });
    if (!user) return res.status(404).json({ error: { message: 'User not found' } });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: { message: 'Invalid password' } });
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
