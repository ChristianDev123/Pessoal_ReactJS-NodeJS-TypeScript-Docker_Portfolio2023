import { Project } from "../../entities/project";
import { ProjectRepository } from "../../repositories/project-repository";
import ExistenceVerification from "../utils/existence-verification";

export class UpdateProject {
    constructor(
        private projectRepository: ProjectRepository
    ){}

    public async exec(oldData:Project, newData: Project):Promise<boolean>{
        let response: boolean = false;
        if(ExistenceVerification(oldData, await this.projectRepository.index('undefined'))){
            response = await this.projectRepository.update(oldData.title, newData);
        }
        return response;
    }
};