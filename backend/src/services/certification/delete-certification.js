"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCertification = void 0;
const existence_verification_1 = __importDefault(require("../utils/existence-verification"));
class DeleteCertification {
    constructor(certificationRepository) {
        this.certificationRepository = certificationRepository;
    }
    async exec(data) {
        let response = false;
        if ((0, existence_verification_1.default)(data, await this.certificationRepository.index('undefined'))) {
            response = await this.certificationRepository.delete(data.title);
        }
        return response;
    }
}
exports.DeleteCertification = DeleteCertification;
