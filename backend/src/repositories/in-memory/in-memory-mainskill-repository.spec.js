"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_mainskill_repository_1 = require("./in-memory-mainskill-repository");
const mainskill_1 = require("../../entities/mainskill");
(0, vitest_1.test)('create InMemoryMainSkill instance', () => {
    const formMainSkill = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
    (0, vitest_1.expect)(formMainSkill).toBeInstanceOf(in_memory_mainskill_repository_1.InMemoryMainSkillRepository);
});
(0, vitest_1.test)('Testing InMemoryMainSkill create method', async () => {
    const formMainSkill = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
    const mainSkill = new mainskill_1.MainSkill({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        timeExperience: "teste"
    });
    const createRes = await formMainSkill.create(mainSkill);
    (0, vitest_1.expect)(createRes).toBeTruthy();
    (0, vitest_1.expect)(formMainSkill.mainskills.length).toEqual(1);
});
(0, vitest_1.test)("Testing InMemoryMainSkill index method, all datas", async () => {
    const formMainSkill = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
    const mainSkill = new mainskill_1.MainSkill({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        timeExperience: "images.pdf",
    });
    await formMainSkill.create(mainSkill);
    await formMainSkill.create(mainSkill);
    const allData = await formMainSkill.index();
    (0, vitest_1.expect)(allData.length).toEqual(2);
});
(0, vitest_1.test)("Testing InMemoryMainSkill index method, just one data", async () => {
    const formMainSkill = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
    const mainSkill = new mainskill_1.MainSkill({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        timeExperience: "1 ano",
    });
    const mainSkill1 = new mainskill_1.MainSkill({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        timeExperience: "images.pdf",
    });
    await formMainSkill.create(mainSkill);
    await formMainSkill.create(mainSkill1);
    const allData = await formMainSkill.index();
    (0, vitest_1.expect)(allData.length).toEqual(2);
});
(0, vitest_1.test)("Testing InMemoryMainSkill update method", async () => {
    const formMainSkill = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
    const mainSkill = new mainskill_1.MainSkill({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        timeExperience: "images.pdf",
    });
    const mainSkill1 = new mainskill_1.MainSkill({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        timeExperience: "1 ano",
    });
    await formMainSkill.create(mainSkill);
    await formMainSkill.update('test title', mainSkill1);
    const allData = await formMainSkill.index();
    (0, vitest_1.expect)(allData.length).toEqual(1);
    (0, vitest_1.expect)(allData[0].title).toEqual('title2');
});
(0, vitest_1.test)("Testing InMemoryMainSkill delete method", async () => {
    const formMainSkill = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
    const mainSkill = new mainskill_1.MainSkill({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        timeExperience: "1 ano",
    });
    const mainSkill1 = new mainskill_1.MainSkill({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        timeExperience: "1 ano",
    });
    await formMainSkill.create(mainSkill);
    await formMainSkill.create(mainSkill1);
    const response = await formMainSkill.delete("test title");
    const allData = await formMainSkill.index();
    (0, vitest_1.expect)(response).toBeTruthy();
    (0, vitest_1.expect)(allData.length).toEqual(1);
    (0, vitest_1.expect)(allData[0].title).toEqual('title2');
});
(0, vitest_1.test)("Testing InMemoryMainSkill find method", async () => {
    const formMainSkill = new in_memory_mainskill_repository_1.InMemoryMainSkillRepository();
    const mainSkill = new mainskill_1.MainSkill({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        timeExperience: "images.pdf",
    });
    const mainSkill1 = new mainskill_1.MainSkill({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        timeExperience: "1 ano",
    });
    await formMainSkill.create(mainSkill);
    await formMainSkill.create(mainSkill1);
    const response = await formMainSkill.find(mainSkill);
    (0, vitest_1.expect)(response).toBeTruthy();
});
