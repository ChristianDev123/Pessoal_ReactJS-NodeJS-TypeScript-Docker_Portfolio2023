"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const certification_1 = require("../controllers/certification");
const formation_1 = require("../controllers/formation");
const mainskill_1 = require("../controllers/mainskill");
const project_1 = require("../controllers/project");
const config_1 = __importDefault(require("../config"));
const multer_1 = __importDefault(require("multer"));
const image_1 = require("../middlewares/upload/image");
const pdf_1 = require("../middlewares/upload/pdf");
const uploadImage = new image_1.UploadImage();
const uploadPDF = new pdf_1.UploadPDF();
const route = (0, express_1.Router)();
// stater route
route.get('/config', async (req, res) => {
    config_1.default.sync({ force: true });
    res.status(200).json({ msg: "database created" });
});
// mainskill
route.get('/mainskill', mainskill_1.MainSkillController.index);
route.post('/mainskill', (0, multer_1.default)(uploadImage.getConfig).single('mainImage'), (0, multer_1.default)(uploadPDF.getConfig).single('pdfImages'), mainskill_1.MainSkillController.create);
route.put('/mainskill', (0, multer_1.default)(uploadImage.getConfig).single('mainImage'), (0, multer_1.default)(uploadPDF.getConfig).single('pdfImages'), mainskill_1.MainSkillController.update);
route.delete('/mainskill', mainskill_1.MainSkillController.delete);
// formation
route.get('/formation', formation_1.FormationController.index);
route.post('/formation', (0, multer_1.default)(uploadImage.getConfig).single('mainImage'), (0, multer_1.default)(uploadPDF.getConfig).single('pdfImages'), formation_1.FormationController.create);
route.put('/formation', (0, multer_1.default)(uploadImage.getConfig).single('mainImage'), (0, multer_1.default)(uploadPDF.getConfig).single('pdfImages'), formation_1.FormationController.update);
route.delete('/formation', formation_1.FormationController.delete);
// project
route.get('/project', project_1.ProjectController.index);
route.post('/project', (0, multer_1.default)(uploadImage.getConfig).single('mainImage'), (0, multer_1.default)(uploadPDF.getConfig).single('pdfImages'), project_1.ProjectController.create);
route.put('/project', (0, multer_1.default)(uploadImage.getConfig).single('mainImage'), (0, multer_1.default)(uploadPDF.getConfig).single('pdfImages'), project_1.ProjectController.update);
route.delete('/project', project_1.ProjectController.delete);
// certification
route.get('/certification', certification_1.CertificationController.index);
route.post('/certification', (0, multer_1.default)(uploadImage.getConfig).single('mainImage'), (0, multer_1.default)(uploadPDF.getConfig).single('pdfImages'), certification_1.CertificationController.create);
route.put('/certification', (0, multer_1.default)(uploadImage.getConfig).single('mainImage'), (0, multer_1.default)(uploadPDF.getConfig).single('pdfImages'), certification_1.CertificationController.update);
route.delete('/certification', certification_1.CertificationController.delete);
exports.default = route;
