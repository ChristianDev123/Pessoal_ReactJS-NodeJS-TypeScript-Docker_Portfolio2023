import { Certification } from "../../entities/certification";
import { CertificationRepository } from "../certification-repository";
import certEstructure  from '../../models/certification';

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
            let response:Certification[]; 
            const filter = title !== 'undefined' ? {where:{title}}: {};
            let arr = await certEstructure.findAll(filter);
            response = arr.map((data)=>new Certification({
                description:String(data.get("description")),
                links:String(data.get("links")),
                mainImage:String(data.get("mainImage")),
                title:String(data.get("title"))
            },{
                pdfImages:String(data.get("pdfImages"))
            }))
            return response;
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
                where:{title:titleOld}
            })
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }
    
    async delete(title: string): Promise<boolean> {
        try{
            await certEstructure.destroy({where:{title}});
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }
    
    async find({title,description}: Certification): Promise<boolean> {
        if(await certEstructure.findOne({where:{title,description}})) return true;
        else return false;
    }
}