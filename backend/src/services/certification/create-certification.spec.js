"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const create_certification_1 = require("./create-certification");
const in_memory_certification_repository_1 = require("../../repositories/in-memory/in-memory-certification-repository");
(0, vitest_1.describe)('create new certification', () => {
    (0, vitest_1.it)('should return an boolean', async () => {
        const certificationRepository = new in_memory_certification_repository_1.InMemoryCertificationRepository();
        const createCertification = new create_certification_1.CreateCertification(certificationRepository);
        const certification = await createCertification.exec({
            description: '',
            links: '',
            mainImage: '',
            title: '',
            pdfImages: ''
        });
        (0, vitest_1.expect)(certification).toEqual(true);
    });
    (0, vitest_1.it)('should increase an element in certification array', async () => {
        const certificationRepository = new in_memory_certification_repository_1.InMemoryCertificationRepository();
        const createCertification = new create_certification_1.CreateCertification(certificationRepository);
        await createCertification.exec({
            description: '',
            links: '',
            mainImage: '',
            title: '',
            pdfImages: ''
        });
        (0, vitest_1.expect)(certificationRepository.certification.length).toEqual(1);
    });
    (0, vitest_1.it)('not should increase an element in certification array if are similar', async () => {
        const certificationRepository = new in_memory_certification_repository_1.InMemoryCertificationRepository();
        const createCertification = new create_certification_1.CreateCertification(certificationRepository);
        await createCertification.exec({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste',
            pdfImages: 'teste'
        });
        await createCertification.exec({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste',
            pdfImages: 'teste'
        });
        (0, vitest_1.expect)(certificationRepository.certification.length).toEqual(1);
    });
});
