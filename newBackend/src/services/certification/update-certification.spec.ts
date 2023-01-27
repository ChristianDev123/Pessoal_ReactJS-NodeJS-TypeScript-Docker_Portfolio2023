import { describe, expect, it } from "vitest";
import { InMemoryCertificationRepository } from "../../repositories/in-memory/in-memory-certification-repository";
import { CreateCertification } from "./create-certification";
import { UpdateCertification } from "./update-certification";
import { Certification } from "../../entities/certification";

describe("update an existent certificate", ()=>{
    it("should change data in certification array", async()=>{
        const certificationRepository = new InMemoryCertificationRepository();
        const createCertification = new CreateCertification(certificationRepository);
        const updateCertification = new UpdateCertification(certificationRepository);
        const oldCertification = new Certification({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste'
        },{
            pdfImages:'teste',
        });
        const newCertification = new Certification({
            description:"teste1",
            links:"teste1",
            mainImage:"teste1",
            title:"teste1"
        },{
            pdfImages:"teste1"
        });

        await createCertification.exec({
            description:'teste0',
            links:'teste0',
            mainImage:'teste0',
            pdfImages:'teste0',
            title:'teste0'
        });

        await createCertification.exec({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            pdfImages:'teste',
            title:'teste'
        });

        await createCertification.exec({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1',
            pdfImages:'teste1',
            title:'teste1'
        });

        await updateCertification.exec(oldCertification,newCertification);
    
        expect(certificationRepository.certification[1].title).toEqual('teste1');
    });

    it("should change nothing, create nothing",async()=>{
        const certificationRepository = new InMemoryCertificationRepository();
        const createCertification = new CreateCertification(certificationRepository);
        const updateCertification = new UpdateCertification(certificationRepository);
        const oldCertification = new Certification({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste'
        },{
            pdfImages:'teste',
        });
        const newCertification = new Certification({
            description:"teste1",
            links:"teste1",
            mainImage:"teste1",
            title:"teste1"
        },{
            pdfImages:"teste1"
        });

        const response = await updateCertification.exec(oldCertification,newCertification);

        expect(response).toBeFalsy();
    });

    it("should change nothing, passing not create certification",async()=>{
        const certificationRepository = new InMemoryCertificationRepository();
        const createCertification = new CreateCertification(certificationRepository);
        const updateCertification = new UpdateCertification(certificationRepository);
        const oldCertification = new Certification({
            description:'teste',
            links:'teste',
            mainImage:'teste',
            title:'teste'
        },{
            pdfImages:'teste',
        });
        const newCertification = new Certification({
            description:"teste1",
            links:"teste1",
            mainImage:"teste1",
            title:"teste1"
        },{
            pdfImages:"teste1"
        });

        await createCertification.exec({
            description:'teste0',
            links:'teste0',
            mainImage:'teste0',
            pdfImages:'teste0',
            title:'teste0'
        });

        await createCertification.exec({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1',
            pdfImages:'teste1',
            title:'teste1'
        });

        const response = await updateCertification.exec(oldCertification,newCertification);

        expect(response).toBeFalsy();
    });
});