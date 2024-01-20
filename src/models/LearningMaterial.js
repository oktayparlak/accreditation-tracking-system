const { DataTypes } = require('sequelize');

const sequelize = require('../configs/database');

const LearningMaterial = sequelize.define('LearningMaterial', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  contributionLevel: {
    type: DataTypes.ENUM('1', '2', '3', '4', '5'),
    allowNull: false,
  },
});

module.exports = LearningMaterial;
