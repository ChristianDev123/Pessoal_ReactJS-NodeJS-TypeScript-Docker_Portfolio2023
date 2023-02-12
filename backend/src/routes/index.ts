import { Request, Response, Router } from "express";
import { CertificationController } from "../controllers/certification";
import { FormationController } from "../controllers/formation";
import { MainSkillController } from "../controllers/mainskill";
import { ProjectController } from "../controllers/project";
import dbConfig from "../config";
import multer from 'multer';
import { UploadImage } from "../middlewares/upload/image";
import { UploadPDF} from "../middlewares/upload/pdf";
const uploadImage = new UploadImage(); 
const uploadPDF = new UploadPDF();
const route = Router();


// stater route

route.get('/config',async(req:Request, res:Response)=>{
    dbConfig.sync({force:true});
    res.status(200).json({msg:"database created"})
});


// mainskill

route.get('/mainskill', MainSkillController.index);
route.post('/mainskill', multer(uploadImage.getConfig).single('mainImage'), multer(uploadPDF.getConfig).single('pdfImages'), MainSkillController.create);
route.put('/mainskill', multer(uploadImage.getConfig).single('mainImage'), multer(uploadPDF.getConfig).single('pdfImages'), MainSkillController.update);
route.delete('/mainskill', MainSkillController.delete);

// formation

route.get('/formation', FormationController.index);
route.post('/formation', multer(uploadImage.getConfig).single('mainImage'), multer(uploadPDF.getConfig).single('pdfImages'), FormationController.create);
route.put('/formation', multer(uploadImage.getConfig).single('mainImage'), multer(uploadPDF.getConfig).single('pdfImages'), FormationController.update);
route.delete('/formation', FormationController.delete);

// project

route.get('/project', ProjectController.index);
route.post('/project', multer(uploadImage.getConfig).single('mainImage'), multer(uploadPDF.getConfig).single('pdfImages'), ProjectController.create);
route.put('/project', multer(uploadImage.getConfig).single('mainImage'), multer(uploadPDF.getConfig).single('pdfImages'), ProjectController.update);
route.delete('/project', ProjectController.delete);

// certification

route.get('/certification', CertificationController.index);
route.post('/certification', multer(uploadImage.getConfig).single('mainImage'), multer(uploadPDF.getConfig).single('pdfImages'), CertificationController.create);
route.put('/certification', multer(uploadImage.getConfig).single('mainImage'), multer(uploadPDF.getConfig).single('pdfImages'), CertificationController.update);
route.delete('/certification', CertificationController.delete);

export default route;