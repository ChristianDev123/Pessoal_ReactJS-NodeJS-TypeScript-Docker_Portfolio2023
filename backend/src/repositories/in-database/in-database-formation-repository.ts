import { Formation } from "../../entities/formation";
import { FormationRepository } from "../formation-repository";

export class InDatabaseFormationRepository implements FormationRepository{
    async create(data: Formation): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async index(title?: string | undefined): Promise<Formation[]> {
        throw new Error("Method not implemented.");
    }
    async update(title: string, data: Formation): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(title: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async find(data: Formation): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}