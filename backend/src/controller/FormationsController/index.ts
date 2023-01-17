import { Request, Response } from "express";
import formations from "../../models/formations";
import { Formations } from "../Class/Formations";
const FormationsModel = formations();

export class FormationsController {

    public static async index(req:Request, res:Response){
        const id:any = req.query.id;
        let response:any;
        try{
            if (id) response = await FormationsModel.findByPk(id);
            else response = await FormationsModel.findAll();
            res.status(200).json(response);
        }
        catch(err){
            if(err) console.log(err);
            res.status(500).json({msg:"Can't push all skills"});
        }
    }

    public static async create(req:Request, res:Response){
        const {mainImage, title, description, links, pdfImages} = req.body;
        const formations = new Formations(mainImage, title, description, links, pdfImages);
        const status:number = formations.save(FormationsModel);
        const msg:string = status === 200 ? '[Success] New skill created successfully' : "[ERROR] Can't create new skill";
        res.status(status).json({msg});
    }

    public static async update(req:Request, res:Response){
        const {id, mainImage, title, description, links, pdfImages} = req.body;
        try{
            await FormationsModel.update({
                id,
                mainImage,
                title,
                description,
                links,
                pdfImages
            },
            {where:{id}});
            res.status(200).json({msg:"[Success] skill changed successfully"});
        }
        catch(err){
            if(err) console.log(err);
            res.status(500).json({msg:"[ERROR] Can't update this record."});
        }
    }

    public static async delete(req:Request, res:Response){
        const { id } = req.params;
        try{
            await FormationsModel.destroy({where:{id}});
            res.status(200).json({msg:"[Success] Skill deleted successfully"});
        }
        catch(err){
            res.status(500).json({msg:"[ERROR] Can't delete this skill"});
        }
    }

}