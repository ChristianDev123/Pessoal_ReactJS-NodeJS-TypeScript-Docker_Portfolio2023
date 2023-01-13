import { IModal } from "./InterfaceModal";

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

    public abstract save(model:any):string;
    

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