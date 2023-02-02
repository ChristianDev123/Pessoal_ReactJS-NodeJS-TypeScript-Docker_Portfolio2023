import { MainSkill } from "../../entities/mainskill";
import mainSkillEstructure  from "../../models/mainskill";
import { MainSkillRepository } from "../mainskill-repository";

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
            let response:MainSkill[]; 
            const filter = title !== 'undefined' ? {where:{title}}: {};
            let arr = await mainSkillEstructure.findAll(filter);
            response = arr.map((data)=>new MainSkill({
                description:String(data.get("description")),
                links:String(data.get("links")),
                mainImage:String(data.get("mainImage")),
                title:String(data.get("title"))
            },{
                timeExperience:String(data.get("timeExperience"))
            }))
            return response;
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
                where:{title:titleOld},
                limit:1
            });
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }
    
    async delete(title: string): Promise<boolean> {
        try{
            await mainSkillEstructure.destroy({where:{title},limit:1});
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }
    
    async find({title,description}: MainSkill): Promise<boolean> {
        if(await mainSkillEstructure.findOne({where:{title,description}})) return true;
        else return false;
    }

}