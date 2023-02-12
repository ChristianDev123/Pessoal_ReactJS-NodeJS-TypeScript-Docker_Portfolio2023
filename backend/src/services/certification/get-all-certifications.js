"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCertifications = void 0;
class GetAllCertifications {
    constructor(certificationRepository) {
        this.certificationRepository = certificationRepository;
    }
    async exec({ title }) {
        let response;
        response = await this.certificationRepository.index(title);
        return response;
    }
}
exports.GetAllCertifications = GetAllCertifications;
