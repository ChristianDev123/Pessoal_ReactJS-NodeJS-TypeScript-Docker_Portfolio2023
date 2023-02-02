import { Project } from "../../entities/project";
import { ProjectRepository } from "../../repositories/project-repository";
import ExistenceVerification from "../utils/existence-verification";


export class DeleteProject {
    constructor(
        private projectRepository: ProjectRepository
    ){}

    public async exec(data:Project):Promise<boolean>{
        let response:boolean = false;
        if(ExistenceVerification(data, await this.projectRepository.index('undefined'))){
            response = await this.projectRepository.delete(data.title);
        }
        return response;
    }
}