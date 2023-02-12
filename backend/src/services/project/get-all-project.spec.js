"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_project_repository_1 = require("../../repositories/in-memory/in-memory-project-repository");
const create_project_1 = require("./create-project");
const get_all_project_1 = require("./get-all-project");
(0, vitest_1.describe)('getting projects', () => {
    (0, vitest_1.test)('should return a list of projects', async () => {
        const projectRepository = new in_memory_project_repository_1.InMemoryProjectRepository();
        const createProject = new create_project_1.CreateProject(projectRepository);
        await createProject.exec({
            description: 'teste',
            links: 'teste',
            mainImage: "teste",
            pdfImages: 'teste',
            title: 'teste',
        });
        await createProject.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: "teste1",
            pdfImages: 'teste1',
            title: 'teste1',
        });
        const projects = new get_all_project_1.GetAllProjects(projectRepository);
        const certificationArray = await projects.exec({ title: undefined });
        (0, vitest_1.expect)(certificationArray).toBeTypeOf('object');
        (0, vitest_1.expect)(certificationArray.length).toBe(2);
    });
    (0, vitest_1.test)('should return a list with an certification', async () => {
        const projectRepository = new in_memory_project_repository_1.InMemoryProjectRepository();
        const createProject = new create_project_1.CreateProject(projectRepository);
        await createProject.exec({
            description: 'teste',
            links: 'teste',
            mainImage: "teste",
            pdfImages: 'teste',
            title: 'teste',
        });
        const projects = new get_all_project_1.GetAllProjects(projectRepository);
        const certificationArray = await projects.exec({ title: 'teste' });
        (0, vitest_1.expect)(certificationArray.length).toEqual(1);
    });
});
