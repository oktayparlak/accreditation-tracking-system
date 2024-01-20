const LearningMaterial = require('../models/LearningMaterial');

exports.create = async (req, res) => {
  try {
    const learningMaterials = req.body.learningMaterials;
    learningMaterials.forEach(async (learningMaterial) => {
      await LearningMaterial.create({ ...learningMaterial, userId: req.user.id });
    });
    return res.status(201).json({ message: 'Learning materials created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

exports.getAll = async (req, res) => {
  try {
    const learningMaterials = await LearningMaterial.findAll();
    if (!learningMaterials || learningMaterials.length === 0) return res.status(404).json({ error: { message: 'Learning materials not found' } });
    return res.status(200).json(learningMaterials);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

exports.getById = async (req, res) => {
  try {
    const learningMaterial = await LearningMaterial.findByPk(req.params.id);
    if (!learningMaterial) return res.status(404).json({ error: { message: 'Learning material not found' } });
    res.status(200).json(learningMaterial);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};
