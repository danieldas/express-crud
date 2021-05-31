import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Cliente = sequelize.define('clientes',{
    id_cliente:
    {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    primer_apellido:{
        type: Sequelize.TEXT
    },
    segundo_apellido:{
        type: Sequelize.TEXT
    },
    nombres:{
        type: Sequelize.TEXT
    },
    nit:{
        type: Sequelize.INTEGER
    },
    razon_social:{
        type: Sequelize.TEXT
    },
    celular:{
        type: Sequelize.INTEGER
    },
    estado:{
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false,
    schema: "control_calidad",
    tableName: "clientes"
});


export default Cliente;