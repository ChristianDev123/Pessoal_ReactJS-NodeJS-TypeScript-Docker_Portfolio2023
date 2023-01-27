import { Formation } from "../entities/formation";

export interface FormationRepository {
    create(data:Formation): Promise<boolean>;
    index(title?:string): Promise<Formation[]>;
    update(title:string, data:Formation): Promise<boolean>;
    delete(title:string): Promise<boolean>;
    find(data:Formation): Promise<boolean>;
}