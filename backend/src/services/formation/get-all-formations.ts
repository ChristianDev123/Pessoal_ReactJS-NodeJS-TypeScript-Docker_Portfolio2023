import { Formation } from "../../entities/formation";
import { FormationRepository } from "../../repositories/formation-repository";

interface FormationRepositoryRequest {
    title: string|undefined;
}

type FormationRepositoryResponse = Formation[];

export class GetAllFormations {
    constructor(
        private formationRepository: FormationRepository
    ){}

    public async exec({title}:FormationRepositoryRequest): Promise<FormationRepositoryResponse> {
        let response: FormationRepositoryResponse; 
        response = await this.formationRepository.index(title);
        return response;
    }
}