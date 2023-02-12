"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProject = void 0;
const project_1 = require("../../entities/project");
class CreateProject {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async exec({ description, links, mainImage, title, pdfImages }) {
        let response = false;
        const project = new project_1.Project({
            description,
            mainImage,
            title,
            links
        }, {
            pdfImages
        });
        if (!await this.projectRepository.find(project))
            response = await this.projectRepository.create(project);
        return response;
    }
}
exports.CreateProject = CreateProject;
