import { MainSkill } from "../../entities/mainskill";
import { MainSkillRepository } from "../../repositories/mainskill-repository";

interface CreateMainSkillRequest {
    description:string;
    links:string[] | string;
    mainImage:string;
    title:string;
    timeExperience:string;
}

export class CreateMainSkill {
    constructor(
        private mainSkillRepository: MainSkillRepository
    ){}
   
    public async exec({
        description,
        links,
        mainImage,
        title,
        timeExperience
    }: CreateMainSkillRequest): Promise<boolean> {
        let response:boolean = false;
        const mainSkill = new MainSkill({
            description,
            mainImage,
            title,
            links
        },{
            timeExperience
        });
        if(! await this.mainSkillRepository.find(mainSkill))
            response = await this.mainSkillRepository.create(mainSkill);
        return response;
    }
}