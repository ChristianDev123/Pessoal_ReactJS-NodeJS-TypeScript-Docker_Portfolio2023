import { Certification } from "../../entities/certification";
import { CertificationRepository } from "../certification-repository";

export class InMemoryCertificationRepository implements CertificationRepository {
    public certification: Certification[] = [];

    public async create(data:Certification): Promise<boolean>{
        let response: boolean = false;
        const lengthCertifications = this.certification.length;
        this.certification.push(data);
        if(this.certification.length > lengthCertifications) response = true;
        return response;
    }

    public async index(title?:string): Promise<Certification[]>{
        let response: Certification[];
        if(title) {
            response = this.certification.filter(Certification => Certification.title === title);
        }
        else {
            response = this.certification;
        }
        return response;
    }

    public async update(title:string, data:Certification): Promise<boolean>{
        let response: boolean = false;
        this.certification.forEach((Certification, index) =>{
            if(Certification.title === title){
                this.certification[index] = data;
                response = true;
            }
        });
        return response;
    }

    public async delete(title:string): Promise<boolean>{
        let response: boolean = false;
        this.certification.forEach((Certification, index) =>{
            if(Certification.title === title){
                this.certification.splice(index, 1);
                response = true;
            }
        });
        return response;
    }
    
    public async find(data:Certification): Promise<boolean>{
        let response: boolean = false;
        let certification: Certification | undefined = this.certification.find(Certification => Certification.title === data.title);
        response = certification === undefined ? false : true;
        return response; 
    }
}