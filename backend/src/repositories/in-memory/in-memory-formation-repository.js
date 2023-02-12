"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryFormationRepository = void 0;
class InMemoryFormationRepository {
    constructor() {
        this.formation = [];
    }
    async create(data) {
        let response = false;
        const lengthFormations = this.formation.length;
        this.formation.push(data);
        if (this.formation.length > lengthFormations)
            response = true;
        return response;
    }
    async index(name) {
        let response;
        if (name) {
            response = this.formation.filter(Formation => Formation.title === name);
        }
        else {
            response = this.formation;
        }
        return response;
    }
    async update(name, data) {
        let response = false;
        this.formation.forEach((Formation, index) => {
            if (Formation.title === name) {
                this.formation[index] = data;
                response = true;
            }
        });
        return response;
    }
    async delete(name) {
        let response = false;
        this.formation.forEach((Formation, index) => {
            if (Formation.title === name) {
                this.formation.splice(index, 1);
                response = true;
            }
        });
        return response;
    }
    async find(data) {
        let response = false;
        let formation = this.formation.find(Formation => Formation.title === data.title);
        response = formation === undefined ? false : true;
        return response;
    }
}
exports.InMemoryFormationRepository = InMemoryFormationRepository;
