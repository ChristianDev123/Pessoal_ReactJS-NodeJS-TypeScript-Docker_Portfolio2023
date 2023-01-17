import { IModal } from "./InterfaceModal";
import certifications from "../../models/certifications";
import formations from "../../models/formations";
import mainskills from "../../models/mainskills";
import projects from "../../models/projects";

const Certifications = certifications();
const Formations = formations();
const MainSkills = mainskills();
const Projects = projects();

export abstract class Post implements IModal {
    protected mainImage:string;
    protected title: string;
    protected description:string;
    protected links:string;

    constructor( 
        mainImage:string,
        title:string,
        description:string,
        links:string
    ){
        this.mainImage = mainImage;
        this.title = title;
        this.description = description;
        this.links = links;
    }

    public abstract save(modal:typeof Certifications):number;
    public abstract save(modal:typeof Formations):number;
    public abstract save(modal:typeof MainSkills):number;
    public abstract save(modal:typeof Projects):number;
    

    protected get MainImage(){
        return this.mainImage;
    }

    protected set MainImage(value:string){
        this.mainImage = value;
    }

    protected get Title(){
        return this.title;
    }

    protected set Title(value:string){
        this.title = value;
    }

    protected get Description(){
        return this.description;
    }

    protected set Description(value:string){
        this.description = value;   
    }

    protected get Links(){
        return this.links;
    }

    protected set Links(value:string){
        this.links = value;
    }
}