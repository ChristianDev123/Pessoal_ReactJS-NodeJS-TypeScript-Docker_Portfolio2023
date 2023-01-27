import { describe, expect, it } from "vitest";
import { InMemoryProjectRepository } from "../../repositories/in-memory/in-memory-project-repository";
import { CreateProject } from "./create-project";
import { UpdateProject } from "./update-project";
import { Project } from "../../entities/project";

describe("update an existent certificate", ()=>{
    it("should change data in Project array", async()=>{
        const projectRepository = new InMemoryProjectRepository();
        const createProject = new CreateProject(projectRepository);
        const updateProject = new UpdateProject(projectRepository);
        const oldProject = new Project({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste'
        },{
            pdfImages:'teste',
        });
        const newProject = new Project({
            description:"teste1",
            links:"teste1",
            mainImage:"teste1",
            title:"teste1"
        },{
            pdfImages:"teste1"
        });

        await createProject.exec({
            description:'teste0',
            links:'teste0',
            mainImage:'teste0',
            pdfImages:'teste0',
            title:'teste0'
        });

        await createProject.exec({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            pdfImages:'teste',
            title:'teste'
        });

        await createProject.exec({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1',
            pdfImages:'teste1',
            title:'teste1'
        });

        await updateProject.exec(oldProject,newProject);
    
        expect(projectRepository.projects[1].title).toEqual('teste1');
    });

    it("should change nothing, create nothing",async()=>{
        const projectRepository = new InMemoryProjectRepository();
        const updateProject = new UpdateProject(projectRepository);
        const oldProject = new Project({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste'
        },{
            pdfImages:'teste',
        });
        const newProject = new Project({
            description:"teste1",
            links:"teste1",
            mainImage:"teste1",
            title:"teste1"
        },{
            pdfImages:"teste1"
        });

        const response = await updateProject.exec(oldProject,newProject);

        expect(response).toBeFalsy();
    });

    it("should change nothing, passing not create Project",async()=>{
        const projectRepository = new InMemoryProjectRepository();
        const createProject = new CreateProject(projectRepository);
        const updateProject = new UpdateProject(projectRepository);
        const oldProject = new Project({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste'
        },{
            pdfImages:'teste',
        });
        const newProject = new Project({
            description:"teste1",
            links:"teste1",
            mainImage:"teste1",
            title:"teste1"
        },{
            pdfImages:"teste1"
        });

        await createProject.exec({
            description:'teste0',
            links:'teste0',
            mainImage:'teste0',
            pdfImages:'teste0',
            title:'teste0'
        });

        await createProject.exec({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1',
            pdfImages:'teste1',
            title:'teste1'
        });

        const response = await updateProject.exec(oldProject,newProject);

        expect(response).toBeFalsy();
    });
});