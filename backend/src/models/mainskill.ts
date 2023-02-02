import { DataTypes } from "sequelize";
import dbConfig from "../config";

export default dbConfig.define("mainskill",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mainImage:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    links:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    timeExperience:{
        type: DataTypes.STRING,
        allowNull: true,
    }
});