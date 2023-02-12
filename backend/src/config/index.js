"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig = new sequelize_1.Sequelize(String(process.env.DB_NAME), String(process.env.DB_USER), String(process.env.DB_PWD), {
    port: Number(process.env.DB_PORT),
    dialect: 'mysql',
    host: process.env.DB_HOST
});
exports.default = dbConfig;
