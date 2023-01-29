import { Project } from "../../entities/project";
import { ProjectRepository } from "../project-repository";

export class InMemoryProjectRepository implements ProjectRepository {
    public projects: Project[] = [];

    public async create(data:Project): Promise<boolean>{
        let response: boolean = false;
        const lengthProjects = this.projects.length;
        this.projects.push(data);
        if(this.projects.length > lengthProjects) response = true;
        return response;
    }

    public async index(name?:string): Promise<Project[]>{
        let response: Project[];
        if(name) {
            response = this.projects.filter(project => project.title === name);
        }
        else {
            response = this.projects;
        }
        return response;
    }

    public async update(name:string, data:Project): Promise<boolean>{
        let response: boolean = false;
        this.projects.forEach((project, index) =>{
            if(project.title === name){
                this.projects[index] = data;
                response = true;
            }
        });
        return response;
    }

    public async delete(name:string): Promise<boolean>{
        let response: boolean = false;
        this.projects.forEach((project, index) =>{
            if(project.title === name){
                this.projects.splice(index, 1);
                response =true;
            }
        });
        return response;
    }
    
    public async find(data:Project): Promise<boolean>{
        let response: boolean = false;
        let project: Project | undefined = this.projects.find(project => project.title === data.title);
        response = project === undefined ? false : true;
        return response; 
    }
}