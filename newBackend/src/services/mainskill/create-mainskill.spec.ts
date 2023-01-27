import { describe, expect, it } from "vitest";
import { InMemoryMainSkillRepository } from "../../repositories/in-memory/in-memory-mainskill-repository";
import { CreateMainSkill } from "./create-mainskill";

describe('create new mainskill',()=>{
    it('should return an boolean',async()=>{
        const mainSkillsRepository = new InMemoryMainSkillRepository();
        const createMainSkill = new CreateMainSkill(mainSkillsRepository);
        const mainskill = await createMainSkill.exec({
            description:'',
            links:'',
            mainImage:'',
            title:'',
            timeExperience:''
        });
        
        expect(mainskill).toEqual(true);
    })

    it('should increase an element in mainskill array',async()=>{
        const mainSkillsRepository = new InMemoryMainSkillRepository();
        const createMainSkill = new CreateMainSkill(mainSkillsRepository);
        await createMainSkill.exec({
            description:'',
            links:'',
            mainImage:'',
            title:'',
            timeExperience:''
        });
        expect(mainSkillsRepository.mainskills.length).toEqual(1);
    })

    it('not should increase an element in mainskill array if are similar',async()=>{
        const mainSkillsRepository = new InMemoryMainSkillRepository();
        const createMainSkill = new CreateMainSkill(mainSkillsRepository);
        await createMainSkill.exec({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste',
            timeExperience:'teste'
        });
        await createMainSkill.exec({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste',
            timeExperience:'teste'
        });
        expect(mainSkillsRepository.mainskills.length).toEqual(1);
    })
})