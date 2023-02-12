"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const _1 = require(".");
(0, vitest_1.test)('instance certification', () => {
    const certification = new _1.Certification({
        description: "testes",
        links: ['link', 'link2', 'link3'],
        mainImage: 'testes',
        title: 'teste'
    }, {
        pdfImages: 'teste'
    });
    (0, vitest_1.expect)(certification).toBeInstanceOf(_1.Certification);
    (0, vitest_1.expect)(certification.description).toEqual('testes');
    (0, vitest_1.expect)(certification.links).toBeTypeOf("string");
});
(0, vitest_1.test)('change pdfImage', () => {
    const certification = new _1.Certification({
        description: "testes",
        links: ['link', 'link2', 'link3'],
        mainImage: 'testes',
        title: 'teste'
    }, {
        pdfImages: 'teste'
    });
    certification.pdfImage = 'teste3';
    (0, vitest_1.expect)(certification.pdfImage).toBeTypeOf('string');
    (0, vitest_1.expect)(certification.pdfImage).toEqual('teste3');
});
