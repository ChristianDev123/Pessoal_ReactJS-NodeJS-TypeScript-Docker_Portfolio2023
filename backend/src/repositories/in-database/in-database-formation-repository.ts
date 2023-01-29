import { Formation } from "../../entities/formation";
import FormationTable from "../../models/formation";
import { FormationRepository } from "../formation-repository";
const formationTable = new FormationTable();
const formEstructure = formationTable.estructure();

export class InDatabaseFormationRepository implements FormationRepository{
    async create({ description, links, mainImage, pdfImages, title }: Formation): Promise<boolean> {
        try{
            await formEstructure.create({
                description,
                links,
                mainImage,
                pdfImages,
                title
            })
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }

    async index(title?: string | undefined): Promise<Formation[]> {
        try{
            return formEstructure.findAll(title&&{where:{title}});
        }catch(err){
            if(err) console.log(err);
            return [];
        }
    }
    
    async update(titleOld: string, { description, links, mainImage, pdfImages, title}: Formation): Promise<boolean> {
        try{
            await formEstructure.update({
                description,
                links,
                mainImage,
                pdfImages,
                title
            },{
                where:{titleOld}
            })
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }
    
    async delete(title: string): Promise<boolean> {
        try{
            await formEstructure.destroy({where:{title}});
            return true;
        }catch(err){
            if(err) console.log(err);
            return false;
        }
    }
    
    async find({title, description}: Formation): Promise<boolean> {
        if(await formEstructure.find({where:{title,description}})) return true;
        else return false;
    }

}