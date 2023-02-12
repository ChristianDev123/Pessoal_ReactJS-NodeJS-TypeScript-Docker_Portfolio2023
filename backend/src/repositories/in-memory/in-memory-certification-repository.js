"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryCertificationRepository = void 0;
class InMemoryCertificationRepository {
    constructor() {
        this.certification = [];
    }
    async create(data) {
        let response = false;
        const lengthCertifications = this.certification.length;
        this.certification.push(data);
        if (this.certification.length > lengthCertifications)
            response = true;
        return response;
    }
    async index(title) {
        let response;
        if (title) {
            response = this.certification.filter(Certification => Certification.title === title);
        }
        else {
            response = this.certification;
        }
        return response;
    }
    async update(title, data) {
        let response = false;
        this.certification.forEach((Certification, index) => {
            if (Certification.title === title) {
                this.certification[index] = data;
                response = true;
            }
        });
        return response;
    }
    async delete(title) {
        let response = false;
        this.certification.forEach((Certification, index) => {
            if (Certification.title === title) {
                this.certification.splice(index, 1);
                response = true;
            }
        });
        return response;
    }
    async find(data) {
        let response = false;
        let certification = this.certification.find(Certification => Certification.title === data.title);
        response = certification === undefined ? false : true;
        return response;
    }
}
exports.InMemoryCertificationRepository = InMemoryCertificationRepository;
