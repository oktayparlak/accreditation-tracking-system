const Survey = require('../models/Survey');

/** Create */
exports.create = async (req, res) => {
  try {
    const survey = await Survey.create({ userId: req.user.id, ...req.body });
    return res.status(201).json({ survey });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const surveys = await Survey.findAll();
    return res.status(200).json({ surveys });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

exports.getById = async (req, res) => {
  try {
    const survey = await Survey.findByPk(req.params.id);
    return res.status(200).json({ survey });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
