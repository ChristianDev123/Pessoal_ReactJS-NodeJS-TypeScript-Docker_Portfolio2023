"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryProjectRepository = void 0;
class InMemoryProjectRepository {
    constructor() {
        this.projects = [];
    }
    async create(data) {
        let response = false;
        const lengthProjects = this.projects.length;
        this.projects.push(data);
        if (this.projects.length > lengthProjects)
            response = true;
        return response;
    }
    async index(name) {
        let response;
        if (name) {
            response = this.projects.filter(project => project.title === name);
        }
        else {
            response = this.projects;
        }
        return response;
    }
    async update(name, data) {
        let response = false;
        this.projects.forEach((project, index) => {
            if (project.title === name) {
                this.projects[index] = data;
                response = true;
            }
        });
        return response;
    }
    async delete(name) {
        let response = false;
        this.projects.forEach((project, index) => {
            if (project.title === name) {
                this.projects.splice(index, 1);
                response = true;
            }
        });
        return response;
    }
    async find(data) {
        let response = false;
        let project = this.projects.find(project => project.title === data.title);
        response = project === undefined ? false : true;
        return response;
    }
}
exports.InMemoryProjectRepository = InMemoryProjectRepository;
