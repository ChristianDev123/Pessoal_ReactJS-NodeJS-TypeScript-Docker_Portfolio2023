"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_mainskill_repository_1 = require("../../repositories/in-memory/in-memory-mainskill-repository");
const create_mainskill_1 = require("./create-mainskill");
const get_all_mainskills_1 = require("./get-all-mainskills");
(0, vitest_1.describe)('getting mainskills', () => {
    (0, vitest_1.test)('should return a list of mainskills', async () => {
        const mainSkillRepository = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
        const createMainSkill = new create_mainskill_1.CreateMainSkill(mainSkillRepository);
        await createMainSkill.exec({
            description: 'teste',
            links: 'teste',
            mainImage: "teste",
            timeExperience: 'teste',
            title: 'teste',
        });
        await createMainSkill.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: "teste1",
            timeExperience: 'teste1',
            title: 'teste1',
        });
        const mainskills = new get_all_mainskills_1.GetAllMainSkills(mainSkillRepository);
        const mainskillArray = await mainskills.exec({ title: undefined });
        (0, vitest_1.expect)(mainskillArray).toBeTypeOf('object');
        (0, vitest_1.expect)(mainskillArray.length).toBe(2);
    });
    (0, vitest_1.test)('should return a list with an mainskill', async () => {
        const mainSkillRepository = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
        const createMainSkill = new create_mainskill_1.CreateMainSkill(mainSkillRepository);
        await createMainSkill.exec({
            description: 'teste',
            links: 'teste',
            mainImage: "teste",
            timeExperience: 'teste',
            title: 'teste',
        });
        const mainskills = new get_all_mainskills_1.GetAllMainSkills(mainSkillRepository);
        const mainskillArray = await mainskills.exec({ title: 'teste' });
        (0, vitest_1.expect)(mainskillArray.length).toEqual(1);
    });
});
