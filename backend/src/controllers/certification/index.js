"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificationController = void 0;
const get_all_certifications_1 = require("../../services/certification/get-all-certifications");
const update_certification_1 = require("../../services/certification/update-certification");
const delete_certification_1 = require("../../services/certification/delete-certification");
const in_database_certification_repository_1 = require("../../repositories/in-database/in-database-certification-repository");
const certification_1 = require("../../entities/certification");
const certificationRepository = new in_database_certification_repository_1.InDatabaseCertificationRepository();
class CertificationController {
    static async index(req, res) {
        let { title } = req.query;
        title = String(title);
        let response;
        const getAllCertification = new get_all_certifications_1.GetAllCertifications(certificationRepository);
        response = await getAllCertification.exec({ title });
        if (response.length > 0)
            res.status(200).json(response);
        else
            res.status(404).json(response);
    }
    static async create(req, res) {
        console.log(req.file);
        console.log(req.files);
        /*
        let { description, links, mainImage, pdfImages, title } = req.body;
        let response:boolean = false;
        const createCertification = new CreateCertification(certificationRepository);
        response = await createCertification.exec({ description, links, mainImage, pdfImages, title });
        if(response) res.status(201).json({created:true});
        else res.status(501).json({created:false});*/
    }
    static async update(req, res) {
        let response = false;
        let { oldData, newData } = req.body;
        oldData = JSON.stringify(oldData);
        newData = JSON.stringify(newData);
        oldData = JSON.parse(oldData);
        newData = JSON.parse(newData);
        const updateCertification = new update_certification_1.UpdateCertification(certificationRepository);
        oldData = new certification_1.Certification({
            description: oldData.description,
            links: oldData.links,
            mainImage: oldData.mainImage,
            title: oldData.title
        }, {
            pdfImages: oldData.pdfImage
        });
        newData = new certification_1.Certification({
            description: newData.description,
            links: newData.links,
            mainImage: req.file?.path || '',
            title: newData.title
        }, {
            pdfImages: newData.pdfImages
        });
        response = await updateCertification.exec(oldData, newData);
        if (response)
            res.status(200).json({ changed: true });
        else
            res.status(304).json({ changed: false });
    }
    static async delete(req, res) {
        let { title } = req.query;
        title = String(title);
        let response = false;
        const deleteCertification = new delete_certification_1.DeleteCertification(certificationRepository);
        const getAllCertification = new get_all_certifications_1.GetAllCertifications(certificationRepository);
        const certificationToDelete = await getAllCertification.exec({ title });
        response = await deleteCertification.exec(certificationToDelete[0]);
        if (response)
            res.status(204).json({ excluded: true });
        else
            res.status(500).json({ excluded: false });
    }
}
exports.CertificationController = CertificationController;
