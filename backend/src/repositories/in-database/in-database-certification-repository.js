"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InDatabaseCertificationRepository = void 0;
const certification_1 = require("../../entities/certification");
const certification_2 = __importDefault(require("../../models/certification"));
class InDatabaseCertificationRepository {
    async create({ description, links, mainImage, pdfImage, title }) {
        try {
            await certification_2.default.create({
                description,
                links,
                mainImage,
                pdfImage,
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
            let arr = await certification_2.default.findAll(filter);
            response = arr.map((data) => new certification_1.Certification({
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
    async update(titleOld, { description, links, mainImage, pdfImage, title }) {
        try {
            await certification_2.default.update({
                description,
                links,
                mainImage,
                pdfImage,
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
            await certification_2.default.destroy({ where: { title } });
            return true;
        }
        catch (err) {
            if (err)
                console.log(err);
            return false;
        }
    }
    async find({ title, description }) {
        if (await certification_2.default.findOne({ where: { title, description } }))
            return true;
        else
            return false;
    }
}
exports.InDatabaseCertificationRepository = InDatabaseCertificationRepository;
