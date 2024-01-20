const { DataTypes } = require('sequelize');

const sequelize = require('../configs/database');

const LearningMaterialQuestion = sequelize.define(
  'LearningMaterialQuestion',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    questionId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    learningMaterialId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = LearningMaterialQuestion;
