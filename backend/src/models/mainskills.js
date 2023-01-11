'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MainSkills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MainSkills.init({
    mainimage: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    links: DataTypes.TEXT,
    timeExperience: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MainSkills',
  });
  return MainSkills;
};