import { Project } from "../../entities/project";
import projectEstructure from "../../models/project";
import { ProjectRepository } from "../project-repository";

export class InDatabaseProjectRepository implements ProjectRepository {
    async create({description,links,mainImage,pdfImages,title}: Project): Promise<boolean> {
        try{  
            await projectEstructure.create({
                description,
                links,
                mainImage,
                pdfImages,
                title
            });
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }
    
    async index(title?: string | undefined): Promise<Project[]> {
        try{
            let response:Project[]; 
            const filter = title !== 'undefined' ? {where:{title}}: {};
            let arr = await projectEstructure.findAll(filter);
            response = arr.map((data)=>new Project({
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
    
    async update(titleOld: string, {description,links,mainImage,pdfImages,title}: Project): Promise<boolean> {
        try{
            await projectEstructure.update({
                description,
                links,
                mainImage,
                pdfImages,
                title
            },{
                where:{title:titleOld},
                limit:1
            });
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }
    
    async delete(title: string): Promise<boolean> {
        try{
            await projectEstructure.destroy({where:{title},limit:1})
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }

    async find({title,description}: Project): Promise<boolean> {
        if(await projectEstructure.findOne({where:{title,description}})) return true;
        else return false;
    }
}