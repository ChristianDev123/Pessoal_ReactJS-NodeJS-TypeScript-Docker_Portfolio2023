import { expect, test } from "vitest";
import { Certification } from "../../entities/certification";
import { InMemoryCertificationRepository } from "./in-memory-certification-repository";

test('create InMemoryCertification instance', () => {
    const certMemory = new InMemoryCertificationRepository();
    expect(certMemory).toBeInstanceOf(InMemoryCertificationRepository);
});

test('Testing InMemoryCertification create method', async() => {
    const certMemory = new InMemoryCertificationRepository();
    const certification: Certification = new Certification({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });
    const createRes = await certMemory.create(certification);
    expect(createRes).toBeTruthy();
});

test("Testing InMemoryCertification index method, all datas",async ()=>{
    const certMemory = new InMemoryCertificationRepository();
    const certification: Certification = new Certification({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });
    await certMemory.create(certification);
    await certMemory.create(certification);

    const allData = await certMemory.index();
    
    expect(allData.length).toEqual(2);
})

test("Testing InMemoryCertification index method, just one data",async ()=>{
    const certMemory = new InMemoryCertificationRepository();
    const certification = new Certification({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });

    const certification1 = new Certification({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        pdfImages:"images.pdf",
    });

    await certMemory.create(certification);
    await certMemory.create(certification1);

    const allData = await certMemory.index();
    
    expect(allData.length).toEqual(2);
})

test("Testing InMemoryCertification update method",async ()=>{
    const certMemory = new InMemoryCertificationRepository();
    const certification = new Certification({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });

    const certification1 = new Certification({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        pdfImages:"images.pdf",
    });

    await certMemory.create(certification);

    await certMemory.update('test title', certification1);

    const allData = await certMemory.index();
    
    expect(allData.length).toEqual(1);
    expect(allData[0].title).toEqual('title2');
})

test("Testing InMemoryCertification delete method",async ()=>{
    const certMemory = new InMemoryCertificationRepository();
    const certification = new Certification({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });

    const certification1 = new Certification({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        pdfImages:"images.pdf",
    });

    await certMemory.create(certification);
    await certMemory.create(certification1);


    const response = await certMemory.delete("test title");

    const allData = await certMemory.index();
    
    expect(response).toBeTruthy();
    expect(allData.length).toEqual(1);
    expect(allData[0].title).toEqual('title2');
})

test("Testing InMemoryCertification find method", async () =>{
    const certMemory = new InMemoryCertificationRepository();
    const certification = new Certification({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        pdfImages:"images.pdf",
    });

    const certification1 = new Certification({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        pdfImages:"images.pdf",
    });

    await certMemory.create(certification);
    await certMemory.create(certification1);

    const response = await certMemory.find(certification);
    expect(response).toBeTruthy();
})