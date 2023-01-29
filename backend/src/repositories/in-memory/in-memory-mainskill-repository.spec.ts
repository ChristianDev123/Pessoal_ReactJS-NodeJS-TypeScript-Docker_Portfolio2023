import { expect, test } from "vitest";
import { InMemoryMainSkillRepository } from "./in-memory-mainskill-repository";
import { MainSkill } from "../../entities/mainskill";

test('create InMemoryMainSkill instance', () => {
    const formMainSkill = new InMemoryMainSkillRepository();
    expect(formMainSkill).toBeInstanceOf(InMemoryMainSkillRepository);
});

test('Testing InMemoryMainSkill create method', async() => {
    const formMainSkill = new InMemoryMainSkillRepository();
    const mainSkill: MainSkill = new MainSkill({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        timeExperience:"teste"
    });
    const createRes = await formMainSkill.create(mainSkill);
    expect(createRes).toBeTruthy();
    expect(formMainSkill.mainskills.length).toEqual(1);
});

test("Testing InMemoryMainSkill index method, all datas",async ()=>{
    const formMainSkill = new InMemoryMainSkillRepository();
    const mainSkill: MainSkill = new MainSkill({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        timeExperience:"images.pdf",
    });

    await formMainSkill.create(mainSkill);
    await formMainSkill.create(mainSkill);

    const allData = await formMainSkill.index();
    
    expect(allData.length).toEqual(2);
})

test("Testing InMemoryMainSkill index method, just one data",async ()=>{
    const formMainSkill = new InMemoryMainSkillRepository();
    const mainSkill = new MainSkill({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        timeExperience:"1 ano",
    });

    const mainSkill1 = new MainSkill({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        timeExperience:"images.pdf",
    });

    await formMainSkill.create(mainSkill);
    await formMainSkill.create(mainSkill1);

    const allData = await formMainSkill.index();
    
    expect(allData.length).toEqual(2);
})

test("Testing InMemoryMainSkill update method",async ()=>{
    const formMainSkill = new InMemoryMainSkillRepository();
    const mainSkill = new MainSkill({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        timeExperience:"images.pdf",
    });

    const mainSkill1 = new MainSkill({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        timeExperience:"1 ano",
    });

    await formMainSkill.create(mainSkill);

    await formMainSkill.update('test title', mainSkill1);

    const allData = await formMainSkill.index();
    
    expect(allData.length).toEqual(1);
    expect(allData[0].title).toEqual('title2');
})

test("Testing InMemoryMainSkill delete method",async ()=>{
    const formMainSkill = new InMemoryMainSkillRepository();
    const mainSkill = new MainSkill({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        timeExperience:"1 ano",
    });

    const mainSkill1 = new MainSkill({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        timeExperience:"1 ano",
    });

    await formMainSkill.create(mainSkill);
    await formMainSkill.create(mainSkill1);


    const response = await formMainSkill.delete("test title");

    const allData = await formMainSkill.index();
    
    expect(response).toBeTruthy();
    expect(allData.length).toEqual(1);
    expect(allData[0].title).toEqual('title2');
})

test("Testing InMemoryMainSkill find method", async () =>{
    const formMainSkill = new InMemoryMainSkillRepository();
    const mainSkill = new MainSkill({
        description: "description",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"test title"
    },{
        timeExperience:"images.pdf",
    });

    const mainSkill1 = new MainSkill({
        description: "other test",
        links:["link1", "link2", "link3"],
        mainImage:"main.png",
        title:"title2"
    },{
        timeExperience:"1 ano",
    });

    await formMainSkill.create(mainSkill);
    await formMainSkill.create(mainSkill1);

    const response = await formMainSkill.find(mainSkill);
    expect(response).toBeTruthy();
})