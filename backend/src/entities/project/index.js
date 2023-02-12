"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const Post_1 = require("../Post");
class Project extends Post_1.Post {
    constructor(attributes, projectAttributes) {
        super(attributes);
        this.projectAttributes = projectAttributes;
    }
    get pdfImages() {
        return this.projectAttributes.pdfImages;
    }
    set pdfImages(value) {
        this.projectAttributes.pdfImages = value;
    }
}
exports.Project = Project;
