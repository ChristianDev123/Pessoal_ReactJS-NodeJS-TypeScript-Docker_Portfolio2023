import { Project } from "../../entities/project";
import { ProjectRepository } from "../../repositories/project-repository";

interface ProjectRepositoryRequest {
    name: string|undefined;
}

type ProjectRepositoryResponse = Project[];

export class GetAllProjects {
    constructor(
        private projectRepository: ProjectRepository
    ){}

    public async exec({name}:ProjectRepositoryRequest): Promise<ProjectRepositoryResponse> {
        let response: ProjectRepositoryResponse; 
        response = await this.projectRepository.index(name);
        return response;
    }
}