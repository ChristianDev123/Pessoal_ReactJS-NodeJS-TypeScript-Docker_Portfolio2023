'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Certifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Certifications.init({
    mainImage: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    links: DataTypes.TEXT,
    pdfImages: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Certifications',
  });
  return Certifications;
};