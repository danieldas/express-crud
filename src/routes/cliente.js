import { Router } from 'express';
const router = Router();

import { obtenerCliente, actualizarCliente, borrarCliente, obtenerClientes, nuevoCliente } from '../controllers/cliente.controller';

router.get('/', obtenerClientes);
router.post('/',nuevoCliente);
router.delete('/:id_cliente', borrarCliente);
router.put('/:idcliente', actualizarCliente);
router.get('/:idcliente', obtenerCliente);




export default router;