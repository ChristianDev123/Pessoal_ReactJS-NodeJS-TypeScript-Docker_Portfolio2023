import { Certification } from "../entities/certification";

export interface CertificationRepository {
    create(data:Certification): Promise<boolean>;
    index(title?:string): Promise<Certification[]>;
    update(title:string, data:Certification): Promise<boolean>;
    delete(title:string): Promise<boolean>;
    find(data:Certification): Promise<boolean>;
}