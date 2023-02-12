"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSkillController = void 0;
const in_database_mainskill_repository_1 = require("../../repositories/in-database/in-database-mainskill-repository");
const create_mainskill_1 = require("../../services/mainskill/create-mainskill");
const delete_mainskill_1 = require("../../services/mainskill/delete-mainskill");
const get_all_mainskills_1 = require("../../services/mainskill/get-all-mainskills");
const update_mainskill_1 = require("../../services/mainskill/update-mainskill");
const mainskill_1 = require("../../entities/mainskill");
const mainSkillRepository = new in_database_mainskill_repository_1.InDatabaseMainSkillRepository();
class MainSkillController {
    static async index(req, res) {
        let { title } = req.query;
        title = String(title);
        let response = [];
        const mainSkillList = new get_all_mainskills_1.GetAllMainSkills(mainSkillRepository);
        response = await mainSkillList.exec({ title });
        if (response.length > 0)
            res.status(200).json(response);
        else
            res.status(404).json(response);
    }
    static async create(req, res) {
        const { description, links, mainImage, title, timeExperience } = req.body;
        let response = false;
        const createMainSkill = new create_mainskill_1.CreateMainSkill(mainSkillRepository);
        response = await createMainSkill.exec({
            description,
            links,
            mainImage,
            title,
            timeExperience
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
        oldData = new mainskill_1.MainSkill({
            description: oldData.description,
            links: oldData.links,
            mainImage: oldData.mainImage,
            title: oldData.title
        }, {
            timeExperience: oldData.timeExperience
        });
        newData = new mainskill_1.MainSkill({
            description: newData.description,
            links: newData.links,
            mainImage: newData.mainImage,
            title: newData.title
        }, {
            timeExperience: newData.timeExperience
        });
        let response = false;
        const updateMainSkill = new update_mainskill_1.UpdateMainSkill(mainSkillRepository);
        response = await updateMainSkill.exec(oldData, newData);
        if (response)
            res.status(200).json({ changed: true });
        else
            res.status(304).json({ changed: false });
    }
    static async delete(req, res) {
        let { title } = req.query;
        title = String(title);
        let response = false;
        const deleteMainSkill = new delete_mainskill_1.DeleteMainSkill(mainSkillRepository);
        const getAllMainSkill = new get_all_mainskills_1.GetAllMainSkills(mainSkillRepository);
        const mainSkillToDelete = await getAllMainSkill.exec({ title });
        response = await deleteMainSkill.exec(mainSkillToDelete[0]);
        if (response)
            res.status(200).json({ excluded: true });
        else
            res.status(500).json({ excluded: false });
    }
}
exports.MainSkillController = MainSkillController;
