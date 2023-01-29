import { describe, expect, it } from "vitest";
import { InMemoryProjectRepository } from "../../repositories/in-memory/in-memory-project-repository";
import { CreateProject } from "./create-project";
import { DeleteProject } from "./delete-project";
import { Project } from "../../entities/project";

describe("delete an Project", ()=>{
    it("should delete an Project", async()=>{
        const projectRepository = new InMemoryProjectRepository();
        const createProject = new CreateProject(projectRepository);
        const deleteProject = new DeleteProject(projectRepository);
        const certificateToDelete = new Project({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            title:'teste1'
        },{
            pdfImages:'teste1',
        });
        
        await createProject.exec({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            pdfImages:'teste1',
            title:'teste1'
        });

        const response:boolean = await deleteProject.exec(certificateToDelete);
        
        expect(response).toBeTruthy();
        expect(projectRepository.projects.length).toEqual(0);
    });

    it("should delete nothing",async()=>{
        const projectRepository = new InMemoryProjectRepository();
        const deleteProject = new DeleteProject(projectRepository);
        const certificateToDelete = new Project({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            title:'teste1'
        },{
            pdfImages:'teste1',
        });

        const response:boolean = await deleteProject.exec(certificateToDelete);
        expect(response).toBeFalsy();
    })

    it("should delete nothing",async()=>{
        const projectRepository = new InMemoryProjectRepository();
        const createProject = new CreateProject(projectRepository);
        const deleteProject = new DeleteProject(projectRepository);
        const certificateToDelete = new Project({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            title:'teste1'
        },{
            pdfImages:'teste1',
        });

        await createProject.exec({
            description:'teste0',
            links:'teste0',
            mainImage:'teste0.png',
            pdfImages:'teste0',
            title:'teste1'
        });

        const response:boolean = await deleteProject.exec(certificateToDelete);
        expect(response).toBeFalsy();
    })
})