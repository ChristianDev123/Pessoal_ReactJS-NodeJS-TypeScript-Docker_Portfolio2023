import { Project } from "../../entities/project";
import { ProjectRepository } from "../../repositories/project-repository";

interface ProjectRepositoryRequest {
    title: string|undefined;
}

type ProjectRepositoryResponse = Project[];

export class GetAllProjects {
    constructor(
        private projectRepository: ProjectRepository
    ){}

    public async exec({title}:ProjectRepositoryRequest): Promise<ProjectRepositoryResponse> {
        let response: ProjectRepositoryResponse; 
        response = await this.projectRepository.index(title);
        return response;
    }
}