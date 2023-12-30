const { DataTypes } = require('sequelize');

const sequelize = require('../configs/database');

const MeasuringTool = sequelize.define('MeasuringTool', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  applicationId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  impactRate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = MeasuringTool;
