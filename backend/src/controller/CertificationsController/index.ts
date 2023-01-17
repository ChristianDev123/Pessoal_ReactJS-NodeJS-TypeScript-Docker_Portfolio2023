import { Request, Response } from "express";
import certifications from "../../models/certifications";
import { Certifications } from "../Class/Certifications";
const CertificationsModel = certifications();

export class CertificationsController {

    public static async index(req:Request, res:Response){
        const id:any = req.query.id;
        let response:any;
        try{
            if (id) response = await CertificationsModel.findByPk(id);
            else response = await CertificationsModel.findAll();
            res.status(200).json(response);
        }
        catch(err){
            if(err) console.log(err);
            res.status(500).json({msg:"Can't push all skills"});
        }
    }

    public static async create(req:Request, res:Response){
        const {mainImage, title, description, links, pdfImages} = req.body;
        const certifications = new Certifications(mainImage, title, description, links, pdfImages);
        const status:number = certifications.save(CertificationsModel);
        const msg:string = status === 200 ? '[Success] New skill created successfully' : "[ERROR] Can't create new skill";
        res.status(status).json({msg});
    }

    public static async update(req:Request, res:Response){
        const {id, mainImage, title, description, links, pdfImages} = req.body;
        try{
            await CertificationsModel.update({
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
            await CertificationsModel.destroy({where:{id}});
            res.status(200).json({msg:"[Success] Skill deleted successfully"});
        }
        catch(err){
            res.status(500).json({msg:"[ERROR] Can't delete this skill"});
        }
    }

}