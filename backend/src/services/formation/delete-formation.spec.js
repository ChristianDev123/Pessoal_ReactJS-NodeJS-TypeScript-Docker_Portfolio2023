"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_formation_repository_1 = require("../../repositories/in-memory/in-memory-formation-repository");
const create_formation_1 = require("./create-formation");
const delete_formation_1 = require("./delete-formation");
const formation_1 = require("../../entities/formation");
(0, vitest_1.describe)("delete an Formation", () => {
    (0, vitest_1.it)("should delete an Formation", async () => {
        const formationRepository = new in_memory_formation_repository_1.InMemoryFormationRepository();
        const createFormation = new create_formation_1.CreateFormation(formationRepository);
        const deleteFormation = new delete_formation_1.DeleteFormation(formationRepository);
        const certificateToDelete = new formation_1.Formation({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            title: 'teste1'
        }, {
            pdfImages: 'teste1',
        });
        await createFormation.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            pdfImages: 'teste1',
            title: 'teste1'
        });
        const response = await deleteFormation.exec(certificateToDelete);
        (0, vitest_1.expect)(response).toBeTruthy();
        (0, vitest_1.expect)(formationRepository.formation.length).toEqual(0);
    });
    (0, vitest_1.it)("should delete nothing", async () => {
        const formationRepository = new in_memory_formation_repository_1.InMemoryFormationRepository();
        const deleteFormation = new delete_formation_1.DeleteFormation(formationRepository);
        const certificateToDelete = new formation_1.Formation({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            title: 'teste1'
        }, {
            pdfImages: 'teste1',
        });
        const response = await deleteFormation.exec(certificateToDelete);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
    (0, vitest_1.it)("should delete nothing", async () => {
        const formationRepository = new in_memory_formation_repository_1.InMemoryFormationRepository();
        const createFormation = new create_formation_1.CreateFormation(formationRepository);
        const deleteFormation = new delete_formation_1.DeleteFormation(formationRepository);
        const certificateToDelete = new formation_1.Formation({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1.png',
            title: 'teste1'
        }, {
            pdfImages: 'teste1',
        });
        await createFormation.exec({
            description: 'teste0',
            links: 'teste0',
            mainImage: 'teste0.png',
            pdfImages: 'teste0',
            title: 'teste1'
        });
        const response = await deleteFormation.exec(certificateToDelete);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
});
