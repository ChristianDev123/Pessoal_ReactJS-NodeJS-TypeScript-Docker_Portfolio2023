import { describe, expect, test } from "vitest";
import { InMemoryProjectRepository } from "../../repositories/in-memory/in-memory-project-repository";
import { CreateProject } from "./create-project";
import { GetAllProjects } from "./get-all-project";

describe('getting projects', () => {
    test('should return a list of projects', async ()=> {
        const projectRepository = new InMemoryProjectRepository();
        const createProject = new CreateProject(projectRepository);
        await createProject.exec({
            description:'teste',
            links:'teste',
            mainImage:"teste",
            pdfImages:'teste',
            title:'teste',
        });
        await createProject.exec({
            description:'teste1',
            links:'teste1',
            mainImage:"teste1",
            pdfImages:'teste1',
            title:'teste1',
        });
        const projects = new GetAllProjects(projectRepository);
        const certificationArray = await projects.exec({name:undefined});
        expect(certificationArray).toBeTypeOf('object');
        expect(certificationArray.length).toBe(2);
    })

    test('should return a list with an certification',async()=>{
        const projectRepository = new InMemoryProjectRepository();
        const createProject = new CreateProject(projectRepository);
        await createProject.exec({
            description:'teste',
            links:'teste',
            mainImage:"teste",
            pdfImages:'teste',
            title:'teste',
        });
        const projects = new GetAllProjects(projectRepository);
        const certificationArray = await projects.exec({name:'teste'});
        expect(certificationArray.length).toEqual(1);
    })
});