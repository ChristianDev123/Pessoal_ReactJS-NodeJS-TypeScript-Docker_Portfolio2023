import { Formation } from "../../entities/formation";
import { FormationRepository } from "../../repositories/formation-repository";

interface CreateFormationRequest {
    description:string;
    links:string[] | string;
    mainImage:string;
    title:string;
    pdfImages:string;
}

export class CreateFormation {
    constructor(
        private formationRepository: FormationRepository
    ){}
   
    public async exec({
        description,
        links,
        mainImage,
        title,
        pdfImages
    }: CreateFormationRequest): Promise<boolean> {
        let response:boolean = false;
        const formation = new Formation({
            description,
            mainImage,
            title,
            links
        },{
            pdfImages
        });
        if(! await this.formationRepository.find(formation))
            response = await this.formationRepository.create(formation);
        return response;
    }
}