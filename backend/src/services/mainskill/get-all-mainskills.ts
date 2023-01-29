import { MainSkill } from "../../entities/mainskill";
import { MainSkillRepository } from "../../repositories/mainskill-repository";

interface MainSkillRepositoryRequest {
    title: string|undefined;
}

type MainSkillRepositoryResponse = MainSkill[];

export class GetAllMainSkills {
    constructor(
        private mainSkillRepository: MainSkillRepository
    ){}

    public async exec({title}:MainSkillRepositoryRequest): Promise<MainSkillRepositoryResponse> {
        let response: MainSkillRepositoryResponse; 
        response = await this.mainSkillRepository.index(title);
        return response;
    }
}