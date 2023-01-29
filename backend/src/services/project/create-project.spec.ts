import { describe, expect, it } from "vitest";
import { Project } from "../../entities/project";
import { CreateProject } from "./create-project";
import { InMemoryProjectRepository } from "../../repositories/in-memory/in-memory-project-repository";

describe('create new Project',()=>{
    it('should return an boolean',async()=>{
        const projectRepository = new InMemoryProjectRepository();
        const createProject = new CreateProject(projectRepository);
        const project = await createProject.exec({
            description:'',
            links:'',
            mainImage:'',
            title:'',
            pdfImages:''
        });
        
        expect(project).toEqual(true);
    })

    it('should increase an element in Project array',async()=>{
        const projectRepository = new InMemoryProjectRepository();
        const createProject = new CreateProject(projectRepository);
        await createProject.exec({
            description:'',
            links:'',
            mainImage:'',
            title:'',
            pdfImages:''
        });
        expect(projectRepository.projects.length).toEqual(1);
    })

    it('not should increase an element in Project array if are similar',async()=>{
        const projectRepository = new InMemoryProjectRepository();
        const createProject = new CreateProject(projectRepository);
        await createProject.exec({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste',
            pdfImages:'teste'
        });
        await createProject.exec({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste',
            pdfImages:'teste'
        });
        expect(projectRepository.projects.length).toEqual(1);
    })
})