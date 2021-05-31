import express, { json } from 'express';
import morgan from 'morgan';
//import auth from './middlewares/auth-middleware';


//importar rutas
import clienteRoutes from './routes/cliente';
import ventaRoutes from './routes/venta';
const cors = require('cors');
//initialization
const app = express();

///midlewares
app.use(morgan('dev'));
app.use(json());
app.use(cors());



//routes
app.use('/api/clientes',clienteRoutes);
app.use('/api/ventas',ventaRoutes);

export default app;