import { Sequelize } from "sequelize";

const dbConfig = new Sequelize(
    String(process.env.DB_NAME),
    String(process.env.DB_USER),
    String(process.env.DB_PWD),{
    port:Number(process.env.DB_PORT),
    dialect:'mysql',
    host:process.env.DB_HOST
});

export default dbConfig;