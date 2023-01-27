import { Formation } from "../../entities/formation";
import { FormationRepository } from "../../repositories/formation-repository";
import ExistenceVerification from "../utils/existence-verification";

export class UpdateFormation {
    constructor(
        private formationRepository: FormationRepository
    ){}

    public async exec(oldData:Formation, newData: Formation):Promise<boolean>{
        let response: boolean = false;
        if(ExistenceVerification(oldData, await this.formationRepository.index())){
            response = await this.formationRepository.update(oldData.title, newData);
        }
        return response;
    }
};