import { expect, test } from "vitest";
import { Formation } from ".";

test('create formation instance',()=>{
    const formation = new Formation({
        description:'',
        links:'',
        mainImage:'',
        title:''
    },{
        pdfImages:""
    });
    expect(formation).toBeInstanceOf(Formation);
})

test('change formation attributes', ()=>{
    const formation = new Formation({
        description:'',
        links:'',
        mainImage:'',
        title:''
    },{
        pdfImages:""
    });
    formation.pdfImages = '../../img';
    expect(formation.pdfImages).toBeTypeOf('string');
    expect(formation.pdfImages).toEqual('../../img');
})