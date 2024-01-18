const { DataTypes } = require('sequelize');

const sequelize = require('../configs/database');

const Survey = sequelize.define('Survey', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  question1: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  question2: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  question3: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  question4: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  question5: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Survey;
