"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormationController = void 0;
const formation_1 = require("../../entities/formation");
const in_database_formation_repository_1 = require("../../repositories/in-database/in-database-formation-repository");
const create_formation_1 = require("../../services/formation/create-formation");
const delete_formation_1 = require("../../services/formation/delete-formation");
const get_all_formations_1 = require("../../services/formation/get-all-formations");
const update_formations_1 = require("../../services/formation/update-formations");
const formationRepository = new in_database_formation_repository_1.InDatabaseFormationRepository();
class FormationController {
    static async index(req, res) {
        let { title } = req.query;
        title = String(title);
        let response = [];
        const formationList = new get_all_formations_1.GetAllFormations(formationRepository);
        response = await formationList.exec({ title });
        if (response.length > 0)
            res.status(200).json(response);
        else
            res.status(404).json(response);
    }
    static async create(req, res) {
        const { description, links, mainImage, title, pdfImages } = req.body;
        let response = false;
        const createFormation = new create_formation_1.CreateFormation(formationRepository);
        response = await createFormation.exec({
            description,
            links,
            mainImage,
            title,
            pdfImages
        });
        if (response)
            res.status(201).json({ created: true });
        else
            res.status(501).json({ created: false });
    }
    static async update(req, res) {
        let { oldData, newData } = req.body;
        oldData = JSON.stringify(oldData);
        newData = JSON.stringify(newData);
        oldData = JSON.parse(oldData);
        newData = JSON.parse(newData);
        let response = false;
        const updateFormation = new update_formations_1.UpdateFormation(formationRepository);
        const OldData = new formation_1.Formation({
            description: oldData.description,
            links: oldData.links,
            mainImage: oldData.mainImage,
            title: oldData.title,
        }, {
            pdfImages: oldData.pdfImages
        });
        const NewData = new formation_1.Formation({
            description: newData.description,
            links: newData.links,
            mainImage: newData.mainImage,
            title: newData.title,
        }, {
            pdfImages: newData.pdfImages
        });
        response = await updateFormation.exec(OldData, NewData);
        if (response)
            res.status(200).json({ changed: true });
        else
            res.status(304).json({ changed: false });
    }
    static async delete(req, res) {
        let { title } = req.query;
        title = String(title);
        let response = false;
        const getFormation = new get_all_formations_1.GetAllFormations(formationRepository);
        const deleteFormation = new delete_formation_1.DeleteFormation(formationRepository);
        const formationToDelete = await getFormation.exec({ title });
        response = await deleteFormation.exec(formationToDelete[0]);
        if (response)
            res.status(204).json({ excluded: true });
        else
            res.status(500).json({ excluded: false });
    }
}
exports.FormationController = FormationController;
