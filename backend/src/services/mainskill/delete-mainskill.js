"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMainSkill = void 0;
const existence_verification_1 = __importDefault(require("../utils/existence-verification"));
class DeleteMainSkill {
    constructor(mainSkillRepository) {
        this.mainSkillRepository = mainSkillRepository;
    }
    async exec(data) {
        let response = false;
        if ((0, existence_verification_1.default)(data, await this.mainSkillRepository.index('undefined'))) {
            response = await this.mainSkillRepository.delete(data.title);
        }
        return response;
    }
}
exports.DeleteMainSkill = DeleteMainSkill;
