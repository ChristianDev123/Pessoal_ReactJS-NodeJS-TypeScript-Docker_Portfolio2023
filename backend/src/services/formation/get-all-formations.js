"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllFormations = void 0;
class GetAllFormations {
    constructor(formationRepository) {
        this.formationRepository = formationRepository;
    }
    async exec({ title }) {
        let response;
        response = await this.formationRepository.index(title);
        return response;
    }
}
exports.GetAllFormations = GetAllFormations;
