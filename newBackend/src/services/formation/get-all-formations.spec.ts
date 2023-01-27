import { describe, expect, test } from "vitest";
import { InMemoryFormationRepository } from "../../repositories/in-memory/in-memory-formation-repository";
import { CreateFormation } from "./create-formation";
import { GetAllFormations } from "./get-all-formations";

describe('getting certifications', () => {
    test('should return a list of certifications', async ()=> {
        const formationsRepository = new InMemoryFormationRepository();
        const createFormation = new CreateFormation(formationsRepository);
        await createFormation.exec({
            description:'teste',
            links:'teste',
            mainImage:"teste",
            pdfImages:'teste',
            title:'teste',
        });
        await createFormation.exec({
            description:'teste1',
            links:'teste1',
            mainImage:"teste1",
            pdfImages:'teste1',
            title:'teste1',
        });
        const certifications = new GetAllFormations(formationsRepository);
        const certificationArray = await certifications.exec({name:undefined});
        expect(certificationArray).toBeTypeOf('object');
        expect(certificationArray.length).toBe(2);
    })

    test('should return a list with an certification',async()=>{
        const formationsRepository = new InMemoryFormationRepository();
        const createFormation = new CreateFormation(formationsRepository);
        await createFormation.exec({
            description:'teste',
            links:'teste',
            mainImage:"teste",
            pdfImages:'teste',
            title:'teste',
        });
        const certifications = new GetAllFormations(formationsRepository);
        const certificationArray = await certifications.exec({name:'teste'});
        expect(certificationArray.length).toEqual(1);
    })
});