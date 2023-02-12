"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const create_project_1 = require("./create-project");
const in_memory_project_repository_1 = require("../../repositories/in-memory/in-memory-project-repository");
(0, vitest_1.describe)('create new Project', () => {
    (0, vitest_1.it)('should return an boolean', async () => {
        const projectRepository = new in_memory_project_repository_1.InMemoryProjectRepository();
        const createProject = new create_project_1.CreateProject(projectRepository);
        const project = await createProject.exec({
            description: '',
            links: '',
            mainImage: '',
            title: '',
            pdfImages: ''
        });
        (0, vitest_1.expect)(project).toEqual(true);
    });
    (0, vitest_1.it)('should increase an element in Project array', async () => {
        const projectRepository = new in_memory_project_repository_1.InMemoryProjectRepository();
        const createProject = new create_project_1.CreateProject(projectRepository);
        await createProject.exec({
            description: '',
            links: '',
            mainImage: '',
            title: '',
            pdfImages: ''
        });
        (0, vitest_1.expect)(projectRepository.projects.length).toEqual(1);
    });
    (0, vitest_1.it)('not should increase an element in Project array if are similar', async () => {
        const projectRepository = new in_memory_project_repository_1.InMemoryProjectRepository();
        const createProject = new create_project_1.CreateProject(projectRepository);
        await createProject.exec({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste',
            pdfImages: 'teste'
        });
        await createProject.exec({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste',
            pdfImages: 'teste'
        });
        (0, vitest_1.expect)(projectRepository.projects.length).toEqual(1);
    });
});
