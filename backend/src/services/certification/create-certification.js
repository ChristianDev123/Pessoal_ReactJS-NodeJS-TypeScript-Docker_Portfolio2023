"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCertification = void 0;
const certification_1 = require("../../entities/certification");
class CreateCertification {
    constructor(certificationRepository) {
        this.certificationRepository = certificationRepository;
    }
    async exec({ description, links, mainImage, title, pdfImages }) {
        let response = false;
        const certification = new certification_1.Certification({
            description,
            mainImage,
            title,
            links
        }, {
            pdfImages
        });
        if (!await this.certificationRepository.find(certification))
            response = await this.certificationRepository.create(certification);
        return response;
    }
}
exports.CreateCertification = CreateCertification;
