const Application = require('../models/Application');
const Question = require('../models/Question');
const MeasuringTool = require('../models/MeasuringTool');
const User = require('../models/User');
const File = require('../models/File');

/** Create */
exports.create = async (req, res) => {
  try {
    const { measuringTools, courseId } = JSON.parse(req.body.data);
    const application = await Application.create({ userId: req.user.id, courseId });
    measuringTools.forEach(async (measuringTool) => {
      const createdMeasuringTool = await MeasuringTool.create({
        applicationId: application.id,
        name: measuringTool.name,
        impactRate: measuringTool.impactRate,
      });
      const transformedQuestions = measuringTool.questions.map((question) => {
        return { ...question, measuringToolId: createdMeasuringTool.id };
      });
      await Question.bulkCreate(transformedQuestions);
    });
    const transformedFiles = req.files.map((file) => {
      return { applicationId: application.id, name: file.originalname, url: file.path };
    });
    await File.bulkCreate(transformedFiles);
    return res.status(201).json({ message: 'Application created successfully' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

/** Read */
exports.getById = async (req, res) => {
  try {
    const application = await Application.findOne({ where: { id: req.params.id }, include: [User] });
    if (!application) return res.status(404).json({ error: { message: 'Application not found' } });
    const measuringTools = await MeasuringTool.findAll({ where: { applicationId: application.id }, include: [Question] });
    const files = await File.findAll({ where: { applicationId: application.id } });
    const data = { ...application.dataValues, measuringTools, files };
    return res.status(200).json({ ...data });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const applications = await Application.findAll({ include: [User] });
    if (!applications || applications.length === 0) return res.status(404).json({ error: { message: 'Applications not found' } });
    return res.status(200).json({ applications });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

/** Update */
exports.update = async (req, res) => {};
