import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Cliente from '../models/Cliente';


const Venta = sequelize.define('ventas',{
    id_venta:
    {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_cliente:{
        type: Sequelize.INTEGER
    },
    codigo:{
        type: Sequelize.TEXT
    },
    nombre_cliente:{
        type: Sequelize.TEXT
    },
    fecha:{
        type: Sequelize.DATE
    },       
    estado:{
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false,
    schema: "control_calidad",
    tableName: "ventas"
});

Cliente.hasMany(Venta,{foreignKey: 'id_cliente'})
Venta.belongsTo(Cliente,{foreignKey: 'id_cliente'})



export default Venta;