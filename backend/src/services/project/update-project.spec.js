"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_project_repository_1 = require("../../repositories/in-memory/in-memory-project-repository");
const create_project_1 = require("./create-project");
const update_project_1 = require("./update-project");
const project_1 = require("../../entities/project");
(0, vitest_1.describe)("update an existent certificate", () => {
    (0, vitest_1.it)("should change data in Project array", async () => {
        const projectRepository = new in_memory_project_repository_1.InMemoryProjectRepository();
        const createProject = new create_project_1.CreateProject(projectRepository);
        const updateProject = new update_project_1.UpdateProject(projectRepository);
        const oldProject = new project_1.Project({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste'
        }, {
            pdfImages: 'teste',
        });
        const newProject = new project_1.Project({
            description: "teste1",
            links: "teste1",
            mainImage: "teste1",
            title: "teste1"
        }, {
            pdfImages: "teste1"
        });
        await createProject.exec({
            description: 'teste0',
            links: 'teste0',
            mainImage: 'teste0',
            pdfImages: 'teste0',
            title: 'teste0'
        });
        await createProject.exec({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            pdfImages: 'teste',
            title: 'teste'
        });
        await createProject.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1',
            pdfImages: 'teste1',
            title: 'teste1'
        });
        await updateProject.exec(oldProject, newProject);
        (0, vitest_1.expect)(projectRepository.projects[1].title).toEqual('teste1');
    });
    (0, vitest_1.it)("should change nothing, create nothing", async () => {
        const projectRepository = new in_memory_project_repository_1.InMemoryProjectRepository();
        const updateProject = new update_project_1.UpdateProject(projectRepository);
        const oldProject = new project_1.Project({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste'
        }, {
            pdfImages: 'teste',
        });
        const newProject = new project_1.Project({
            description: "teste1",
            links: "teste1",
            mainImage: "teste1",
            title: "teste1"
        }, {
            pdfImages: "teste1"
        });
        const response = await updateProject.exec(oldProject, newProject);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
    (0, vitest_1.it)("should change nothing, passing not create Project", async () => {
        const projectRepository = new in_memory_project_repository_1.InMemoryProjectRepository();
        const createProject = new create_project_1.CreateProject(projectRepository);
        const updateProject = new update_project_1.UpdateProject(projectRepository);
        const oldProject = new project_1.Project({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste'
        }, {
            pdfImages: 'teste',
        });
        const newProject = new project_1.Project({
            description: "teste1",
            links: "teste1",
            mainImage: "teste1",
            title: "teste1"
        }, {
            pdfImages: "teste1"
        });
        await createProject.exec({
            description: 'teste0',
            links: 'teste0',
            mainImage: 'teste0',
            pdfImages: 'teste0',
            title: 'teste0'
        });
        await createProject.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1',
            pdfImages: 'teste1',
            title: 'teste1'
        });
        const response = await updateProject.exec(oldProject, newProject);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
});
