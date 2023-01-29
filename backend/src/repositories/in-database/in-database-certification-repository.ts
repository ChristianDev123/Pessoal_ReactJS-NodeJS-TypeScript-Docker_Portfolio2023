import { Certification } from "../../entities/certification";
import { CertificationRepository } from "../certification-repository";

export class InDatabaseCertificationRepository implements CertificationRepository {
    async create(data: Certification): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async index(title?: string | undefined): Promise<Certification[]> {
        throw new Error("Method not implemented.");
    }
    
    async update(title: string, data: Certification): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
    async delete(title: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
    async find(data: Certification): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}