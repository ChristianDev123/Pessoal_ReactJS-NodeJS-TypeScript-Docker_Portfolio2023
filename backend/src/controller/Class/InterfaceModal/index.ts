import certifications from "../../../models/certifications";
import formations from "../../../models/formations";
import mainskills from "../../../models/mainskills";
import projects from "../../../models/projects";

const Certifications = certifications();
const Formations = formations();
const MainSkills = mainskills();
const Projects = projects();

export interface IModal{
    save(modal:typeof Certifications):string;
    save(modal:typeof Formations):string;
    save(modal:typeof MainSkills):string;
    save(modal:typeof Projects):string;
}