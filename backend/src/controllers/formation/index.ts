import { Request, Response } from "express";
import { Formation } from "../../entities/formation";
import { InDatabaseFormationRepository } from "../../repositories/in-database/in-database-formation-repository";
import { CreateFormation } from "../../services/formation/create-formation";
import { DeleteFormation } from "../../services/formation/delete-formation";
import { GetAllFormations } from "../../services/formation/get-all-formations";
import { UpdateFormation } from "../../services/formation/update-formations";
const formationRepository = new InDatabaseFormationRepository();

export class FormationController {
    static async index(req:Request,res:Response){
        let {title} = req.query;
        title = String(title);
        let response:object[] = [];
        const formationList = new GetAllFormations(formationRepository);
        response = await formationList.exec({title});
        if(response.length > 0) res.status(200).json(response);
        else res.status(404).json(response);   
    }
    
    static async create(req:Request,res:Response){
        const {description,links,mainImage,title,pdfImages} = req.body;
        let response:boolean = false;
        const createFormation = new CreateFormation(formationRepository);
        response = await createFormation.exec({
            description,
            links,
            mainImage,
            title,
            pdfImages
        });
        if(response) res.status(201).json({created:true});
        else res.status(501).json({created:false});
    }
    
    static async update(req:Request,res:Response){
        let { oldData, newData } = req.body;
        oldData = JSON.parse(oldData);
        newData = JSON.parse(newData);
        let response:boolean = false;
        const updateFormation = new UpdateFormation(formationRepository);
        const OldData = new Formation({
            description:oldData.description,
            links:oldData.links,
            mainImage:oldData.mainImage,
            title:oldData.title,
        },{
            pdfImages:oldData.pdfImages
        });
        const NewData = new Formation({
            description:newData.description,
            links:newData.links,
            mainImage:newData.mainImage,
            title:newData.title,
        },{
            pdfImages:newData.pdfImages
        });
        response = await updateFormation.exec(OldData,NewData);
        if(response) res.status(200).json({changed:true});
        else res.status(304).json({changed:false});
    }

    static async delete(req:Request,res:Response){
        let { title } = req.query;
        title = String(title);
        let response:boolean = false;
        const getFormation = new GetAllFormations(formationRepository);
        const deleteFormation = new DeleteFormation(formationRepository);
        const formationToDelete = await getFormation.exec({title});
        response = await deleteFormation.exec(formationToDelete[0]);
        if(response) res.status(204).json({excluded:true});
        else res.status(500).json({excluded:false});
    }
}