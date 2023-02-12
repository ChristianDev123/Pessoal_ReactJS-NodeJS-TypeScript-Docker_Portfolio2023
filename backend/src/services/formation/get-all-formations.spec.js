"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_formation_repository_1 = require("../../repositories/in-memory/in-memory-formation-repository");
const create_formation_1 = require("./create-formation");
const get_all_formations_1 = require("./get-all-formations");
(0, vitest_1.describe)('getting certifications', () => {
    (0, vitest_1.test)('should return a list of certifications', async () => {
        const formationsRepository = new in_memory_formation_repository_1.InMemoryFormationRepository();
        const createFormation = new create_formation_1.CreateFormation(formationsRepository);
        await createFormation.exec({
            description: 'teste',
            links: 'teste',
            mainImage: "teste",
            pdfImages: 'teste',
            title: 'teste',
        });
        await createFormation.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: "teste1",
            pdfImages: 'teste1',
            title: 'teste1',
        });
        const certifications = new get_all_formations_1.GetAllFormations(formationsRepository);
        const certificationArray = await certifications.exec({ title: undefined });
        (0, vitest_1.expect)(certificationArray).toBeTypeOf('object');
        (0, vitest_1.expect)(certificationArray.length).toBe(2);
    });
    (0, vitest_1.test)('should return a list with an certification', async () => {
        const formationsRepository = new in_memory_formation_repository_1.InMemoryFormationRepository();
        const createFormation = new create_formation_1.CreateFormation(formationsRepository);
        await createFormation.exec({
            description: 'teste',
            links: 'teste',
            mainImage: "teste",
            pdfImages: 'teste',
            title: 'teste',
        });
        const certifications = new get_all_formations_1.GetAllFormations(formationsRepository);
        const certificationArray = await certifications.exec({ title: 'teste' });
        (0, vitest_1.expect)(certificationArray.length).toEqual(1);
    });
});
