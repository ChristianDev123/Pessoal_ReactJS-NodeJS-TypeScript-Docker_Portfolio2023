"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_formation_repository_1 = require("./in-memory-formation-repository");
const formation_1 = require("../../entities/formation");
(0, vitest_1.test)('create InMemoryFormation instance', () => {
    const formMemory = new in_memory_formation_repository_1.InMemoryFormationRepository();
    (0, vitest_1.expect)(formMemory).toBeInstanceOf(in_memory_formation_repository_1.InMemoryFormationRepository);
});
(0, vitest_1.test)('Testing InMemoryFormation create method', async () => {
    const formMemory = new in_memory_formation_repository_1.InMemoryFormationRepository();
    const formation = new formation_1.Formation({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    const createRes = await formMemory.create(formation);
    (0, vitest_1.expect)(createRes).toBeTruthy();
    (0, vitest_1.expect)(formMemory.formation.length).toEqual(1);
});
(0, vitest_1.test)("Testing InMemoryFormation index method, all datas", async () => {
    const formMemory = new in_memory_formation_repository_1.InMemoryFormationRepository();
    const formation = new formation_1.Formation({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    await formMemory.create(formation);
    await formMemory.create(formation);
    const allData = await formMemory.index();
    (0, vitest_1.expect)(allData.length).toEqual(2);
});
(0, vitest_1.test)("Testing InMemoryFormation index method, just one data", async () => {
    const formMemory = new in_memory_formation_repository_1.InMemoryFormationRepository();
    const formation = new formation_1.Formation({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    const formation1 = new formation_1.Formation({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        pdfImages: "images.pdf",
    });
    await formMemory.create(formation);
    await formMemory.create(formation1);
    const allData = await formMemory.index();
    (0, vitest_1.expect)(allData.length).toEqual(2);
});
(0, vitest_1.test)("Testing InMemoryFormation update method", async () => {
    const formMemory = new in_memory_formation_repository_1.InMemoryFormationRepository();
    const formation = new formation_1.Formation({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    const formation1 = new formation_1.Formation({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        pdfImages: "images.pdf",
    });
    await formMemory.create(formation);
    await formMemory.update('test title', formation1);
    const allData = await formMemory.index();
    (0, vitest_1.expect)(allData.length).toEqual(1);
    (0, vitest_1.expect)(allData[0].title).toEqual('title2');
});
(0, vitest_1.test)("Testing InMemoryFormation delete method", async () => {
    const formMemory = new in_memory_formation_repository_1.InMemoryFormationRepository();
    const formation = new formation_1.Formation({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    const formation1 = new formation_1.Formation({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        pdfImages: "images.pdf",
    });
    await formMemory.create(formation);
    await formMemory.create(formation1);
    const response = await formMemory.delete("test title");
    const allData = await formMemory.index();
    (0, vitest_1.expect)(response).toBeTruthy();
    (0, vitest_1.expect)(allData.length).toEqual(1);
    (0, vitest_1.expect)(allData[0].title).toEqual('title2');
});
(0, vitest_1.test)("Testing InMemoryFormation find method", async () => {
    const formMemory = new in_memory_formation_repository_1.InMemoryFormationRepository();
    const formation = new formation_1.Formation({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    const formation1 = new formation_1.Formation({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        pdfImages: "images.pdf",
    });
    await formMemory.create(formation);
    await formMemory.create(formation1);
    const response = await formMemory.find(formation);
    (0, vitest_1.expect)(response).toBeTruthy();
});
