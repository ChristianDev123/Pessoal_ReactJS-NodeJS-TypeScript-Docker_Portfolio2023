import { Sequelize } from "sequelize";

export class ConfigDatabase {
    private mode: string = process.env.NODE_ENV || 'development';
    private settings: object = {};

    constructor(){
        this.setSettings();
    }

    private setSettings(){
        switch(this.mode){
            case "test":
                this.settings = {
                    database:process.env.DB_NAME,
                    username:process.env.DB_USER,
                    password:process.env.DB_PASS,
                    port:process.env.DB_PORT,
                    dialect:"mysql",
                    host:process.env.DB_HOST,
                }
                break;
            case "development":
                this.settings = {
                    database:"dev_portfolio",
                    username:"root",
                    password:"",
                    port:"3306",
                    dialect:"mysql",
                    host:"localhost"
                }
                break;
            case "production":
                this.settings = {
                    database:process.env.DB_NAME,
                    username:process.env.DB_USER,
                    password:process.env.DB_PASS,
                    port:process.env.DB_PORT,
                    dialect:"mysql",
                    host:process.env.DB_HOST,
                }
                break;
        }
    }

    public connection():Sequelize{
        const dbCon = new Sequelize(this.settings);
        return dbCon;
    }
}