import { Project } from "../../entities/project";
import ProjectTable from "../../models/project";
import { ProjectRepository } from "../project-repository";
const projectTable = new ProjectTable();
const projectEstructure = projectTable.estructure();

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
            return await projectEstructure.findAll(title&&{where:{title}});
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
                where:{titleOld}
            });
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }
    
    async delete(title: string): Promise<boolean> {
        try{
            await projectEstructure.destroy({where:{title}})
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }

    async find({title,description}: Project): Promise<boolean> {
        if(await projectEstructure.find({where:{title,description}})) return true;
        else return false;
    }
}