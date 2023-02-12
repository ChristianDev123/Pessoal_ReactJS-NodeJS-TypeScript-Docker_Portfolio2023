"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const _1 = require(".");
(0, vitest_1.test)("instace mainskills", () => {
    const mainskill = new _1.MainSkill({
        description: 'Inicei os estudos em react no curso técnico de desenvolvimento de sistemas, desde então é minha principal tecnologia na construção de interfaces',
        links: ['github.com/ChristianDev123'],
        mainImage: '../../img',
        title: 'react'
    }, {
        timeExperience: '1 ano e 6 meses'
    });
    (0, vitest_1.expect)(mainskill).toBeInstanceOf(_1.MainSkill);
    (0, vitest_1.expect)(mainskill.links).toBeTypeOf('string');
    (0, vitest_1.expect)(mainskill.timeExperience).toBeTypeOf('string');
    (0, vitest_1.expect)(mainskill.timeExperience).toEqual('1 ano e 6 meses');
});
(0, vitest_1.test)('change attribute timeExperience', () => {
    const mainskill = new _1.MainSkill({
        description: 'Inicei os estudos em react no curso técnico de desenvolvimento de sistemas, desde então é minha principal tecnologia na construção de interfaces',
        links: ['github.com/ChristianDev123'],
        mainImage: '../../img',
        title: 'react'
    }, {
        timeExperience: '1 ano e 6 meses'
    });
    mainskill.timeExperience = '2 anos';
    (0, vitest_1.expect)(mainskill.timeExperience).toBeTypeOf('string');
    (0, vitest_1.expect)(mainskill.timeExperience).toEqual('2 anos');
});
