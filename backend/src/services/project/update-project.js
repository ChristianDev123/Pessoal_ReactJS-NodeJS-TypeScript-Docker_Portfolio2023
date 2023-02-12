"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProject = void 0;
const existence_verification_1 = __importDefault(require("../utils/existence-verification"));
class UpdateProject {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async exec(oldData, newData) {
        let response = false;
        if ((0, existence_verification_1.default)(oldData, await this.projectRepository.index('undefined'))) {
            response = await this.projectRepository.update(oldData.title, newData);
        }
        return response;
    }
}
exports.UpdateProject = UpdateProject;
;
