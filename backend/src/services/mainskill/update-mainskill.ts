import { MainSkill } from "../../entities/mainskill";
import { MainSkillRepository } from "../../repositories/mainskill-repository";
import ExistenceVerification from "../utils/existence-verification";

export class UpdateMainSkill {
    constructor(
        private mainSkillRepository: MainSkillRepository
    ){}

    public async exec(oldData:MainSkill, newData: MainSkill):Promise<boolean>{
        let response: boolean = false;
        if(ExistenceVerification(oldData, await this.mainSkillRepository.index('undefined'))){
            response = await this.mainSkillRepository.update(oldData.title, newData);
        }
        return response;
    }
};