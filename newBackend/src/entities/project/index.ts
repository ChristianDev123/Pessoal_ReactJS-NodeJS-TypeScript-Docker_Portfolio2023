import { Post, PostAttributes } from "../Post";

interface ProjectAttributes {
    pdfImages:string;
}

export class Project extends Post {
    private projectAttributes: ProjectAttributes;
    
    constructor(attributes:PostAttributes, projectAttributes: ProjectAttributes){
        super(attributes);
        this.projectAttributes = projectAttributes
    }

    public get pdfImages(){
        return this.projectAttributes.pdfImages;
    }

    public set pdfImages(value:string){
        this.projectAttributes.pdfImages = value;
    }
}