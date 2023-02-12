"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formation = void 0;
const Post_1 = require("../Post");
class Formation extends Post_1.Post {
    constructor(attributes, formationAttribute) {
        super(attributes);
        this.formationAttribute = formationAttribute;
    }
    get pdfImages() {
        return this.formationAttribute.pdfImages;
    }
    set pdfImages(value) {
        this.formationAttribute.pdfImages = value;
    }
}
exports.Formation = Formation;
