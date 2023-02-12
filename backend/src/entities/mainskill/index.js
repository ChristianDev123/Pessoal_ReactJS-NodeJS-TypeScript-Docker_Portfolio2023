"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSkill = void 0;
const Post_1 = require("../Post");
class MainSkill extends Post_1.Post {
    constructor(attributes, attributesCertifications) {
        super(attributes);
        this.attributeCertifications = attributesCertifications;
    }
    set timeExperience(time) {
        this.attributeCertifications.timeExperience = time;
    }
    get timeExperience() {
        return this.attributeCertifications.timeExperience;
    }
}
exports.MainSkill = MainSkill;
