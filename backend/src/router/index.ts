import { Router } from "express";
import { firstController } from '../controller/FirstController';

const router: Router = Router();

router.get('/', firstController.index);

export { router };