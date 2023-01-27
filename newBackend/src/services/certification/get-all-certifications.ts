import { Certification } from "../../entities/certification";
import { CertificationRepository } from "../../repositories/certification-repository";

interface CertificationRepositoryRequest {
    name: string|undefined;
}

type CertificationRepositoryResponse = Certification[];

export class GetAllCertifications {
    constructor(
        private certificationRepository: CertificationRepository
    ){}

    public async exec({name}:CertificationRepositoryRequest): Promise<CertificationRepositoryResponse> {
        let response: CertificationRepositoryResponse; 
        response = await this.certificationRepository.index(name);
        return response;
    }
}