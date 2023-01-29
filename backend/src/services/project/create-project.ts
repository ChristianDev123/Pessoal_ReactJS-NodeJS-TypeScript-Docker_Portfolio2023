import { Project } from "../../entities/project";
import { ProjectRepository } from "../../repositories/project-repository";

interface CreateProjectRequest {
    description:string;
    links:string[] | string;
    mainImage:string;
    title:string;
    pdfImages:string;
}

export class CreateProject {
    constructor(
        private projectRepository: ProjectRepository
    ){}
   
    public async exec({
        description,
        links,
        mainImage,
        title,
        pdfImages
    }: CreateProjectRequest): Promise<boolean> {
        let response:boolean = false;
        const project = new Project({
            description,
            mainImage,
            title,
            links
        },{
            pdfImages
        });
        if(! await this.projectRepository.find(project))
            response = await this.projectRepository.create(project);
        return response;
    }
}