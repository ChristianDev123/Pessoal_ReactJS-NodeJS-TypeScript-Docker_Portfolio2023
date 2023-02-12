"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_mainskill_repository_1 = require("../../repositories/in-memory/in-memory-mainskill-repository");
const create_mainskill_1 = require("./create-mainskill");
const delete_mainskill_1 = require("./delete-mainskill");
const mainskill_1 = require("../../entities/mainskill");
(0, vitest_1.describe)("delete an MainSkill", () => {
    (0, vitest_1.it)("should delete an MainSkill", async () => {
        const mainSkillRepository = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
        const createMainSkill = new create_mainskill_1.CreateMainSkill(mainSkillRepository);
        const deleteMainSkill = new delete_mainskill_1.DeleteMainSkill(mainSkillRepository);
        const mainskillToDelete = new mainskill_1.MainSkill({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            title: 'teste1'
        }, {
            timeExperience: 'teste1',
        });
        await createMainSkill.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            timeExperience: 'teste1',
            title: 'teste1'
        });
        const response = await deleteMainSkill.exec(mainskillToDelete);
        (0, vitest_1.expect)(response).toBeTruthy();
        (0, vitest_1.expect)(mainSkillRepository.mainskills.length).toEqual(0);
    });
    (0, vitest_1.it)("should delete nothing", async () => {
        const mainSkillRepository = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
        const deleteMainSkill = new delete_mainskill_1.DeleteMainSkill(mainSkillRepository);
        const mainSkillToDelete = new mainskill_1.MainSkill({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            title: 'teste1'
        }, {
            timeExperience: 'teste1',
        });
        const response = await deleteMainSkill.exec(mainSkillToDelete);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
    (0, vitest_1.it)("should delete nothing", async () => {
        const mainSkillRepository = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
        const createMainSkill = new create_mainskill_1.CreateMainSkill(mainSkillRepository);
        const deleteMainSkill = new delete_mainskill_1.DeleteMainSkill(mainSkillRepository);
        const mainSkillToDelete = new mainskill_1.MainSkill({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            title: 'teste1'
        }, {
            timeExperience: 'teste1',
        });
        await createMainSkill.exec({
            description: 'teste0',
            links: 'teste0',
            mainImage: 'teste0.png',
            timeExperience: 'teste0',
            title: 'teste1'
        });
        const response = await deleteMainSkill.exec(mainSkillToDelete);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
});
