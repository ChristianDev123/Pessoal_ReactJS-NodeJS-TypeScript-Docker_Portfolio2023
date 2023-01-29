import { Certification } from "../../entities/certification";
import { Formation } from "../../entities/formation";
import { MainSkill } from "../../entities/mainskill";
import { Project } from "../../entities/project";

type argType = Formation | Certification | MainSkill | Project;
type repoType = Formation[] | Certification[] | MainSkill[] | Project[];


export default function ExistenceVerification(data:argType, repositoryArray:repoType):boolean{
    let response: boolean = false;
    repositoryArray.forEach(({title, description})=>{
        if(data.title === title && data.description === description) response = true;
    });
    return response;
}