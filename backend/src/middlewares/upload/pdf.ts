import multer from "multer";
import fs from 'fs';
import path from 'path';
import mime from "mime";
import { Request } from "express";

export class UploadPDF {
    private url:string = path.basename('public');
    
    constructor(){}

    private storage(): multer.StorageEngine {
        return multer.diskStorage({
            destination: (req, file, cb)=>{
                if(!fs.existsSync(this.url)) fs.mkdirSync(this.url);
                cb(null,this.url);
            },
            filename: (req, file, cb)=>{
                const type = mime.getExtension(file.mimetype);
                cb(null, `${new Date().getTime()}.${type}`);
            }
        });
    }

    private fileFilter(){
        return (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback)=>{
            const type = mime.getExtension(file.mimetype);
            const conditions = ["pdf"];
            if(conditions.includes(`${type}`)) cb(null, true);
            cb(null, false);
        };
    }

    get getConfig(): multer.Options {
        return {
            storage: this.storage(),
            fileFilter: this.fileFilter()
        }
    }

}