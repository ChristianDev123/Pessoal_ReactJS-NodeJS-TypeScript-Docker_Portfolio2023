import { describe, expect, it } from "vitest";
import { InMemoryFormationRepository } from "../../repositories/in-memory/in-memory-formation-repository";
import { CreateFormation } from "./create-formation";
import { UpdateFormation } from "./update-formations";
import { Formation } from "../../entities/formation";

describe("update an existent certificate", ()=>{
    it("should change data in Formation array", async()=>{
        const formationRepository = new InMemoryFormationRepository();
        const createFormation = new CreateFormation(formationRepository);
        const updateFormation = new UpdateFormation(formationRepository);
        const oldFormation = new Formation({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste'
        },{
            pdfImages:'teste',
        });
        const newFormation = new Formation({
            description:"teste1",
            links:"teste1",
            mainImage:"teste1",
            title:"teste1"
        },{
            pdfImages:"teste1"
        });

        await createFormation.exec({
            description:'teste0',
            links:'teste0',
            mainImage:'teste0',
            pdfImages:'teste0',
            title:'teste0'
        });

        await createFormation.exec({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            pdfImages:'teste',
            title:'teste'
        });

        await createFormation.exec({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1',
            pdfImages:'teste1',
            title:'teste1'
        });

        await updateFormation.exec(oldFormation,newFormation);
    
        expect(formationRepository.formation[1].title).toEqual('teste1');
    });

    it("should change nothing, create nothing",async()=>{
        const formationRepository = new InMemoryFormationRepository();
        const updateFormation = new UpdateFormation(formationRepository);
        const oldFormation = new Formation({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste'
        },{
            pdfImages:'teste',
        });
        const newFormation = new Formation({
            description:"teste1",
            links:"teste1",
            mainImage:"teste1",
            title:"teste1"
        },{
            pdfImages:"teste1"
        });

        const response = await updateFormation.exec(oldFormation,newFormation);

        expect(response).toBeFalsy();
    });

    it("should change nothing, passing not create Formation",async()=>{
        const formationRepository = new InMemoryFormationRepository();
        const createFormation = new CreateFormation(formationRepository);
        const updateFormation = new UpdateFormation(formationRepository);
        const oldFormation = new Formation({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste'
        },{
            pdfImages:'teste',
        });
        const newFormation = new Formation({
            description:"teste1",
            links:"teste1",
            mainImage:"teste1",
            title:"teste1"
        },{
            pdfImages:"teste1"
        });

        await createFormation.exec({
            description:'teste0',
            links:'teste0',
            mainImage:'teste0',
            pdfImages:'teste0',
            title:'teste0'
        });

        await createFormation.exec({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1',
            pdfImages:'teste1',
            title:'teste1'
        });

        const response = await updateFormation.exec(oldFormation,newFormation);

        expect(response).toBeFalsy();
    });
});