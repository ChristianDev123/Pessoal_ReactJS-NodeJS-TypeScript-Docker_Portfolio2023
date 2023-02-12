"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFormation = void 0;
const existence_verification_1 = __importDefault(require("../utils/existence-verification"));
class UpdateFormation {
    constructor(formationRepository) {
        this.formationRepository = formationRepository;
    }
    async exec(oldData, newData) {
        let response = false;
        if ((0, existence_verification_1.default)(oldData, await this.formationRepository.index('undefined'))) {
            response = await this.formationRepository.update(oldData.title, newData);
        }
        return response;
    }
}
exports.UpdateFormation = UpdateFormation;
;
