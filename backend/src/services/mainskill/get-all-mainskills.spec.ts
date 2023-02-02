import { describe, expect, test } from "vitest";
import { InMemoryMainSkillRepository } from "../../repositories/in-memory/in-memory-mainskill-repository";
import { CreateMainSkill } from "./create-mainskill";
import { GetAllMainSkills } from "./get-all-mainskills";

describe('getting mainskills', () => {
    test('should return a list of mainskills', async ()=> {
        const mainSkillRepository = new InMemoryMainSkillRepository();
        const createMainSkill = new CreateMainSkill(mainSkillRepository);
        await createMainSkill.exec({
            description:'teste',
            links:'teste',
            mainImage:"teste",
            timeExperience:'teste',
            title:'teste',
        });
        await createMainSkill.exec({
            description:'teste1',
            links:'teste1',
            mainImage:"teste1",
            timeExperience:'teste1',
            title:'teste1',
        });
        const mainskills = new GetAllMainSkills(mainSkillRepository);
        const mainskillArray = await mainskills.exec({title:undefined});
        expect(mainskillArray).toBeTypeOf('object');
        expect(mainskillArray.length).toBe(2);
    })

    test('should return a list with an mainskill',async()=>{
        const mainSkillRepository = new InMemoryMainSkillRepository();
        const createMainSkill = new CreateMainSkill(mainSkillRepository);
        await createMainSkill.exec({
            description:'teste',
            links:'teste',
            mainImage:"teste",
            timeExperience:'teste',
            title:'teste',
        });
        const mainskills = new GetAllMainSkills(mainSkillRepository);
        const mainskillArray = await mainskills.exec({title:'teste'});
        expect(mainskillArray.length).toEqual(1);
    })
});