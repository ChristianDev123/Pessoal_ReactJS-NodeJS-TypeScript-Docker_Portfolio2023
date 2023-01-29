import { expect, test } from "vitest";
import { MainSkill } from ".";

test("instace mainskills",()=>{
    const mainskill = new MainSkill({
        description:'Inicei os estudos em react no curso técnico de desenvolvimento de sistemas, desde então é minha principal tecnologia na construção de interfaces',
        links:['github.com/ChristianDev123'],
        mainImage:'../../img',
        title:'react'
    },{
        timeExperience:'1 ano e 6 meses'
    });

    expect(mainskill).toBeInstanceOf(MainSkill);
    expect(mainskill.links).toBeTypeOf('string');
    expect(mainskill.timeExperience).toBeTypeOf('string');
    expect(mainskill.timeExperience).toEqual('1 ano e 6 meses');
})

test('change attribute timeExperience',()=>{
    const mainskill = new MainSkill({
        description:'Inicei os estudos em react no curso técnico de desenvolvimento de sistemas, desde então é minha principal tecnologia na construção de interfaces',
        links:['github.com/ChristianDev123'],
        mainImage:'../../img',
        title:'react'
    },{
        timeExperience:'1 ano e 6 meses'
    });

    mainskill.timeExperience = '2 anos';
    
    expect(mainskill.timeExperience).toBeTypeOf('string');
    expect(mainskill.timeExperience).toEqual('2 anos');
})