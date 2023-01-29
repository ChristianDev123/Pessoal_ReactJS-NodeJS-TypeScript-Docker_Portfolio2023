import { Project } from "../../entities/project";
import { ProjectRepository } from "../project-repository";

export class InDatabaseProjectRepository implements ProjectRepository {
    async create(data: Project): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async index(title?: string | undefined): Promise<Project[]> {
        throw new Error("Method not implemented.");
    }
    async update(title: string, data: Project): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(title: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async find(data: Project): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}