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
        let {title} = req.query;
        title = String(title);
        let response;
        const getAllCertification = new GetAllCertifications(certificationRepository);
        response = await getAllCertification.exec({title});
        if(response.length > 0) res.status(200).json(response);
        else res.status(404).json(response);
    }
    
    static async create(req:Request,res:Response){
        console.log(req.file);
        console.log(req.files);
        /*
        let { description, links, mainImage, pdfImages, title } = req.body;
        let response:boolean = false;
        const createCertification = new CreateCertification(certificationRepository);
        response = await createCertification.exec({ description, links, mainImage, pdfImages, title });
        if(response) res.status(201).json({created:true});
        else res.status(501).json({created:false});*/
    }
    
    static async update(req:Request,res:Response){
        let response:boolean = false;
        let {oldData, newData} = req.body;
        oldData = JSON.stringify(oldData);
        newData = JSON.stringify(newData); 
        oldData = JSON.parse(oldData);
        newData = JSON.parse(newData);
        const updateCertification = new UpdateCertification(certificationRepository);
        oldData = new Certification({
            description:oldData.description,
            links:oldData.links,
            mainImage:oldData.mainImage,
            title:oldData.title
        },{
            pdfImages:oldData.pdfImage
        });
        newData = new Certification({
            description:newData.description,
            links:newData.links,
            mainImage:req.file?.path || '',
            title:newData.title
        },{
            pdfImages:newData.pdfImages
        });
        response = await updateCertification.exec(oldData, newData);
        if(response) res.status(200).json({changed:true});
        else res.status(304).json({changed:false});
    }

    static async delete(req:Request,res:Response){
        let {title} = req.query
        title = String(title);
        let response:boolean = false;
        const deleteCertification = new DeleteCertification(certificationRepository);
        const getAllCertification = new GetAllCertifications(certificationRepository);  
        const certificationToDelete = await getAllCertification.exec({title});
        response = await deleteCertification.exec(certificationToDelete[0]);
        if(response) res.status(204).json({excluded:true});
        else res.status(500).json({excluded:false});
    }
}