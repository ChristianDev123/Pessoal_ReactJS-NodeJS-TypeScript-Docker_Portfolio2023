"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InDatabaseMainSkillRepository = void 0;
const mainskill_1 = require("../../entities/mainskill");
const mainskill_2 = __importDefault(require("../../models/mainskill"));
class InDatabaseMainSkillRepository {
    async create({ description, links, mainImage, timeExperience, title }) {
        try {
            await mainskill_2.default.create({
                description,
                links,
                mainImage,
                timeExperience,
                title
            });
            return true;
        }
        catch (err) {
            if (err)
                console.log(err);
            return false;
        }
    }
    async index(title) {
        try {
            let response;
            const filter = title !== 'undefined' ? { where: { title } } : {};
            let arr = await mainskill_2.default.findAll(filter);
            response = arr.map((data) => new mainskill_1.MainSkill({
                description: String(data.get("description")),
                links: String(data.get("links")),
                mainImage: String(data.get("mainImage")),
                title: String(data.get("title"))
            }, {
                timeExperience: String(data.get("timeExperience"))
            }));
            return response;
        }
        catch (err) {
            if (err)
                console.log(err);
            return [];
        }
    }
    async update(titleOld, { description, links, mainImage, timeExperience, title }) {
        try {
            await mainskill_2.default.update({
                description,
                links,
                mainImage,
                timeExperience,
                title
            }, {
                where: { title: titleOld },
                limit: 1
            });
            return true;
        }
        catch (err) {
            if (err)
                console.log(err);
            return false;
        }
    }
    async delete(title) {
        try {
            await mainskill_2.default.destroy({ where: { title }, limit: 1 });
            return true;
        }
        catch (err) {
            if (err)
                console.log(err);
            return false;
        }
    }
    async find({ title, description }) {
        if (await mainskill_2.default.findOne({ where: { title, description } }))
            return true;
        else
            return false;
    }
}
exports.InDatabaseMainSkillRepository = InDatabaseMainSkillRepository;
