import { Formation } from "../../entities/formation";
import { FormationRepository } from "../../repositories/formation-repository";

interface FormationRepositoryRequest {
    name: string|undefined;
}

type FormationRepositoryResponse = Formation[];

export class GetAllFormations {
    constructor(
        private formationRepository: FormationRepository
    ){}

    public async exec({name}:FormationRepositoryRequest): Promise<FormationRepositoryResponse> {
        let response: FormationRepositoryResponse; 
        response = await this.formationRepository.index(name);
        return response;
    }
}