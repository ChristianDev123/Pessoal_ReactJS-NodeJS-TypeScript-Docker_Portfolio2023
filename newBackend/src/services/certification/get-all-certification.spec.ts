import { describe, expect, test } from "vitest";
import { InMemoryCertificationRepository } from "../../repositories/in-memory/in-memory-certification-repository";
import { CreateCertification } from "./create-certification";
import { GetAllCertifications } from "./get-all-certifications";

describe('getting certifications', () => {
    test('should return a list of certifications', async ()=> {
        const certificationsRepository = new InMemoryCertificationRepository();
        const createCertification = new CreateCertification(certificationsRepository);
        await createCertification.exec({
            description:'teste',
            links:'teste',
            mainImage:"teste",
            pdfImages:'teste',
            title:'teste',
        });
        await createCertification.exec({
            description:'teste1',
            links:'teste1',
            mainImage:"teste1",
            pdfImages:'teste1',
            title:'teste1',
        });
        const certifications = new GetAllCertifications(certificationsRepository);
        const certificationArray = await certifications.exec({name:undefined});
        expect(certificationArray).toBeTypeOf('object');
        expect(certificationArray.length).toBe(2);
    })

    test('should return a list with an certification',async()=>{
        const certificationsRepository = new InMemoryCertificationRepository();
        const createCertification = new CreateCertification(certificationsRepository);
        await createCertification.exec({
            description:'teste',
            links:'teste',
            mainImage:"teste",
            pdfImages:'teste',
            title:'teste',
        });
        const certifications = new GetAllCertifications(certificationsRepository);
        const certificationArray = await certifications.exec({name:'teste'});
        expect(certificationArray.length).toEqual(1);
    })
});