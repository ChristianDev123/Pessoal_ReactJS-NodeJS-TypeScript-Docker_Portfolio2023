"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMainSkill = void 0;
const mainskill_1 = require("../../entities/mainskill");
class CreateMainSkill {
    constructor(mainSkillRepository) {
        this.mainSkillRepository = mainSkillRepository;
    }
    async exec({ description, links, mainImage, title, timeExperience }) {
        let response = false;
        const mainSkill = new mainskill_1.MainSkill({
            description,
            mainImage,
            title,
            links
        }, {
            timeExperience
        });
        if (!await this.mainSkillRepository.find(mainSkill))
            response = await this.mainSkillRepository.create(mainSkill);
        return response;
    }
}
exports.CreateMainSkill = CreateMainSkill;
