import { MainSkill } from "../../entities/mainskill";
import { MainSkillRepository } from "../mainskill-repository";

export class InMemoryMainSkillRepository implements MainSkillRepository {
    public mainskills: MainSkill[] = [];

    public async create(data:MainSkill): Promise<boolean>{
        let response: boolean = false;
        const lengthMainSkills = this.mainskills.length;
        this.mainskills.push(data);
        if(this.mainskills.length > lengthMainSkills) response = true;
        return response;
    }

    public async index(name?:string): Promise<MainSkill[]>{
        let response: MainSkill[];
        if(name) {
            response = this.mainskills.filter(MainSkill => MainSkill.title === name);
        }
        else {
            response = this.mainskills;
        }
        return response;
    }

    public async update(name:string, data:MainSkill): Promise<boolean>{
        let response: boolean = false;
        this.mainskills.forEach((MainSkill, index) =>{
            if(MainSkill.title === name){
                this.mainskills[index] = data;
                response = true;
            }
        });
        return response;
    }

    public async delete(name:string): Promise<boolean>{
        let response: boolean = false;
        this.mainskills.forEach((MainSkill, index) =>{
            if(MainSkill.title === name){
                this.mainskills.splice(index, 1);
                response =true;
            }
        });
        return response;
    }
    
    public async find(data:MainSkill): Promise<boolean>{
        let response: boolean = false;
        let mainskill: MainSkill | undefined = this.mainskills.find(MainSkill => MainSkill.title === data.title);
        response = mainskill === undefined ? false : true;
        return response; 
    }
}