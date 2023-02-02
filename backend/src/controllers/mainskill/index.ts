import { Request, Response } from "express";
import { InDatabaseMainSkillRepository } from "../../repositories/in-database/in-database-mainskill-repository";
import { CreateMainSkill } from "../../services/mainskill/create-mainskill";
import { DeleteMainSkill } from "../../services/mainskill/delete-mainskill";
import { GetAllMainSkills } from "../../services/mainskill/get-all-mainskills";
import { UpdateMainSkill } from "../../services/mainskill/update-mainskill";
import { MainSkill } from "../../entities/mainskill";
const mainSkillRepository = new InDatabaseMainSkillRepository();

export class MainSkillController {
    static async index(req:Request,res:Response){
        let {title} = req.query;
        title = String(title);
        let response:object[] = [];
        const mainSkillList = new GetAllMainSkills(mainSkillRepository);
        response = await mainSkillList.exec({title});
        if(response.length > 0) res.status(200).json(response);
        else res.status(404).json(response); 
    }
    
    static async create(req:Request,res:Response){
        const { description, links, mainImage, title, timeExperience } = req.body;
        let response:boolean = false;
        const createMainSkill = new CreateMainSkill(mainSkillRepository);
        response = await createMainSkill.exec({
            description,
            links,
            mainImage,
            title,
            timeExperience
        })
        if(response) res.status(201).json({created:true});
        else res.status(501).json({created:false});
    }
    
    static async update(req:Request,res:Response){
        let { oldData, newData } = req.body;
        oldData = JSON.stringify(oldData);
        newData = JSON.stringify(newData);
        oldData = JSON.parse(oldData);
        newData = JSON.parse(newData);
        oldData = new MainSkill({
            description:oldData.description,
            links:oldData.links,
            mainImage:oldData.mainImage,
            title:oldData.title
        },{
            timeExperience:oldData.timeExperience
        });
        newData = new MainSkill({
            description:newData.description,
            links:newData.links,
            mainImage:newData.mainImage,
            title:newData.title
        },{
            timeExperience:newData.timeExperience
        })
        let response:boolean = false;
        const updateMainSkill = new UpdateMainSkill(mainSkillRepository);
        response = await updateMainSkill.exec(oldData, newData);
        if(response) res.status(200).json({changed:true});
        else res.status(304).json({changed:false});
    }

    static async delete(req:Request,res:Response){
        let { title } = req.query;        
        title = String(title);
        let response:boolean = false;
        const deleteMainSkill = new DeleteMainSkill(mainSkillRepository);
        const getAllMainSkill = new GetAllMainSkills(mainSkillRepository);
        const mainSkillToDelete = await getAllMainSkill.exec({title});
        response = await deleteMainSkill.exec(mainSkillToDelete[0]);
        if(response) res.status(200).json({excluded:true});
        else res.status(500).json({excluded:false});
    }
}