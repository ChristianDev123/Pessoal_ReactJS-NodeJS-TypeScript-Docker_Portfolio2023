"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const in_memory_formation_repository_1 = require("../../repositories/in-memory/in-memory-formation-repository");
const create_formation_1 = require("./create-formation");
const update_formations_1 = require("./update-formations");
const formation_1 = require("../../entities/formation");
(0, vitest_1.describe)("update an existent certificate", () => {
    (0, vitest_1.it)("should change data in Formation array", async () => {
        const formationRepository = new in_memory_formation_repository_1.InMemoryFormationRepository();
        const createFormation = new create_formation_1.CreateFormation(formationRepository);
        const updateFormation = new update_formations_1.UpdateFormation(formationRepository);
        const oldFormation = new formation_1.Formation({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste'
        }, {
            pdfImages: 'teste',
        });
        const newFormation = new formation_1.Formation({
            description: "teste1",
            links: "teste1",
            mainImage: "teste1",
            title: "teste1"
        }, {
            pdfImages: "teste1"
        });
        await createFormation.exec({
            description: 'teste0',
            links: 'teste0',
            mainImage: 'teste0',
            pdfImages: 'teste0',
            title: 'teste0'
        });
        await createFormation.exec({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            pdfImages: 'teste',
            title: 'teste'
        });
        await createFormation.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1',
            pdfImages: 'teste1',
            title: 'teste1'
        });
        await updateFormation.exec(oldFormation, newFormation);
        (0, vitest_1.expect)(formationRepository.formation[1].title).toEqual('teste1');
    });
    (0, vitest_1.it)("should change nothing, create nothing", async () => {
        const formationRepository = new in_memory_formation_repository_1.InMemoryFormationRepository();
        const updateFormation = new update_formations_1.UpdateFormation(formationRepository);
        const oldFormation = new formation_1.Formation({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste'
        }, {
            pdfImages: 'teste',
        });
        const newFormation = new formation_1.Formation({
            description: "teste1",
            links: "teste1",
            mainImage: "teste1",
            title: "teste1"
        }, {
            pdfImages: "teste1"
        });
        const response = await updateFormation.exec(oldFormation, newFormation);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
    (0, vitest_1.it)("should change nothing, passing not create Formation", async () => {
        const formationRepository = new in_memory_formation_repository_1.InMemoryFormationRepository();
        const createFormation = new create_formation_1.CreateFormation(formationRepository);
        const updateFormation = new update_formations_1.UpdateFormation(formationRepository);
        const oldFormation = new formation_1.Formation({
            description: 'teste',
            links: 'teste',
            mainImage: 'teste',
            title: 'teste'
        }, {
            pdfImages: 'teste',
        });
        const newFormation = new formation_1.Formation({
            description: "teste1",
            links: "teste1",
            mainImage: "teste1",
            title: "teste1"
        }, {
            pdfImages: "teste1"
        });
        await createFormation.exec({
            description: 'teste0',
            links: 'teste0',
            mainImage: 'teste0',
            pdfImages: 'teste0',
            title: 'teste0'
        });
        await createFormation.exec({
            description: 'teste1',
            links: 'teste1',
            mainImage: 'teste1',
            pdfImages: 'teste1',
            title: 'teste1'
        });
        const response = await updateFormation.exec(oldFormation, newFormation);
        (0, vitest_1.expect)(response).toBeFalsy();
    });
});
