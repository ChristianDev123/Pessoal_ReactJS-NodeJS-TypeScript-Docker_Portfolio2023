"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const get_all_project_1 = require("../../services/project/get-all-project");
const create_project_1 = require("../../services/project/create-project");
const update_project_1 = require("../../services/project/update-project");
const delete_project_1 = require("../../services/project/delete-project");
const in_database_project_repository_1 = require("../../repositories/in-database/in-database-project-repository");
const project_1 = require("../../entities/project");
const projectRepository = new in_database_project_repository_1.InDatabaseProjectRepository();
class ProjectController {
    static async index(req, res) {
        let { title } = req.query;
        title = String(title);
        let response = [];
        const projectList = new get_all_project_1.GetAllProjects(projectRepository);
        response = await projectList.exec({ title });
        if (response.length > 0)
            res.status(200).json(response);
        else
            res.status(404).json(response);
    }
    static async create(req, res) {
        const { description, links, mainImage, title, pdfImages } = req.body;
        let response = false;
        const createProject = new create_project_1.CreateProject(projectRepository);
        response = await createProject.exec({
            description,
            links,
            mainImage,
            title,
            pdfImages
        });
        if (response)
            res.status(201).json({ created: true });
        else
            res.status(501).json({ created: false });
    }
    static async update(req, res) {
        let { oldData, newData } = req.body;
        oldData = JSON.stringify(oldData);
        newData = JSON.stringify(newData);
        oldData = JSON.parse(oldData);
        newData = JSON.parse(newData);
        let response = false;
        oldData = new project_1.Project({
            description: oldData.description,
            links: oldData.links,
            mainImage: oldData.mainImage,
            title: oldData.title
        }, {
            pdfImages: oldData.pdfImages
        });
        newData = new project_1.Project({
            description: newData.description,
            links: newData.links,
            mainImage: newData.mainImage,
            title: newData.title
        }, {
            pdfImages: newData.pdfImages
        });
        const updateProject = new update_project_1.UpdateProject(projectRepository);
        response = await updateProject.exec(oldData, newData);
        if (response)
            res.status(200).json({ changed: true });
        else
            res.status(304).json({ changed: false });
    }
    static async delete(req, res) {
        let { title } = req.query;
        title = String(title);
        let response = false;
        const getAllProjects = new get_all_project_1.GetAllProjects(projectRepository);
        const deleteProject = new delete_project_1.DeleteProject(projectRepository);
        const projectToDelete = await getAllProjects.exec({ title });
        response = await deleteProject.exec(projectToDelete[0]);
        if (response)
            res.status(204).json({ excluded: true });
        else
            res.status(500).json({ excluded: false });
    }
}
exports.ProjectController = ProjectController;
