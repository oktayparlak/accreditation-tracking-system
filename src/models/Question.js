const { DataTypes } = require('sequelize');

const sequelize = require('../configs/database');

const Question = sequelize.define('Question', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  measuringToolId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  average: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fullPoints: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  relevantNumbers: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Question;
