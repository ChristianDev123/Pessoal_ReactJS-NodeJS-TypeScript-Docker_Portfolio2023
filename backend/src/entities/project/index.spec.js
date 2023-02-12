"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const _1 = require(".");
(0, vitest_1.test)('create project instance', () => {
    const project = new _1.Project({
        description: "description",
        links: ["links", "links", "links"],
        mainImage: "../../img",
        title: "title"
    }, {
        pdfImages: "../../img"
    });
    (0, vitest_1.expect)(project).toBeInstanceOf(_1.Project);
    (0, vitest_1.expect)(project.pdfImages).toBeTypeOf('string');
    (0, vitest_1.expect)(project.pdfImages).equals('../../img');
});
(0, vitest_1.test)('change project attributes', () => {
    const project = new _1.Project({
        description: "description",
        links: ["links", "links", "links"],
        mainImage: "../../img",
        title: "title"
    }, {
        pdfImages: "../../img"
    });
    project.pdfImages = '../../test';
    (0, vitest_1.expect)(project.pdfImages).toBeTypeOf('string');
    (0, vitest_1.expect)(project.pdfImages).toEqual('../../test');
});
