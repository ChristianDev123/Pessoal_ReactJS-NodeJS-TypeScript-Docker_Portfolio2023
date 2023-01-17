import certifications from "../../../models/certifications";
import formations from "../../../models/formations";
import mainskills from "../../../models/mainskills";
import projects from "../../../models/projects";

const Certifications = certifications();
const Formations = formations();
const MainSkills = mainskills();
const Projects = projects();

export interface IModal{
    save(modal:typeof Certifications):number;
    save(modal:typeof Formations):number;
    save(modal:typeof MainSkills):number;
    save(modal:typeof Projects):number;
}