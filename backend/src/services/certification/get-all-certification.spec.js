"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_certification_repository_1 = require("../../repositories/in-memory/in-memory-certification-repository");
const create_certification_1 = require("./create-certification");
const get_all_certifications_1 = require("./get-all-certifications");
(0, vitest_1.describe)('getting certifications', () => {
    (0, vitest_1.test)('should return a list of certifications', async () => {
        const certificationsRepository = new in_memory_certification_repository_1.InMemoryCertificationRepository();
        const createCertification = new create_certification_1.CreateCertification(certificationsRepository);
        await createCertification.exec({
            description: 'teste',
            links: 'teste',
            mainImage: "teste",
            pdfImages: 'teste',
            title: 'teste',
        });
        await createCertification.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: "teste1",
            pdfImages: 'teste1',
            title: 'teste1',
        });
        const certifications = new get_all_certifications_1.GetAllCertifications(certificationsRepository);
        const certificationArray = await certifications.exec({ title: undefined });
        (0, vitest_1.expect)(certificationArray).toBeTypeOf('object');
        (0, vitest_1.expect)(certificationArray.length).toBe(2);
    });
    (0, vitest_1.test)('should return a list with an certification', async () => {
        const certificationsRepository = new in_memory_certification_repository_1.InMemoryCertificationRepository();
        const createCertification = new create_certification_1.CreateCertification(certificationsRepository);
        await createCertification.exec({
            description: 'teste',
            links: 'teste',
            mainImage: "teste",
            pdfImages: 'teste',
            title: 'teste',
        });
        const certifications = new get_all_certifications_1.GetAllCertifications(certificationsRepository);
        const certificationArray = await certifications.exec({ title: 'teste' });
        (0, vitest_1.expect)(certificationArray.length).toEqual(1);
    });
});
