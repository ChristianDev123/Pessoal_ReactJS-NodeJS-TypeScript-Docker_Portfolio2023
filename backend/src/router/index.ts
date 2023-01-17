import { Router } from "express";
import { CertificationsController } from "../controller/CertificationsController";
import { FormationsController } from "../controller/FormationsController";
import { MainSkillsController } from "../controller/MainSkillsController";
import { ProjectController } from "../controller/ProjectsController";
const router: Router = Router();

router.get('/mainskills', MainSkillsController.index);
router.post('/mainskills', MainSkillsController.create);
router.put('/mainskills', MainSkillsController.update);
router.delete('/mainskills/:id', MainSkillsController.delete);

router.get('/formations', FormationsController.index);
router.post('/formations',FormationsController.create);
router.put('/formations', FormationsController.update);
router.delete('/formations/:id', FormationsController.delete);

router.get('/projects', ProjectController.index);
router.post('/projects', ProjectController.create);
router.put('/projects', ProjectController.update);
router.delete('/projects', ProjectController.delete);

router.get('/certifications', CertificationsController.index);
router.post('/certifications', CertificationsController.create);
router.put('/certifications', CertificationsController.update);
router.delete('/certifications', CertificationsController.delete);

export { router };