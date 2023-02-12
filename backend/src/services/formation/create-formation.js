"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFormation = void 0;
const formation_1 = require("../../entities/formation");
class CreateFormation {
    constructor(formationRepository) {
        this.formationRepository = formationRepository;
    }
    async exec({ description, links, mainImage, title, pdfImages }) {
        let response = false;
        const formation = new formation_1.Formation({
            description,
            mainImage,
            title,
            links
        }, {
            pdfImages
        });
        if (!await this.formationRepository.find(formation))
            response = await this.formationRepository.create(formation);
        return response;
    }
}
exports.CreateFormation = CreateFormation;
