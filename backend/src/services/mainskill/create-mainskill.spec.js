"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_mainskill_repository_1 = require("../../repositories/in-memory/in-memory-mainskill-repository");
const create_mainskill_1 = require("./create-mainskill");
(0, vitest_1.describe)('create new mainskill', () => {
    (0, vitest_1.it)('should return an boolean', async () => {
        const mainSkillsRepository = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
        const createMainSkill = new create_mainskill_1.CreateMainSkill(mainSkillsRepository);
        const mainskill = await createMainSkill.exec({
            description: '',
            links: '',
            mainImage: '',
            title: '',
            timeExperience: ''
        });
        (0, vitest_1.expect)(mainskill).toEqual(true);
    });
    (0, vitest_1.it)('should increase an element in mainskill array', async () => {
        const mainSkillsRepository = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
        const createMainSkill = new create_mainskill_1.CreateMainSkill(mainSkillsRepository);
        await createMainSkill.exec({
            description: '',
            links: '',
            mainImage: '',
            title: '',
            timeExperience: ''
        });
        (0, vitest_1.expect)(mainSkillsRepository.mainskills.length).toEqual(1);
    });
    (0, vitest_1.it)('not should increase an element in mainskill array if are similar', async () => {
        const mainSkillsRepository = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
        const createMainSkill = new create_mainskill_1.CreateMainSkill(mainSkillsRepository);
        await createMainSkill.exec({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste',
            timeExperience: 'teste'
        });
        await createMainSkill.exec({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste',
            timeExperience: 'teste'
        });
        (0, vitest_1.expect)(mainSkillsRepository.mainskills.length).toEqual(1);
    });
});
