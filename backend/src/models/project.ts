import { DataTypes } from "sequelize";
import { ConfigDatabase } from "../config";
import IModels from "./interface";
const DBConfig = new ConfigDatabase();
let dbCon = DBConfig.connection();

export default class ProjectTable implements IModels {
    public estructure():any{
        return dbCon.define("mainskill",{
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
            pdfImages:{
                type: DataTypes.STRING,
                allowNull: false,
            }
        });
    }
    
    public async create():Promise<boolean>{
        let response:boolean = false;
        try{
            await this.estructure().sync({force:false});
            response = true;
        }catch(err){
            if(err) throw err;
            return response
        }
        return response;
    }
}