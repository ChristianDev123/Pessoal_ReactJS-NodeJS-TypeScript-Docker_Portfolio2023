"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadPDF = void 0;
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const mime_1 = __importDefault(require("mime"));
class UploadPDF {
    constructor() {
        this.url = path_1.default.basename('public');
    }
    storage() {
        return multer_1.default.diskStorage({
            destination: (req, file, cb) => {
                if (!fs_1.default.existsSync(this.url))
                    fs_1.default.mkdirSync(this.url);
                cb(null, this.url);
            },
            filename: (req, file, cb) => {
                const type = mime_1.default.getExtension(file.mimetype);
                cb(null, `${new Date().getTime()}.${type}`);
            }
        });
    }
    fileFilter() {
        return (req, file, cb) => {
            const type = mime_1.default.getExtension(file.mimetype);
            const conditions = ["pdf"];
            if (conditions.includes(`${type}`))
                cb(null, true);
            cb(null, false);
        };
    }
    get getConfig() {
        return {
            storage: this.storage(),
            fileFilter: this.fileFilter()
        };
    }
}
exports.UploadPDF = UploadPDF;
