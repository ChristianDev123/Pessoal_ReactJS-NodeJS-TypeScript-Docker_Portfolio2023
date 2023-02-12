"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_project_repository_1 = require("../../repositories/in-memory/in-memory-project-repository");
const create_project_1 = require("./create-project");
const delete_project_1 = require("./delete-project");
const project_1 = require("../../entities/project");
(0, vitest_1.describe)("delete an Project", () => {
    (0, vitest_1.it)("should delete an Project", async () => {
        const projectRepository = new in_memory_project_repository_1.InMemoryProjectRepository();
        const createProject = new create_project_1.CreateProject(projectRepository);
        const deleteProject = new delete_project_1.DeleteProject(projectRepository);
        const certificateToDelete = new project_1.Project({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            title: 'teste1'
        }, {
            pdfImages: 'teste1',
        });
        await createProject.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            pdfImages: 'teste1',
            title: 'teste1'
        });
        const response = await deleteProject.exec(certificateToDelete);
        (0, vitest_1.expect)(response).toBeTruthy();
        (0, vitest_1.expect)(projectRepository.projects.length).toEqual(0);
    });
    (0, vitest_1.it)("should delete nothing", async () => {
        const projectRepository = new in_memory_project_repository_1.InMemoryProjectRepository();
        const deleteProject = new delete_project_1.DeleteProject(projectRepository);
        const certificateToDelete = new project_1.Project({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            title: 'teste1'
        }, {
            pdfImages: 'teste1',
        });
        const response = await deleteProject.exec(certificateToDelete);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
    (0, vitest_1.it)("should delete nothing", async () => {
        const projectRepository = new in_memory_project_repository_1.InMemoryProjectRepository();
        const createProject = new create_project_1.CreateProject(projectRepository);
        const deleteProject = new delete_project_1.DeleteProject(projectRepository);
        const certificateToDelete = new project_1.Project({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            title: 'teste1'
        }, {
            pdfImages: 'teste1',
        });
        await createProject.exec({
            description: 'teste0',
            links: 'teste0',
            mainImage: 'teste0.png',
            pdfImages: 'teste0',
            title: 'teste1'
        });
        const response = await deleteProject.exec(certificateToDelete);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
});
