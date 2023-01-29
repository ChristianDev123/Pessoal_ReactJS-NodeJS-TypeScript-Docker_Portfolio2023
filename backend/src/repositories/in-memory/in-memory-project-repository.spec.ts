import { expect, test } from "vitest";
import { InMemoryProjectRepository } from "./in-memory-project-repository";
import { Project } from "../../entities/project";

test('create InMemoryProject instance', () => {
    const formProject = new InMemoryProjectRepository();
    expect(formProject).toBeInstanceOf(InMemoryProjectRepository);
});

test('Testing InMemoryProject create method', async() => {
    const formProject = new InMemoryProjectRepository();
    const project: Project = new Project({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });
    const createRes = await formProject.create(project);
    expect(createRes).toBeTruthy();
    expect(formProject.projects.length).toEqual(1);
});

test("Testing InMemoryProject index method, all datas",async ()=>{
    const formProject = new InMemoryProjectRepository();
    const project: Project = new Project({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });

    await formProject.create(project);
    await formProject.create(project);

    const allData = await formProject.index();
    
    expect(allData.length).toEqual(2);
})

test("Testing InMemoryProject index method, just one data",async ()=>{
    const formProject = new InMemoryProjectRepository();
    const project = new Project({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });

    const project1 = new Project({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        pdfImages:"images.pdf",
    });

    await formProject.create(project);
    await formProject.create(project1);

    const allData = await formProject.index();
    
    expect(allData.length).toEqual(2);
})

test("Testing InMemoryProject update method",async ()=>{
    const formProject = new InMemoryProjectRepository();
    const project = new Project({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });

    const project1 = new Project({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        pdfImages:"images.pdf",
    });

    await formProject.create(project);

    await formProject.update('test title', project1);

    const allData = await formProject.index();
    
    expect(allData.length).toEqual(1);
    expect(allData[0].title).toEqual('title2');
})

test("Testing InMemoryProject delete method",async ()=>{
    const formProject = new InMemoryProjectRepository();
    const project = new Project({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });

    const project1 = new Project({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        pdfImages:"images.pdf",
    });

    await formProject.create(project);
    await formProject.create(project1);


    const response = await formProject.delete("test title");

    const allData = await formProject.index();
    
    expect(response).toBeTruthy();
    expect(allData.length).toEqual(1);
    expect(allData[0].title).toEqual('title2');
})

test("Testing InMemoryProject find method", async () =>{
    const formProject = new InMemoryProjectRepository();
    const project = new Project({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });

    const project1 = new Project({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        pdfImages:"images.pdf",
    });

    await formProject.create(project);
    await formProject.create(project1);

    const response = await formProject.find(project);
    expect(response).toBeTruthy();
})