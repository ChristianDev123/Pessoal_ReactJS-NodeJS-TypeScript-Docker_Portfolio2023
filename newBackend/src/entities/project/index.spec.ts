import { expect, test } from "vitest";
import { Project } from ".";

test('create project instance',()=>{
    const project = new Project(
        {
            description:"description",
            links:["links","links","links"],
            mainImage:"../../img",
            title:"title"
        },{
            pdfImages:"../../img"
        }
    );
    expect(project).toBeInstanceOf(Project);
    expect(project.pdfImages).toBeTypeOf('string');
    expect(project.pdfImages).equals('../../img')
})

test('change project attributes',()=>{
    const project = new Project(
        {
            description:"description",
            links:["links","links","links"],
            mainImage:"../../img",
            title:"title"
        },{
            pdfImages:"../../img"
        }
    );
    project.pdfImages = '../../test';

    expect(project.pdfImages).toBeTypeOf('string');
    expect(project.pdfImages).toEqual('../../test');
})