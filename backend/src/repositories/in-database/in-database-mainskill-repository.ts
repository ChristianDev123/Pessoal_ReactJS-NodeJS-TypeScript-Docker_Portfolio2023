import { MainSkill } from "../../entities/mainskill";
import MainSkillTable from "../../models/mainskill";
import { MainSkillRepository } from "../mainskill-repository";
const mainSkillTable = new MainSkillTable();
const mainSkillEstructure = mainSkillTable.estructure();

export class InDatabaseMainSkillRepository implements MainSkillRepository {
    async create({description,links,mainImage,timeExperience,title}: MainSkill): Promise<boolean> {
        try{
            await mainSkillEstructure.create({
                description,
                links,
                mainImage,
                timeExperience,
                title
            });
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }
    
    async index(title?: string | undefined): Promise<MainSkill[]> {
        try{
            return await mainSkillEstructure.findAll({where:{title}})
        }catch(err){
            if(err) console.log(err);
            return [];
        }
    }
    
    async update(titleOld: string, {description,links,mainImage,timeExperience,title}: MainSkill): Promise<boolean> {
        try{
            await mainSkillEstructure.update({
                description,
                links,
                mainImage,
                timeExperience,
                title
            },{
                where:{titleOld}
            });

            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }
    
    async delete(title: string): Promise<boolean> {
        try{
            await mainSkillEstructure.destroy({where:{title}});
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }
    
    async find({title,description}: MainSkill): Promise<boolean> {
        if(await mainSkillEstructure.find({where:{title,description}})) return true;
        else return false;
    }

}