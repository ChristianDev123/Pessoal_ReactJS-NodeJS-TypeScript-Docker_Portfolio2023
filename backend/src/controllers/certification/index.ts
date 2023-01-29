import { Request, Response } from "express";
import { GetAllCertifications } from "../../services/certification/get-all-certifications";
import { CreateCertification } from "../../services/certification/create-certification";
import { UpdateCertification } from "../../services/certification/update-certification";
import { DeleteCertification } from "../../services/certification/delete-certification";
import { InDatabaseCertificationRepository } from "../../repositories/in-database/in-database-certification-repository";
import { Certification } from "../../entities/certification";
const certificationRepository = new InDatabaseCertificationRepository();

export class CertificationController {
    static async index(req:Request,res:Response){
        let {name} = req.query;
        name = String(name);
        let response;
        const getAllCertification = new GetAllCertifications(certificationRepository);
        response = await getAllCertification.exec({name});
        if(response.length > 0) res.status(200).json(response);
        else res.status(404).json(response);
    }
    
    static async create(req:Request,res:Response){
        const { description, links, mainImage, pdfImages, title } = req.body;
        let response:boolean = false;
        const createCertification = new CreateCertification(certificationRepository);
        response = await createCertification.exec({ description, links, mainImage, pdfImages, title });
        if(response) res.status(201).json({created:true});
        else res.status(501).json({created:false});
    }
    
    static async update(req:Request,res:Response){
        let response:boolean = false;
        const {oldData, newData} = req.body; 
        const updateCertification = new UpdateCertification(certificationRepository);
        const OldData = new Certification({
            description:oldData.description,
            links:oldData.links,
            mainImage:oldData.mainImage,
            title:oldData.title
        },{
            pdfImages:oldData.pdfImage
        });
        const NewData = new Certification({
            description:newData.description,
            links:newData.links,
            mainImage:newData.mainImage,
            title:newData.title
        },{
            pdfImages:newData.pdfImages
        });
        response = await updateCertification.exec(OldData, NewData);
        return response;
    }

    static async delete(req:Request,res:Response){
        let {title} = req.query
        title = String(title);
        let response:boolean = false;
        const deleteCertification = new DeleteCertification(certificationRepository);
        const getAllCertification = new GetAllCertifications(certificationRepository);  
        const certificationToDelete = await getAllCertification.exec({name:title});
        response = await deleteCertification.exec(certificationToDelete[0]);
        return response;
    }
}