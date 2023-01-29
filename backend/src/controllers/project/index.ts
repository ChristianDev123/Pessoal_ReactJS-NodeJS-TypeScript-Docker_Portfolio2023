import { Request, Response } from "express";
import { GetAllProjects } from "../../services/project/get-all-project";
import { CreateProject } from "../../services/project/create-project";
import { UpdateProject } from "../../services/project/update-project";
import { DeleteProject } from "../../services/project/delete-project";
import { InDatabaseProjectRepository } from "../../repositories/in-database/in-database-project-repository";
import { Project } from "../../entities/project";
const projectRepository = new InDatabaseProjectRepository();

export class ProjectController {
    static async index(req:Request,res:Response){
        let { title } = req.query;
        title = String(title);
        let response:object[] = [];
        const projectList = new GetAllProjects(projectRepository);
        response = await projectList.exec({title})
        if(response.length > 0) res.status(200).json(response);
        else res.status(404).json(response); 
    }
    
    static async create(req:Request,res:Response){
        const { description, links,  mainImage, title, pdfImages } = req.body;
        let response:boolean = false;
        const createProject = new CreateProject(projectRepository);
        response = await createProject.exec({
            description,
            links,
            mainImage,
            title,
            pdfImages
        });
        if(response) res.status(201).json({created:true});
        else res.status(501).json({created:false});
    }
    
    static async update(req:Request,res:Response){
        let {oldData, newData} = req.body;
        oldData = JSON.parse(oldData);
        newData = JSON.parse(newData);
        let response:boolean = false;
        oldData = new Project({
            description:oldData.description,
            links:oldData.links,
            mainImage:oldData.mainImage,
            title:oldData.title
        },{
            pdfImages:oldData.pdfImages
        })
        newData = new Project({
            description:newData.description,
            links:newData.links,
            mainImage:newData.mainImage,
            title:newData.title
        },{
            pdfImages:newData.pdfImages
        })
        const updateProject = new UpdateProject(projectRepository);
        response = await updateProject.exec(oldData, newData);
        if(response) res.status(200).json({changed:true});
        else res.status(304).json({changed:false});
    }

    static async delete(req:Request,res:Response){
        let { title } = req.query;
        title = String(title);
        let response:boolean = false;
        const getAllProjects = new GetAllProjects(projectRepository);
        const deleteProject = new DeleteProject(projectRepository);
        const projectToDelete = await getAllProjects.exec({title});
        response = await deleteProject.exec(projectToDelete[0]);
        if(response) res.status(204).json({excluded:true});
        else res.status(500).json({excluded:false});
    }
}