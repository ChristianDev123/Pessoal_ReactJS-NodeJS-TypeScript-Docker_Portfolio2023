import { describe, expect, it } from "vitest";
import { InMemoryFormationRepository } from "../../repositories/in-memory/in-memory-formation-repository";
import { CreateFormation } from "./create-formation";
import { DeleteFormation } from "./delete-formation";
import { Formation } from "../../entities/formation";

describe("delete an Formation", ()=>{
    it("should delete an Formation", async()=>{
        const formationRepository = new InMemoryFormationRepository();
        const createFormation = new CreateFormation(formationRepository);
        const deleteFormation = new DeleteFormation(formationRepository);
        const certificateToDelete = new Formation({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            title:'teste1'
        },{
            pdfImages:'teste1',
        });
        
        await createFormation.exec({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            pdfImages:'teste1',
            title:'teste1'
        });

        const response:boolean = await deleteFormation.exec(certificateToDelete);
        
        expect(response).toBeTruthy();
        expect(formationRepository.formation.length).toEqual(0);
    });

    it("should delete nothing",async()=>{
        const formationRepository = new InMemoryFormationRepository();
        const deleteFormation = new DeleteFormation(formationRepository);
        const certificateToDelete = new Formation({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            title:'teste1'
        },{
            pdfImages:'teste1',
        });

        const response:boolean = await deleteFormation.exec(certificateToDelete);
        expect(response).toBeFalsy();
    })

    it("should delete nothing",async()=>{
        const formationRepository = new InMemoryFormationRepository();
        const createFormation = new CreateFormation(formationRepository);
        const deleteFormation = new DeleteFormation(formationRepository);
        const certificateToDelete = new Formation({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            title:'teste1'
        },{
            pdfImages:'teste1',
        });

        await createFormation.exec({
            description:'teste0',
            links:'teste0',
            mainImage:'teste0.png',
            pdfImages:'teste0',
            title:'teste1'
        });

        const response:boolean = await deleteFormation.exec(certificateToDelete);
        expect(response).toBeFalsy();
    })
})