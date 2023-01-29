import { describe, expect, it } from "vitest";
import { InMemoryMainSkillRepository } from "../../repositories/in-memory/in-memory-mainskill-repository";
import { CreateMainSkill } from "./create-mainskill";
import { UpdateMainSkill } from "./update-mainskill";
import { MainSkill } from "../../entities/mainskill";

describe("update an existent mainskill", ()=>{
    it("should change data in mainskill array", async()=>{
        const mainSkillRepository = new InMemoryMainSkillRepository();
        const createMainSkill = new CreateMainSkill(mainSkillRepository);
        const updateMainSkill = new UpdateMainSkill(mainSkillRepository);
        const oldMainSkill = new MainSkill({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste'
        },{
            timeExperience:'teste',
        });
        const newMainSkill = new MainSkill({
            description:"teste1",
            links:"teste1",
            mainImage:"teste1",
            title:"teste1"
        },{
            timeExperience:"teste1"
        });

        await createMainSkill.exec({
            description:'teste0',
            links:'teste0',
            mainImage:'teste0',
            timeExperience:'teste0',
            title:'teste0'
        });

        await createMainSkill.exec({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            timeExperience:'teste',
            title:'teste'
        });

        await createMainSkill.exec({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1',
            timeExperience:'teste1',
            title:'teste1'
        });

        await updateMainSkill.exec(oldMainSkill,newMainSkill);
    
        expect(mainSkillRepository.mainskills[1].title).toEqual('teste1');
    });

    it("should change nothing, create nothing",async()=>{
        const mainSkillRepository = new InMemoryMainSkillRepository();
        const updateMainSkill = new UpdateMainSkill(mainSkillRepository);
        const oldMainSkill = new MainSkill({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste'
        },{
            timeExperience:'teste',
        });
        const newMainSkill = new MainSkill({
            description:"teste1",
            links:"teste1",
            mainImage:"teste1",
            title:"teste1"
        },{
            timeExperience:"teste1"
        });

        const response = await updateMainSkill.exec(oldMainSkill,newMainSkill);

        expect(response).toBeFalsy();
    });

    it("should change nothing, passing not create mainskill",async()=>{
        const mainSkillRepository = new InMemoryMainSkillRepository();
        const createMainSkill = new CreateMainSkill(mainSkillRepository);
        const updateMainSkill = new UpdateMainSkill(mainSkillRepository);
        const oldMainSkill = new MainSkill({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste'
        },{
            timeExperience:'teste',
        });
        const newMainSkill = new MainSkill({
            description:"teste1",
            links:"teste1",
            mainImage:"teste1",
            title:"teste1"
        },{
            timeExperience:"teste1"
        });

        await createMainSkill.exec({
            description:'teste0',
            links:'teste0',
            mainImage:'teste0',
            timeExperience:'teste0',
            title:'teste0'
        });

        await createMainSkill.exec({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1',
            timeExperience:'teste1',
            title:'teste1'
        });

        const response = await updateMainSkill.exec(oldMainSkill,newMainSkill);

        expect(response).toBeFalsy();
    });
});