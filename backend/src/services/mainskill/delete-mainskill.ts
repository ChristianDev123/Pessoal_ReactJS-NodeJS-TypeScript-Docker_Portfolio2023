import { MainSkill } from "../../entities/mainskill";
import { MainSkillRepository } from "../../repositories/mainskill-repository";
import ExistenceVerification from "../utils/existence-verification";


export class DeleteMainSkill {
    constructor(
        private mainSkillRepository: MainSkillRepository
    ){}

    public async exec(data:MainSkill):Promise<boolean>{
        let response:boolean = false;
        if(ExistenceVerification(data, await this.mainSkillRepository.index('undefined'))){
            response = await this.mainSkillRepository.delete(data.title);
        }
        return response;
    }
}