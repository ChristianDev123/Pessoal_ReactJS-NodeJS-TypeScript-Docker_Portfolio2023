"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certification = void 0;
const Post_1 = require("../Post");
class Certification extends Post_1.Post {
    constructor(attributes, attributesCertifications) {
        super(attributes);
        this.attributeCertifications = attributesCertifications;
    }
    set pdfImage(time) {
        this.attributeCertifications.pdfImages = time;
    }
    get pdfImage() {
        return this.attributeCertifications.pdfImages;
    }
}
exports.Certification = Certification;
