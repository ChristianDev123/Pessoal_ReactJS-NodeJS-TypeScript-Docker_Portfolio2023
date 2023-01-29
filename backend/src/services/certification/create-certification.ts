import { Certification } from "../../entities/certification";
import { CertificationRepository } from "../../repositories/certification-repository";

interface CreateCertificationRequest {
    description:string;
    links:string[] | string;
    mainImage:string;
    title:string;
    pdfImages:string;
}

export class CreateCertification {
    constructor(
        private certificationRepository: CertificationRepository
    ){}
   
    public async exec({
        description,
        links,
        mainImage,
        title,
        pdfImages
    }: CreateCertificationRequest): Promise<boolean> {
        let response:boolean = false;
        const certification = new Certification({
            description,
            mainImage,
            title,
            links
        },{
            pdfImages
        });
        if(! await this.certificationRepository.find(certification))
            response = await this.certificationRepository.create(certification);
        return response;
    }
}