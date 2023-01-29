import { Request, Response } from "express";
import { InDatabaseMainSkillRepository } from "../../repositories/in-database/in-database-mainskill-repository";
import { CreateMainSkill } from "../../services/mainskill/create-mainskill";
import { DeleteMainSkill } from "../../services/mainskill/delete-mainskill";
import { GetAllMainSkills } from "../../services/mainskill/get-all-mainskills";
import { UpdateMainSkill } from "../../services/mainskill/update-mainskill";
const mainSkillRepository = new InDatabaseMainSkillRepository();

export class MainSkillController {
    static async index(req:Request,res:Response){
        let response:object[] = [];
        const mainSkillList = new GetAllMainSkills(mainSkillRepository);
        return response;
    }
    
    static async create(req:Request,res:Response){
        let response:boolean = false;
        const createMainSkill = new CreateMainSkill(mainSkillRepository);
        return response;
    }
    
    static async update(req:Request,res:Response){
        let response:boolean = false;
        const updateMainSkill = new UpdateMainSkill(mainSkillRepository);
        return response;
    }

    static async delete(req:Request,res:Response){
        let response:boolean = false;
        const deleteMainSkill = new DeleteMainSkill(mainSkillRepository);
        return response;
    }
}