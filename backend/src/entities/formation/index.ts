import { Post, PostAttributes } from "../Post";

interface FormationAttribute {
    pdfImages:string;
}

export class Formation extends Post {
    private formationAttribute: FormationAttribute;
    
    constructor(attributes:PostAttributes, formationAttribute: FormationAttribute){
        super(attributes);
        this.formationAttribute = formationAttribute;
    }

    public get pdfImages(){
        return this.formationAttribute.pdfImages;
    }

    public set pdfImages(value:string){
        this.formationAttribute.pdfImages = value;
    }
}