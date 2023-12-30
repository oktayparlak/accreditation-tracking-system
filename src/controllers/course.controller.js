const Course = require('../models/Course');

/** Create */
exports.create = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    return res.status(201).json({ course });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

/** Read */
exports.getAll = async (req, res) => {
  try {
    const courses = await Course.findAll();
    if (!courses || courses.length === 0) return res.status(404).json({ error: { message: 'Courses not found' } });
    return res.status(200).json({ courses });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
