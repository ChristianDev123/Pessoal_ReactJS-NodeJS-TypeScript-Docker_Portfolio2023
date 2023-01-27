import { expect, test } from "vitest";
import { InMemoryFormationRepository } from "./in-memory-formation-repository";
import { Formation } from "../../entities/formation";

test('create InMemoryFormation instance', () => {
    const formMemory = new InMemoryFormationRepository();
    expect(formMemory).toBeInstanceOf(InMemoryFormationRepository);
});

test('Testing InMemoryFormation create method', async() => {
    const formMemory = new InMemoryFormationRepository();
    const formation: Formation = new Formation({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });
    const createRes = await formMemory.create(formation);
    expect(createRes).toBeTruthy();
    expect(formMemory.formation.length).toEqual(1);
});

test("Testing InMemoryFormation index method, all datas",async ()=>{
    const formMemory = new InMemoryFormationRepository();
    const formation: Formation = new Formation({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });

    await formMemory.create(formation);
    await formMemory.create(formation);

    const allData = await formMemory.index();
    
    expect(allData.length).toEqual(2);
})

test("Testing InMemoryFormation index method, just one data",async ()=>{
    const formMemory = new InMemoryFormationRepository();
    const formation = new Formation({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });

    const formation1 = new Formation({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        pdfImages:"images.pdf",
    });

    await formMemory.create(formation);
    await formMemory.create(formation1);

    const allData = await formMemory.index();
    
    expect(allData.length).toEqual(2);
})

test("Testing InMemoryFormation update method",async ()=>{
    const formMemory = new InMemoryFormationRepository();
    const formation = new Formation({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });

    const formation1 = new Formation({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        pdfImages:"images.pdf",
    });

    await formMemory.create(formation);

    await formMemory.update('test title', formation1);

    const allData = await formMemory.index();
    
    expect(allData.length).toEqual(1);
    expect(allData[0].title).toEqual('title2');
})

test("Testing InMemoryFormation delete method",async ()=>{
    const formMemory = new InMemoryFormationRepository();
    const formation = new Formation({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });

    const formation1 = new Formation({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        pdfImages:"images.pdf",
    });

    await formMemory.create(formation);
    await formMemory.create(formation1);


    const response = await formMemory.delete("test title");

    const allData = await formMemory.index();
    
    expect(response).toBeTruthy();
    expect(allData.length).toEqual(1);
    expect(allData[0].title).toEqual('title2');
})

test("Testing InMemoryFormation find method", async () =>{
    const formMemory = new InMemoryFormationRepository();
    const formation = new Formation({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });

    const formation1 = new Formation({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        pdfImages:"images.pdf",
    });

    await formMemory.create(formation);
    await formMemory.create(formation1);

    const response = await formMemory.find(formation);
    expect(response).toBeTruthy();
})