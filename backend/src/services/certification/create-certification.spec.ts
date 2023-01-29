import { describe, expect, it } from "vitest";
import { Certification } from "../../entities/certification";
import { CreateCertification } from "./create-certification";
import { InMemoryCertificationRepository } from "../../repositories/in-memory/in-memory-certification-repository";

describe('create new certification',()=>{
    it('should return an boolean',async()=>{
        const certificationRepository = new InMemoryCertificationRepository();
        const createCertification = new CreateCertification(certificationRepository);
        const certification = await createCertification.exec({
            description:'',
            links:'',
            mainImage:'',
            title:'',
            pdfImages:''
        });
        
        expect(certification).toEqual(true);
    })

    it('should increase an element in certification array',async()=>{
        const certificationRepository = new InMemoryCertificationRepository();
        const createCertification = new CreateCertification(certificationRepository);
        await createCertification.exec({
            description:'',
            links:'',
            mainImage:'',
            title:'',
            pdfImages:''
        });
        expect(certificationRepository.certification.length).toEqual(1);
    })

    it('not should increase an element in certification array if are similar',async()=>{
        const certificationRepository = new InMemoryCertificationRepository();
        const createCertification = new CreateCertification(certificationRepository);
        await createCertification.exec({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste',
            pdfImages:'teste'
        });
        await createCertification.exec({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste',
            pdfImages:'teste'
        });
        expect(certificationRepository.certification.length).toEqual(1);
    })
})