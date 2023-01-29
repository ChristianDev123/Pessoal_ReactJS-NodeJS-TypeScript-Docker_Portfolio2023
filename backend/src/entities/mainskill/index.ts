import { Post, PostAttributes } from "../Post";

interface AttributeCertifications {
    timeExperience:string;
}

export class MainSkill extends Post {
    private attributeCertifications: AttributeCertifications;

    constructor(attributes:PostAttributes, attributesCertifications:AttributeCertifications){
        super(attributes);
        this.attributeCertifications = attributesCertifications;
    }

    public set timeExperience(time: string){
        this.attributeCertifications.timeExperience = time;
    }

    public get timeExperience(){
        return this.attributeCertifications.timeExperience;
    }
}