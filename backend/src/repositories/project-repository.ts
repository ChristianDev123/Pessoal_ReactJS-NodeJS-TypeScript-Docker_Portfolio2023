import { Project } from "../entities/project";

export interface ProjectRepository {
    create(data:Project): Promise<boolean>;
    index(title?:string): Promise<Project[]>;
    update(title:string, data:Project): Promise<boolean>;
    delete(title:string): Promise<boolean>;
    find(data:Project): Promise<boolean>;
}