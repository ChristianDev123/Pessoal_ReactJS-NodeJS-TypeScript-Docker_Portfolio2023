import { Post } from "../Post";
import formations from "../../../models/formations";
const FormationsModel = formations();

export class Formations extends Post {
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

    public save(model:typeof FormationsModel ): number {
        try{
            const obj = {
                mainImage:this.MainImage,
                title:this.Title,
                description:this.Description,
                links:this.Links,
                pdfImages:this.pdfImages,
            };
            
            async ()=>{ await model.create(obj) };

            return 200;
        }
        catch{
            return 500;   
        }
    }

    protected get PdfImages(){
        return this.pdfImages;
    }

    protected set PdfImages(value:string){
        this.pdfImages = value;
    }
}