import { Certification } from "../../entities/certification";
import { CertificationRepository } from "../../repositories/certification-repository";
import ExistenceVerification from "../utils/existence-verification";


export class DeleteCertification {
    constructor(
        private certificationRepository: CertificationRepository
    ){}

    public async exec(data:Certification):Promise<boolean>{
        let response:boolean = false;
        if(ExistenceVerification(data, await this.certificationRepository.index())){
            response = await this.certificationRepository.delete(data.title);
        }
        return response;
    }
}