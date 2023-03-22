import express from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { PatientsController } from './controllers/PatientsController';
import { ChamadosController } from './controllers/ChamadosController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = express.Router();

router.post('/login', new AuthenticateUserController().handle);
router.get('/patients', ensureAuthenticated, new PatientsController().handle);
router.get('/chamados', ensureAuthenticated, new ChamadosController().handle);

export default router;