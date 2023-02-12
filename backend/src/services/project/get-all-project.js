"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProjects = void 0;
class GetAllProjects {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async exec({ title }) {
        let response;
        response = await this.projectRepository.index(title);
        return response;
    }
}
exports.GetAllProjects = GetAllProjects;
