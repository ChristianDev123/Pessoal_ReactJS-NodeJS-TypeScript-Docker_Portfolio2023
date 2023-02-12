"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMainSkills = void 0;
class GetAllMainSkills {
    constructor(mainSkillRepository) {
        this.mainSkillRepository = mainSkillRepository;
    }
    async exec({ title }) {
        let response;
        response = await this.mainSkillRepository.index(title);
        return response;
    }
}
exports.GetAllMainSkills = GetAllMainSkills;
