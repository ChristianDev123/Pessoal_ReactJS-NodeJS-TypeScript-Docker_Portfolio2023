"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProject = void 0;
const existence_verification_1 = __importDefault(require("../utils/existence-verification"));
class DeleteProject {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async exec(data) {
        let response = false;
        if ((0, existence_verification_1.default)(data, await this.projectRepository.index('undefined'))) {
            response = await this.projectRepository.delete(data.title);
        }
        return response;
    }
}
exports.DeleteProject = DeleteProject;
