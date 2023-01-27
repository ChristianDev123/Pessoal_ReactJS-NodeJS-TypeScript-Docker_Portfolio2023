import { describe, expect, it } from "vitest";
import { InMemoryCertificationRepository } from "../../repositories/in-memory/in-memory-certification-repository";
import { CreateCertification } from "./create-certification";
import { DeleteCertification } from "./delete-certification";
import { Certification } from "../../entities/certification";

describe("delete an certification", ()=>{
    it("should delete an certification", async()=>{
        const certificationRepository = new InMemoryCertificationRepository();
        const createCertification = new CreateCertification(certificationRepository);
        const deleteCertification = new DeleteCertification(certificationRepository);
        const certificateToDelete = new Certification({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            title:'teste1'
        },{
            pdfImages:'teste1',
        });
        
        await createCertification.exec({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            pdfImages:'teste1',
            title:'teste1'
        });

        const response:boolean = await deleteCertification.exec(certificateToDelete);
        
        expect(response).toBeTruthy();
        expect(certificationRepository.certification.length).toEqual(0);
    });

    it("should delete nothing",async()=>{
        const certificationRepository = new InMemoryCertificationRepository();
        const deleteCertification = new DeleteCertification(certificationRepository);
        const certificateToDelete = new Certification({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            title:'teste1'
        },{
            pdfImages:'teste1',
        });

        const response:boolean = await deleteCertification.exec(certificateToDelete);
        expect(response).toBeFalsy();
    })

    it("should delete nothing",async()=>{
        const certificationRepository = new InMemoryCertificationRepository();
        const createCertification = new CreateCertification(certificationRepository);
        const deleteCertification = new DeleteCertification(certificationRepository);
        const certificateToDelete = new Certification({
            description:'teste1',
            links:'teste1',
            mainImage:'teste1.png',
            title:'teste1'
        },{
            pdfImages:'teste1',
        });

        await createCertification.exec({
            description:'teste0',
            links:'teste0',
            mainImage:'teste0.png',
            pdfImages:'teste0',
            title:'teste1'
        });

        const response:boolean = await deleteCertification.exec(certificateToDelete);
        expect(response).toBeFalsy();
    })
})