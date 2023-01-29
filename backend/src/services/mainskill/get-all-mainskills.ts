import { MainSkill } from "../../entities/mainskill";
import { MainSkillRepository } from "../../repositories/mainskill-repository";

interface MainSkillRepositoryRequest {
    name: string|undefined;
}

type MainSkillRepositoryResponse = MainSkill[];

export class GetAllMainSkills {
    constructor(
        private mainSkillRepository: MainSkillRepository
    ){}

    public async exec({name}:MainSkillRepositoryRequest): Promise<MainSkillRepositoryResponse> {
        let response: MainSkillRepositoryResponse; 
        response = await this.mainSkillRepository.index(name);
        return response;
    }
}