import { describe, expect, it } from "vitest";
import { InMemoryMainSkillRepository } from "../../repositories/in-memory/in-memory-mainskill-repository";
import { CreateMainSkill } from "./create-mainskill";
import { DeleteMainSkill } from "./delete-mainskill";
import { MainSkill } from "../../entities/mainskill";

describe("delete an MainSkill", ()=>{
    it("should delete an MainSkill", async()=>{
        const mainSkillRepository = new InMemoryMainSkillRepository();
        const createMainSkill = new CreateMainSkill(mainSkillRepository);
        const deleteMainSkill = new DeleteMainSkill(mainSkillRepository);
        const mainskillToDelete = new MainSkill({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            title:'teste1'
        },{
            timeExperience:'teste1',
        });
        
        await createMainSkill.exec({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            timeExperience:'teste1',
            title:'teste1'
        });

        const response:boolean = await deleteMainSkill.exec(mainskillToDelete);
        
        expect(response).toBeTruthy();
        expect(mainSkillRepository.mainskills.length).toEqual(0);
    });

    it("should delete nothing",async()=>{
        const mainSkillRepository = new InMemoryMainSkillRepository();
        const deleteMainSkill = new DeleteMainSkill(mainSkillRepository);
        const mainSkillToDelete = new MainSkill({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            title:'teste1'
        },{
            timeExperience:'teste1',
        });

        const response:boolean = await deleteMainSkill.exec(mainSkillToDelete);
        expect(response).toBeFalsy();
    })

    it("should delete nothing",async()=>{
        const mainSkillRepository = new InMemoryMainSkillRepository();
        const createMainSkill = new CreateMainSkill(mainSkillRepository);
        const deleteMainSkill = new DeleteMainSkill(mainSkillRepository);
        const mainSkillToDelete = new MainSkill({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            title:'teste1'
        },{
            timeExperience:'teste1',
        });

        await createMainSkill.exec({
            description:'teste0',
            links:'teste0',
            mainImage:'teste0.png',
            timeExperience:'teste0',
            title:'teste1'
        });

        const response:boolean = await deleteMainSkill.exec(mainSkillToDelete);
        expect(response).toBeFalsy();
    })
})