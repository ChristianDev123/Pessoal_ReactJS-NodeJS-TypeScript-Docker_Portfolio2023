"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_project_repository_1 = require("./in-memory-project-repository");
const project_1 = require("../../entities/project");
(0, vitest_1.test)('create InMemoryProject instance', () => {
    const formProject = new in_memory_project_repository_1.InMemoryProjectRepository();
    (0, vitest_1.expect)(formProject).toBeInstanceOf(in_memory_project_repository_1.InMemoryProjectRepository);
});
(0, vitest_1.test)('Testing InMemoryProject create method', async () => {
    const formProject = new in_memory_project_repository_1.InMemoryProjectRepository();
    const project = new project_1.Project({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    const createRes = await formProject.create(project);
    (0, vitest_1.expect)(createRes).toBeTruthy();
    (0, vitest_1.expect)(formProject.projects.length).toEqual(1);
});
(0, vitest_1.test)("Testing InMemoryProject index method, all datas", async () => {
    const formProject = new in_memory_project_repository_1.InMemoryProjectRepository();
    const project = new project_1.Project({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    await formProject.create(project);
    await formProject.create(project);
    const allData = await formProject.index();
    (0, vitest_1.expect)(allData.length).toEqual(2);
});
(0, vitest_1.test)("Testing InMemoryProject index method, just one data", async () => {
    const formProject = new in_memory_project_repository_1.InMemoryProjectRepository();
    const project = new project_1.Project({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    const project1 = new project_1.Project({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        pdfImages: "images.pdf",
    });
    await formProject.create(project);
    await formProject.create(project1);
    const allData = await formProject.index();
    (0, vitest_1.expect)(allData.length).toEqual(2);
});
(0, vitest_1.test)("Testing InMemoryProject update method", async () => {
    const formProject = new in_memory_project_repository_1.InMemoryProjectRepository();
    const project = new project_1.Project({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    const project1 = new project_1.Project({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        pdfImages: "images.pdf",
    });
    await formProject.create(project);
    await formProject.update('test title', project1);
    const allData = await formProject.index();
    (0, vitest_1.expect)(allData.length).toEqual(1);
    (0, vitest_1.expect)(allData[0].title).toEqual('title2');
});
(0, vitest_1.test)("Testing InMemoryProject delete method", async () => {
    const formProject = new in_memory_project_repository_1.InMemoryProjectRepository();
    const project = new project_1.Project({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    const project1 = new project_1.Project({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        pdfImages: "images.pdf",
    });
    await formProject.create(project);
    await formProject.create(project1);
    const response = await formProject.delete("test title");
    const allData = await formProject.index();
    (0, vitest_1.expect)(response).toBeTruthy();
    (0, vitest_1.expect)(allData.length).toEqual(1);
    (0, vitest_1.expect)(allData[0].title).toEqual('title2');
});
(0, vitest_1.test)("Testing InMemoryProject find method", async () => {
    const formProject = new in_memory_project_repository_1.InMemoryProjectRepository();
    const project = new project_1.Project({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    const project1 = new project_1.Project({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        pdfImages: "images.pdf",
    });
    await formProject.create(project);
    await formProject.create(project1);
    const response = await formProject.find(project);
    (0, vitest_1.expect)(response).toBeTruthy();
});
