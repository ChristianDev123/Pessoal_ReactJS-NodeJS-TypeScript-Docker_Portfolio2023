import { Formation } from "../../entities/formation";
import { FormationRepository } from "../formation-repository";

export class InMemoryFormationRepository implements FormationRepository {
    public formation: Formation[] = [];

    public async create(data:Formation): Promise<boolean>{
        let response: boolean = false;
        const lengthFormations = this.formation.length;
        this.formation.push(data);
        if(this.formation.length > lengthFormations) response = true;
        return response;
    }

    public async index(name?:string): Promise<Formation[]>{
        let response: Formation[];
        if(name) {
            response = this.formation.filter(Formation => Formation.title === name);
        }
        else {
            response = this.formation;
        }
        return response;
    }

    public async update(name:string, data:Formation): Promise<boolean>{
        let response: boolean = false;
        this.formation.forEach((Formation, index) =>{
            if(Formation.title === name){
                this.formation[index] = data;
                response = true;
            }
        });
        return response;
    }

    public async delete(name:string): Promise<boolean>{
        let response: boolean = false;
        this.formation.forEach((Formation, index) =>{
            if(Formation.title === name){
                this.formation.splice(index, 1);
                response =true;
            }
        });
        return response;
    }
    
    public async find(data:Formation): Promise<boolean>{
        let response: boolean = false;
        let formation: Formation | undefined = this.formation.find(Formation => Formation.title === data.title);
        response = formation === undefined ? false : true;
        return response; 
    }
}