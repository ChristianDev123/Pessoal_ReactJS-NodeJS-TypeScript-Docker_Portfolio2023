import { MainSkill } from "../entities/mainskill";

export interface MainSkillRepository {
    create(data:MainSkill): Promise<boolean>;
    index(title?:string): Promise<MainSkill[]>;
    update(title:string, data:MainSkill): Promise<boolean>;
    delete(title:string): Promise<boolean>;
    find(data:MainSkill): Promise<boolean>;
}