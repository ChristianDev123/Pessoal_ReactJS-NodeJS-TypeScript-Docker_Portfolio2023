import { Post, PostAttributes } from "../Post";

interface AttributeCertifications {
    pdfImages:string;
}

export class Certification extends Post {
    private attributeCertifications: AttributeCertifications;

    constructor(attributes:PostAttributes, attributesCertifications:AttributeCertifications){
        super(attributes);
        this.attributeCertifications = attributesCertifications;
    }

    public set pdfImage(time: string){
        this.attributeCertifications.pdfImages= time;
    }

    public get pdfImage(){
        return this.attributeCertifications.pdfImages;
    }
}