import { Router } from 'express';
const router = Router();

import { obtenerVentas, nuevaVenta } from '../controllers/venta.controller';

router.get('/', obtenerVentas);
router.post('/',nuevaVenta);


export default router;