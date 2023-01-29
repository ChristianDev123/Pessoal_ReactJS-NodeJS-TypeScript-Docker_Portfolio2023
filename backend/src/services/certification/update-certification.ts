import { Certification } from "../../entities/certification";
import { CertificationRepository } from "../../repositories/certification-repository";
import ExistenceVerification from "../utils/existence-verification";

export class UpdateCertification {
    constructor(
        private certificationRepository: CertificationRepository
    ){}

    public async exec(oldData:Certification, newData: Certification):Promise<boolean>{
        let response: boolean = false;
        if(ExistenceVerification(oldData, await this.certificationRepository.index())){
            response = await this.certificationRepository.update(oldData.title, newData);
        }
        return response;
    }
};