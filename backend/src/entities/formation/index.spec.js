"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const _1 = require(".");
(0, vitest_1.test)('create formation instance', () => {
    const formation = new _1.Formation({
        description: '',
        links: '',
        mainImage: '',
        title: ''
    }, {
        pdfImages: ""
    });
    (0, vitest_1.expect)(formation).toBeInstanceOf(_1.Formation);
});
(0, vitest_1.test)('change formation attributes', () => {
    const formation = new _1.Formation({
        description: '',
        links: '',
        mainImage: '',
        title: ''
    }, {
        pdfImages: ""
    });
    formation.pdfImages = '../../img';
    (0, vitest_1.expect)(formation.pdfImages).toBeTypeOf('string');
    (0, vitest_1.expect)(formation.pdfImages).toEqual('../../img');
});
