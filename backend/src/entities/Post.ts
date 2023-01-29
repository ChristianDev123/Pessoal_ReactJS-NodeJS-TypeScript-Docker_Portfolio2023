type link = string | string[]; 

export interface PostAttributes{
    mainImage:string;
    title:string;
    description:string;
    links:link;
}

export abstract class Post {
    protected attributes:PostAttributes;

    constructor(attributes:PostAttributes){
        this.attributes = attributes;
        this.links = attributes.links;
    }
    
    public get mainImage(){
        return this.attributes.mainImage;
    }

    public set mainImage(value:string){
        this.attributes.mainImage = value;
    }

    public get title(){
        return this.attributes.title;
    }

    public set title(value:string){
        this.attributes.title = value;
    }

    public get description(){
        return this.attributes.description;
    }

    public set description(value:string){
        this.attributes.description = value;   
    }

    public get links(){
        return this.attributes.links;
    }

    public set links(value:link){
        const jsonLinks:string = JSON.stringify(value);
        this.attributes.links = jsonLinks;
    }
}