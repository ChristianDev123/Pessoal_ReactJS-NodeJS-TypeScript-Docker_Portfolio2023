import { Router } from "express";
import { CertificationController } from "../controllers/certification";
import { FormationController } from "../controllers/formation";
import { MainSkillController } from "../controllers/mainskill";
import { ProjectController } from "../controllers/project";
const route = Router();

// mainskill

route.get('/mainskill', MainSkillController.index);
route.post('/mainskill', MainSkillController.create);
route.put('/mainskill', MainSkillController.update);
route.delete('/mainskill', MainSkillController.delete);

// formation

route.get('/formation', FormationController.index);
route.post('/formation', FormationController.create);
route.put('/formation', FormationController.update);
route.delete('/formation', FormationController.delete);

// project

route.get('/project', ProjectController.index);
route.post('/project', ProjectController.create);
route.put('/project', ProjectController.update);
route.delete('/project', ProjectController.delete);

// certification

route.get('/certification', CertificationController.index);
route.post('/certification', CertificationController.create);
route.put('/certification', CertificationController.update);
route.delete('/certification', CertificationController.delete);

export default route;