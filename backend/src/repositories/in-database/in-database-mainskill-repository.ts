import { MainSkill } from "../../entities/mainskill";
import { MainSkillRepository } from "../mainskill-repository";

export class InDatabaseMainSkillRepository implements MainSkillRepository {
    async create(data: MainSkill): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async index(title?: string | undefined): Promise<MainSkill[]> {
        throw new Error("Method not implemented.");
    }
    async update(title: string, data: MainSkill): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(title: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async find(data: MainSkill): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}