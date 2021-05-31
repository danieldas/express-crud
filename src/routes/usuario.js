import { Router } from 'express';
const router = Router();

import {autenticacion} from '../controllers/usuarioController';

router.post('/',autenticacion);

export default router;