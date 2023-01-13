import projects from "../../../models/projects";
import { Post } from "../Post";
const ProjectsModel = projects();

export class Projects extends Post {
    private pdfImages : string;

    constructor(
        mainImage:string,
        title:string,
        description:string,
        links:string,
        pdfImages:string,
    ){
        super(mainImage, title, description, links);
        this.pdfImages = pdfImages;
    }

    public save(model:typeof ProjectsModel ): string {
        try{
            const obj = {
                mainImage:this.MainImage,
                title:this.Title,
                description:this.Description,
                links:this.Links,
                pdfImages:this.pdfImages,
            }
            model.create(obj);
            return '[Sucess] New Skill add sucessfully';
        }
        catch{
            return "[ERROR] Can't save this skill";   
        }
    }

    protected get PdfImages(){
        return this.pdfImages;
    }

    protected set PdfImages(value:string){
        this.pdfImages = value;
    }
}