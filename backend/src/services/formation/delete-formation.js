"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFormation = void 0;
const existence_verification_1 = __importDefault(require("../utils/existence-verification"));
class DeleteFormation {
    constructor(formationRepository) {
        this.formationRepository = formationRepository;
    }
    async exec(data) {
        let response = false;
        if ((0, existence_verification_1.default)(data, await this.formationRepository.index('undefined'))) {
            response = await this.formationRepository.delete(data.title);
        }
        return response;
    }
}
exports.DeleteFormation = DeleteFormation;
