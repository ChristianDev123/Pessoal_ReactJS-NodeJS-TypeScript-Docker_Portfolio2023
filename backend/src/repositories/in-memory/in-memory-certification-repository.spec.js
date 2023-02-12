"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const certification_1 = require("../../entities/certification");
const in_memory_certification_repository_1 = require("./in-memory-certification-repository");
(0, vitest_1.test)('create InMemoryCertification instance', () => {
    const certMemory = new in_memory_certification_repository_1.InMemoryCertificationRepository();
    (0, vitest_1.expect)(certMemory).toBeInstanceOf(in_memory_certification_repository_1.InMemoryCertificationRepository);
});
(0, vitest_1.test)('Testing InMemoryCertification create method', async () => {
    const certMemory = new in_memory_certification_repository_1.InMemoryCertificationRepository();
    const certification = new certification_1.Certification({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    const createRes = await certMemory.create(certification);
    (0, vitest_1.expect)(createRes).toBeTruthy();
});
(0, vitest_1.test)("Testing InMemoryCertification index method, all datas", async () => {
    const certMemory = new in_memory_certification_repository_1.InMemoryCertificationRepository();
    const certification = new certification_1.Certification({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    await certMemory.create(certification);
    await certMemory.create(certification);
    const allData = await certMemory.index();
    (0, vitest_1.expect)(allData.length).toEqual(2);
});
(0, vitest_1.test)("Testing InMemoryCertification index method, just one data", async () => {
    const certMemory = new in_memory_certification_repository_1.InMemoryCertificationRepository();
    const certification = new certification_1.Certification({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    const certification1 = new certification_1.Certification({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        pdfImages: "images.pdf",
    });
    await certMemory.create(certification);
    await certMemory.create(certification1);
    const allData = await certMemory.index();
    (0, vitest_1.expect)(allData.length).toEqual(2);
});
(0, vitest_1.test)("Testing InMemoryCertification update method", async () => {
    const certMemory = new in_memory_certification_repository_1.InMemoryCertificationRepository();
    const certification = new certification_1.Certification({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    const certification1 = new certification_1.Certification({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        pdfImages: "images.pdf",
    });
    await certMemory.create(certification);
    await certMemory.update('test title', certification1);
    const allData = await certMemory.index();
    (0, vitest_1.expect)(allData.length).toEqual(1);
    (0, vitest_1.expect)(allData[0].title).toEqual('title2');
});
(0, vitest_1.test)("Testing InMemoryCertification delete method", async () => {
    const certMemory = new in_memory_certification_repository_1.InMemoryCertificationRepository();
    const certification = new certification_1.Certification({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    const certification1 = new certification_1.Certification({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        pdfImages: "images.pdf",
    });
    await certMemory.create(certification);
    await certMemory.create(certification1);
    const response = await certMemory.delete("test title");
    const allData = await certMemory.index();
    (0, vitest_1.expect)(response).toBeTruthy();
    (0, vitest_1.expect)(allData.length).toEqual(1);
    (0, vitest_1.expect)(allData[0].title).toEqual('title2');
});
(0, vitest_1.test)("Testing InMemoryCertification find method", async () => {
    const certMemory = new in_memory_certification_repository_1.InMemoryCertificationRepository();
    const certification = new certification_1.Certification({
        description: "description",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "test title"
    }, {
        pdfImages: "images.pdf",
    });
    const certification1 = new certification_1.Certification({
        description: "other test",
        links: ["link1", "link2", "link3"],
        mainImage: "main.png",
        title: "title2"
    }, {
        pdfImages: "images.pdf",
    });
    await certMemory.create(certification);
    await certMemory.create(certification1);
    const response = await certMemory.find(certification);
    (0, vitest_1.expect)(response).toBeTruthy();
});
