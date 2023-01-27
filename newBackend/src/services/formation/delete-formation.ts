import { Formation } from "../../entities/formation";
import { FormationRepository } from "../../repositories/formation-repository";
import ExistenceVerification from "../utils/existence-verification";


export class DeleteFormation {
    constructor(
        private formationRepository: FormationRepository
    ){}

    public async exec(data:Formation):Promise<boolean>{
        let response:boolean = false;
        if(ExistenceVerification(data, await this.formationRepository.index())){
            response = await this.formationRepository.delete(data.title);
        }
        return response;
    }
}