import { Certification } from "../../entities/certification";
import { CertificationRepository } from "../certification-repository";
import CertificationTable from '../../models/certification';
const certificationTable = new CertificationTable();
const certEstructure = certificationTable.estructure();

export class InDatabaseCertificationRepository implements CertificationRepository {
    async create({ description, links, mainImage, pdfImage, title }: Certification): Promise<boolean> {
        try{
           await certEstructure.create({
                description,
                links,
                mainImage,
                pdfImage,
                title
            });
            return true;            
        }
        catch(err){
            if(err) console.log(err);
            return false;
        }
    }

    async index(title?: string | undefined): Promise<Certification[]> {
        try{
            return await certEstructure.findAll(title&&{where:title});
        }catch(err){
            if(err) console.log(err);
            return [];
        }
    }
    
    async update(titleOld: string, {description, links,  mainImage, pdfImage, title}: Certification): Promise<boolean> {
        try{
            await certEstructure.update({
                description,
                links,
                mainImage,
                pdfImage,
                title
            },{
                where:{titleOld}
            })
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }
    
    async delete(title: string): Promise<boolean> {
        try{
            await certEstructure.destroy({where:title});
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }
    
    async find({title,description}: Certification): Promise<boolean> {
        if(await certEstructure.find({where:{title,description}})) return true;
        else return false;
    }
}