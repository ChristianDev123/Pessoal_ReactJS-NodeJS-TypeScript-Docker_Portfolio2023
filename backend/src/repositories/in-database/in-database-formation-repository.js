"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InDatabaseFormationRepository = void 0;
const formation_1 = require("../../entities/formation");
const formation_2 = __importDefault(require("../../models/formation"));
class InDatabaseFormationRepository {
    async create({ description, links, mainImage, pdfImages, title }) {
        try {
            await formation_2.default.create({
                description,
                links,
                mainImage,
                pdfImages,
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
            const filter = title !== "undefined" ? { where: { title } } : {};
            let arr = await formation_2.default.findAll(filter);
            response = arr.map((data) => new formation_1.Formation({
                description: String(data.get("description")),
                links: String(data.get("links")),
                mainImage: String(data.get("mainImage")),
                title: String(data.get("title"))
            }, {
                pdfImages: String(data.get("pdfImages"))
            }));
            return response;
        }
        catch (err) {
            if (err)
                console.log(err);
            return [];
        }
    }
    async update(titleOld, { description, links, mainImage, pdfImages, title }) {
        try {
            await formation_2.default.update({
                description,
                links,
                mainImage,
                pdfImages,
                title
            }, {
                where: { title: titleOld }
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
            await formation_2.default.destroy({ where: { title } });
            return true;
        }
        catch (err) {
            if (err)
                console.log(err);
            return false;
        }
    }
    async find({ title, description }) {
        if (await formation_2.default.findOne({ where: { title, description } }))
            return true;
        else
            return false;
    }
}
exports.InDatabaseFormationRepository = InDatabaseFormationRepository;
