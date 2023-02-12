"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_formation_repository_1 = require("../../repositories/in-memory/in-memory-formation-repository");
const create_formation_1 = require("./create-formation");
(0, vitest_1.describe)('create new Formation', () => {
    (0, vitest_1.it)('should return an boolean', async () => {
        const formationRepository = new in_memory_formation_repository_1.InMemoryFormationRepository();
        const createFormation = new create_formation_1.CreateFormation(formationRepository);
        const formation = await createFormation.exec({
            description: '',
            links: '',
            mainImage: '',
            title: '',
            pdfImages: ''
        });
        (0, vitest_1.expect)(formation).toEqual(true);
    });
    (0, vitest_1.it)('should increase an element in Formation array', async () => {
        const formationRepository = new in_memory_formation_repository_1.InMemoryFormationRepository();
        const createFormation = new create_formation_1.CreateFormation(formationRepository);
        await createFormation.exec({
            description: '',
            links: '',
            mainImage: '',
            title: '',
            pdfImages: ''
        });
        (0, vitest_1.expect)(formationRepository.formation.length).toEqual(1);
    });
    (0, vitest_1.it)('not should increase an element in Formation array if are similar', async () => {
        const formationRepository = new in_memory_formation_repository_1.InMemoryFormationRepository();
        const createFormation = new create_formation_1.CreateFormation(formationRepository);
        await createFormation.exec({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste',
            pdfImages: 'teste'
        });
        await createFormation.exec({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste',
            pdfImages: 'teste'
        });
        (0, vitest_1.expect)(formationRepository.formation.length).toEqual(1);
    });
});
