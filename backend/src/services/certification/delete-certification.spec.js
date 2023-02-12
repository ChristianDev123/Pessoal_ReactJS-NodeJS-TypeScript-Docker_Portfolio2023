"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_certification_repository_1 = require("../../repositories/in-memory/in-memory-certification-repository");
const create_certification_1 = require("./create-certification");
const delete_certification_1 = require("./delete-certification");
const certification_1 = require("../../entities/certification");
(0, vitest_1.describe)("delete an certification", () => {
    (0, vitest_1.it)("should delete an certification", async () => {
        const certificationRepository = new in_memory_certification_repository_1.InMemoryCertificationRepository();
        const createCertification = new create_certification_1.CreateCertification(certificationRepository);
        const deleteCertification = new delete_certification_1.DeleteCertification(certificationRepository);
        const certificateToDelete = new certification_1.Certification({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            title: 'teste1'
        }, {
            pdfImages: 'teste1',
        });
        await createCertification.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            pdfImages: 'teste1',
            title: 'teste1'
        });
        const response = await deleteCertification.exec(certificateToDelete);
        (0, vitest_1.expect)(response).toBeTruthy();
        (0, vitest_1.expect)(certificationRepository.certification.length).toEqual(0);
    });
    (0, vitest_1.it)("should delete nothing", async () => {
        const certificationRepository = new in_memory_certification_repository_1.InMemoryCertificationRepository();
        const deleteCertification = new delete_certification_1.DeleteCertification(certificationRepository);
        const certificateToDelete = new certification_1.Certification({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            title: 'teste1'
        }, {
            pdfImages: 'teste1',
        });
        const response = await deleteCertification.exec(certificateToDelete);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
    (0, vitest_1.it)("should delete nothing", async () => {
        const certificationRepository = new in_memory_certification_repository_1.InMemoryCertificationRepository();
        const createCertification = new create_certification_1.CreateCertification(certificationRepository);
        const deleteCertification = new delete_certification_1.DeleteCertification(certificationRepository);
        const certificateToDelete = new certification_1.Certification({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            title: 'teste1'
        }, {
            pdfImages: 'teste1',
        });
        await createCertification.exec({
            description: 'teste0',
            links: 'teste0',
            mainImage: 'teste0.png',
            pdfImages: 'teste0',
            title: 'teste1'
        });
        const response = await deleteCertification.exec(certificateToDelete);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
});
