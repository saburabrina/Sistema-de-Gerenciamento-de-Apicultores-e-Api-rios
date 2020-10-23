import { Router } from 'express';
import ColmeiaController from '../controllers/ColmeiasController';

const router = Router();

router.post('/colmeias', ColmeiaController.create);

export default router;