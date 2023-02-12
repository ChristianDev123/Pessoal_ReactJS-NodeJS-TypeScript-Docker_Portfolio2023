"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_certification_repository_1 = require("../../repositories/in-memory/in-memory-certification-repository");
const create_certification_1 = require("./create-certification");
const update_certification_1 = require("./update-certification");
const certification_1 = require("../../entities/certification");
(0, vitest_1.describe)("update an existent certificate", () => {
    (0, vitest_1.it)("should change data in certification array", async () => {
        const certificationRepository = new in_memory_certification_repository_1.InMemoryCertificationRepository();
        const createCertification = new create_certification_1.CreateCertification(certificationRepository);
        const updateCertification = new update_certification_1.UpdateCertification(certificationRepository);
        const oldCertification = new certification_1.Certification({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste'
        }, {
            pdfImages: 'teste',
        });
        const newCertification = new certification_1.Certification({
            description: "teste1",
            links: "teste1",
            mainImage: "teste1",
            title: "teste1"
        }, {
            pdfImages: "teste1"
        });
        await createCertification.exec({
            description: 'teste0',
            links: 'teste0',
            mainImage: 'teste0',
            pdfImages: 'teste0',
            title: 'teste0'
        });
        await createCertification.exec({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            pdfImages: 'teste',
            title: 'teste'
        });
        await createCertification.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1',
            pdfImages: 'teste1',
            title: 'teste1'
        });
        await updateCertification.exec(oldCertification, newCertification);
        (0, vitest_1.expect)(certificationRepository.certification[1].title).toEqual('teste1');
    });
    (0, vitest_1.it)("should change nothing, create nothing", async () => {
        const certificationRepository = new in_memory_certification_repository_1.InMemoryCertificationRepository();
        const createCertification = new create_certification_1.CreateCertification(certificationRepository);
        const updateCertification = new update_certification_1.UpdateCertification(certificationRepository);
        const oldCertification = new certification_1.Certification({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste'
        }, {
            pdfImages: 'teste',
        });
        const newCertification = new certification_1.Certification({
            description: "teste1",
            links: "teste1",
            mainImage: "teste1",
            title: "teste1"
        }, {
            pdfImages: "teste1"
        });
        const response = await updateCertification.exec(oldCertification, newCertification);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
    (0, vitest_1.it)("should change nothing, passing not create certification", async () => {
        const certificationRepository = new in_memory_certification_repository_1.InMemoryCertificationRepository();
        const createCertification = new create_certification_1.CreateCertification(certificationRepository);
        const updateCertification = new update_certification_1.UpdateCertification(certificationRepository);
        const oldCertification = new certification_1.Certification({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste'
        }, {
            pdfImages: 'teste',
        });
        const newCertification = new certification_1.Certification({
            description: "teste1",
            links: "teste1",
            mainImage: "teste1",
            title: "teste1"
        }, {
            pdfImages: "teste1"
        });
        await createCertification.exec({
            description: 'teste0',
            links: 'teste0',
            mainImage: 'teste0',
            pdfImages: 'teste0',
            title: 'teste0'
        });
        await createCertification.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1',
            pdfImages: 'teste1',
            title: 'teste1'
        });
        const response = await updateCertification.exec(oldCertification, newCertification);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
});
