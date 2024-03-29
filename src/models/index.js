const Application = require('./Application');
const Course = require('./Course');
const File = require('./File');
const LearningMaterial = require('./LearningMaterial');
const LearningMaterialQuestion = require('./LearningMaterialQuestion');
const MeasuringTool = require('./MeasuringTool');
const Question = require('./Question');
const Survey = require('./Survey');
const User = require('./User');

module.exports = () => {
  File.belongsTo(Application, { foreignKey: 'applicationId' });
  Application.hasMany(File, { foreignKey: 'applicationId' });

  Question.belongsTo(MeasuringTool, { foreignKey: 'measuringToolId' });
  MeasuringTool.hasMany(Question, { foreignKey: 'measuringToolId' });

  Application.belongsTo(User, { foreignKey: 'userId' });
  User.hasMany(Application, { foreignKey: 'userId' });

  Application.belongsTo(Course, { foreignKey: 'courseId' });
  Course.hasMany(Application, { foreignKey: 'courseId' });

  MeasuringTool.belongsTo(Application, { foreignKey: 'applicationId' });
  Application.hasMany(MeasuringTool, { foreignKey: 'applicationId' });

  Survey.belongsTo(User, { foreignKey: 'userId' });
  User.hasMany(Survey, { foreignKey: 'userId' });

  LearningMaterial.belongsTo(User, { foreignKey: 'userId' });
  User.hasMany(LearningMaterial, { foreignKey: 'userId' });

  LearningMaterialQuestion.belongsTo(Question, { foreignKey: 'questionId' });
  Question.hasMany(LearningMaterialQuestion, { foreignKey: 'questionId' });

  LearningMaterialQuestion.belongsTo(LearningMaterial, { foreignKey: 'learningMaterialId' });
  LearningMaterial.hasMany(LearningMaterialQuestion, { foreignKey: 'learningMaterialId' });
};
