import { Request, Response } from "express";
import { GetAllProjects } from "../../services/project/get-all-project";
import { CreateProject } from "../../services/project/create-project";
import { UpdateProject } from "../../services/project/update-project";
import { DeleteProject } from "../../services/project/delete-project";
import { InDatabaseProjectRepository } from "../../repositories/in-database/in-database-project-repository";
const projectRepository = new InDatabaseProjectRepository();

export class ProjectController {
    static async index(req:Request,res:Response){
        let response:object[] = [];
        const projectList = new GetAllProjects(projectRepository);
        return response;
    }
    
    static async create(req:Request,res:Response){
        let response:boolean = false;
        const createProject = new CreateProject(projectRepository);
        return response;
    }
    
    static async update(req:Request,res:Response){
        let response:boolean = false;
        const updateProject = new UpdateProject(projectRepository);
        return response;
    }

    static async delete(req:Request,res:Response){
        let response:boolean = false;
        const deleteProject = new DeleteProject(projectRepository);
        return response;
    }
}