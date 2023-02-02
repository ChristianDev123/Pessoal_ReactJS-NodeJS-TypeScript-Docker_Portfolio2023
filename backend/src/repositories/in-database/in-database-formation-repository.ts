import { Formation } from "../../entities/formation";
import formEstructure from "../../models/formation";
import { FormationRepository } from "../formation-repository";

export class InDatabaseFormationRepository implements FormationRepository{
    async create({ description, links, mainImage, pdfImages, title }: Formation): Promise<boolean> {
        try{
            await formEstructure.create({
                description,
                links,
                mainImage,
                pdfImages,
                title
            })
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }

    async index(title?: string | undefined): Promise<Formation[]> {
        try{
            let response:Formation[]; 
            const filter = title !== "undefined" ? {where:{title}}: {};
            let arr = await formEstructure.findAll(filter);
            response = arr.map((data)=>new Formation({
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
    
    async update(titleOld: string, { description, links, mainImage, pdfImages, title}: Formation): Promise<boolean> {
        try{
            await formEstructure.update({
                description,
                links,
                mainImage,
                pdfImages,
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
            await formEstructure.destroy({where:{title}});
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }
    
    async find({title, description}: Formation): Promise<boolean> {
        if(await formEstructure.findOne({where:{title,description}})) return true;
        else return false;
    }

}