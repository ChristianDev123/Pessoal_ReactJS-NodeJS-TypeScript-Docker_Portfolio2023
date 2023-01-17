import mainskills from "../../../models/mainskills";
import { Post } from "../Post";
const MainSkillsModel = mainskills();

export class MainSkills extends Post {
    private timeExperience : string;

    constructor(
        mainImage:string,
        title:string,
        description:string,
        links:string,
        timeExperience:string,
    ){
        super(mainImage, title, description, links);
        this.timeExperience = timeExperience;
    }

    public save(model: typeof MainSkillsModel ): number {
        try{
            const obj = {
                mainImage:this.MainImage,
                title:this.Title,
                description:this.Description,
                links:this.Links,
                timeExperience:this.TimeExperience,
            }
            async()=>{await model.create(obj)};
            return 200;
        }
        catch{
            return 500;   
        }
    }

    protected get TimeExperience(){
        return this.timeExperience;
    }

    protected set TimeExperience(value:string){
        this.timeExperience = value;
    }
}