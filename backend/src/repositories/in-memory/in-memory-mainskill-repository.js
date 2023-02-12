"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryMainSkillRepository = void 0;
class InMemoryMainSkillRepository {
    constructor() {
        this.mainskills = [];
    }
    async create(data) {
        let response = false;
        const lengthMainSkills = this.mainskills.length;
        this.mainskills.push(data);
        if (this.mainskills.length > lengthMainSkills)
            response = true;
        return response;
    }
    async index(name) {
        let response;
        if (name) {
            response = this.mainskills.filter(MainSkill => MainSkill.title === name);
        }
        else {
            response = this.mainskills;
        }
        return response;
    }
    async update(name, data) {
        let response = false;
        this.mainskills.forEach((MainSkill, index) => {
            if (MainSkill.title === name) {
                this.mainskills[index] = data;
                response = true;
            }
        });
        return response;
    }
    async delete(name) {
        let response = false;
        this.mainskills.forEach((MainSkill, index) => {
            if (MainSkill.title === name) {
                this.mainskills.splice(index, 1);
                response = true;
            }
        });
        return response;
    }
    async find(data) {
        let response = false;
        let mainskill = this.mainskills.find(MainSkill => MainSkill.title === data.title);
        response = mainskill === undefined ? false : true;
        return response;
    }
}
exports.InMemoryMainSkillRepository = InMemoryMainSkillRepository;
