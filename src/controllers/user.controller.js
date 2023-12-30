const bcrypt = require('bcrypt');

const User = require('../models/User');

/** Create */
exports.create = async (req, res) => {
  try {
    const { username, password, type } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hash, type });
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
