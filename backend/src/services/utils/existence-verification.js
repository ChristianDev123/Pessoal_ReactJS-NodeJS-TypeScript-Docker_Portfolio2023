"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ExistenceVerification(data, repositoryArray) {
    let response = false;
    repositoryArray.forEach(({ title, description }) => {
        if (data.title === title && data.description === description)
            response = true;
    });
    return response;
}
exports.default = ExistenceVerification;
