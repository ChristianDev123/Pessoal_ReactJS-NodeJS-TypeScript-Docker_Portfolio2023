"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_mainskill_repository_1 = require("../../repositories/in-memory/in-memory-mainskill-repository");
const create_mainskill_1 = require("./create-mainskill");
const update_mainskill_1 = require("./update-mainskill");
const mainskill_1 = require("../../entities/mainskill");
(0, vitest_1.describe)("update an existent mainskill", () => {
    (0, vitest_1.it)("should change data in mainskill array", async () => {
        const mainSkillRepository = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
        const createMainSkill = new create_mainskill_1.CreateMainSkill(mainSkillRepository);
        const updateMainSkill = new update_mainskill_1.UpdateMainSkill(mainSkillRepository);
        const oldMainSkill = new mainskill_1.MainSkill({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste'
        }, {
            timeExperience: 'teste',
        });
        const newMainSkill = new mainskill_1.MainSkill({
            description: "teste1",
            links: "teste1",
            mainImage: "teste1",
            title: "teste1"
        }, {
            timeExperience: "teste1"
        });
        await createMainSkill.exec({
            description: 'teste0',
            links: 'teste0',
            mainImage: 'teste0',
            timeExperience: 'teste0',
            title: 'teste0'
        });
        await createMainSkill.exec({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            timeExperience: 'teste',
            title: 'teste'
        });
        await createMainSkill.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1',
            timeExperience: 'teste1',
            title: 'teste1'
        });
        await updateMainSkill.exec(oldMainSkill, newMainSkill);
        (0, vitest_1.expect)(mainSkillRepository.mainskills[1].title).toEqual('teste1');
    });
    (0, vitest_1.it)("should change nothing, create nothing", async () => {
        const mainSkillRepository = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
        const updateMainSkill = new update_mainskill_1.UpdateMainSkill(mainSkillRepository);
        const oldMainSkill = new mainskill_1.MainSkill({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste'
        }, {
            timeExperience: 'teste',
        });
        const newMainSkill = new mainskill_1.MainSkill({
            description: "teste1",
            links: "teste1",
            mainImage: "teste1",
            title: "teste1"
        }, {
            timeExperience: "teste1"
        });
        const response = await updateMainSkill.exec(oldMainSkill, newMainSkill);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
    (0, vitest_1.it)("should change nothing, passing not create mainskill", async () => {
        const mainSkillRepository = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
        const createMainSkill = new create_mainskill_1.CreateMainSkill(mainSkillRepository);
        const updateMainSkill = new update_mainskill_1.UpdateMainSkill(mainSkillRepository);
        const oldMainSkill = new mainskill_1.MainSkill({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste'
        }, {
            timeExperience: 'teste',
        });
        const newMainSkill = new mainskill_1.MainSkill({
            description: "teste1",
            links: "teste1",
            mainImage: "teste1",
            title: "teste1"
        }, {
            timeExperience: "teste1"
        });
        await createMainSkill.exec({
            description: 'teste0',
            links: 'teste0',
            mainImage: 'teste0',
            timeExperience: 'teste0',
            title: 'teste0'
        });
        await createMainSkill.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1',
            timeExperience: 'teste1',
            title: 'teste1'
        });
        const response = await updateMainSkill.exec(oldMainSkill, newMainSkill);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
});
