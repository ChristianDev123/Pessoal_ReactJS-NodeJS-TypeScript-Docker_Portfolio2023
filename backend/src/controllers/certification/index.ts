import { Request, Response } from "express";
import { GetAllCertifications } from "../../services/certification/get-all-certifications";
import { CreateCertification } from "../../services/certification/create-certification";
import { UpdateCertification } from "../../services/certification/update-certification";
import { DeleteCertification } from "../../services/certification/delete-certification";
import { InDatabaseCertificationRepository } from "../../repositories/in-database/in-database-certification-repository";
const certificationRepository = new InDatabaseCertificationRepository();

export class CertificationController {
    static async index(req:Request,res:Response){
        let response:object[] = [];
        const getAllCertification = new GetAllCertifications(certificationRepository);
        return response;
    }
    
    static async create(req:Request,res:Response){
        let response:boolean = false;
        const createCertification = new CreateCertification(certificationRepository);
        return response;
    }
    
    static async update(req:Request,res:Response){
        let response:boolean = false;
        const updateCertification = new UpdateCertification(certificationRepository);
        return response;
    }

    static async delete(req:Request,res:Response){
        let response:boolean = false;
        const deleteCertification = new DeleteCertification(certificationRepository);
        return response;
    }
}