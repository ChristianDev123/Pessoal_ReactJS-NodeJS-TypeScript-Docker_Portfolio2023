import { expect, test } from 'vitest';
import { Certification } from '.';

test('instance certification',()=>{
    const certification = new Certification({
        description:"testes",
        links:['link','link2','link3'],
        mainImage:'testes',
        title:'teste'
    },{
        pdfImages:'teste'
    });
    expect(certification).toBeInstanceOf(Certification);
    expect(certification.description).toEqual('testes');
    expect(certification.links).toBeTypeOf("string");
})

test('change pdfImage',()=>{
    const certification = new Certification({
        description:"testes",
        links:['link','link2','link3'],
        mainImage:'testes',
        title:'teste'
    },{
        pdfImages:'teste'
    });

    certification.pdfImage = 'teste3';

    expect(certification.pdfImage).toBeTypeOf('string');
    expect(certification.pdfImage).toEqual('teste3');  
})