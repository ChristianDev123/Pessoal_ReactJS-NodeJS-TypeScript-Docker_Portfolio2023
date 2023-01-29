import { describe, expect, it } from "vitest";
import { InMemoryFormationRepository } from "../../repositories/in-memory/in-memory-formation-repository";
import { CreateFormation } from "./create-formation";

describe('create new Formation',()=>{
    it('should return an boolean',async()=>{
        const formationRepository = new InMemoryFormationRepository();
        const createFormation = new CreateFormation(formationRepository);
        const formation = await createFormation.exec({
            description:'',
            links:'',
            mainImage:'',
            title:'',
            pdfImages:''
        });
        
        expect(formation).toEqual(true);
    })

    it('should increase an element in Formation array',async()=>{
        const formationRepository = new InMemoryFormationRepository();
        const createFormation = new CreateFormation(formationRepository);
        await createFormation.exec({
            description:'',
            links:'',
            mainImage:'',
            title:'',
            pdfImages:''
        });
        expect(formationRepository.formation.length).toEqual(1);
    })

    it('not should increase an element in Formation array if are similar',async()=>{
        const formationRepository = new InMemoryFormationRepository();
        const createFormation = new CreateFormation(formationRepository);
        await createFormation.exec({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste',
            pdfImages:'teste'
        });
        await createFormation.exec({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste',
            pdfImages:'teste'
        });
        expect(formationRepository.formation.length).toEqual(1);
    })
})