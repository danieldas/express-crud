import Cliente from '../models/Cliente';

export async function obtenerClientes(req, res){

    try{

        const clientes = await Cliente.findAll({
            atributes:['id_cliente','nombres','primer_apellido'],
            where:{
                estado:true
            },
            order: [
                ['nombres', 'ASC'],
            ],
        });
        res.json({
            data:clientes
        })

    }catch(error){
        console.log(error);
        res.json({
            data:{},
            message:'Error: consulta no procesada'
        })
    }
}



export async function nuevoCliente(req, res){
    const{primer_apellido, segundo_apellido, nombres, nit, razon_social, celular, estado} = req.body;
    try{

        const nuevoCli = await Cliente.create({primer_apellido, segundo_apellido, nombres, nit, razon_social, celular, estado
        },{
            fields:[ 'primer_apellido', 'segundo_apellido', 'nombres', 'nit', 'razon_social', 'celular', 'estado']
        });

        if(nuevoCli){
            res.json({
                message: 'El cliente fue registrado correctamente',
                data: nuevoCli,
                res: true
            })
        }
        else
        {
            res.status(500).json({
                message:'El cliente no pudo registrarse'
            })
        }

    }catch(error){
        console.log(error);
        res.json({
            data:{},
            message:'Error: consulta no procesada'
        })

    }
}

export async function borrarCliente(req, res){
    const {id_cliente} = req.params;
    const borrarcliente = await Cliente.destroy({
        where:{
            id_cliente : id_cliente
        }
    });

    res.json({
        message:'Se elimino el cliente .',
        count: borrarcliente,
        res: true
    })

}

export async function actualizarCliente(req, res){
    const {idcliente} = req.params;
    const{nombres, primer_apellido, segundo_apellido, nit, razon_social, celular} = req.body;

    try{
        const actualizarCliente = await Cliente.update({
            nombres:nombres, primer_apellido:primer_apellido, segundo_apellido:segundo_apellido, nit:nit,
            razon_social:razon_social, celular:celular
        },{
            where:{id_cliente:idcliente}
        });

        if(actualizarCliente){
            res.json({
                message: 'El cliente se actualizo correctamente',
                data: actualizarCliente,
                res: true
            })
        }
        else
        {
            res.status(500).json({
                message:'El cliente no se pudo  actualizar'
            })
        }
    }catch(error){
        console.log(error);
        res.json({
            data:{},
            message:'Error: consulta no procesada'
        })
    }
}



export async function obtenerCliente(req, res){
    const {idcliente} = req.params;

    try{
        const cliente = await Cliente.findOne({
            atributes:['id_cliente','nombres','primer_apellido'],
            where:{
                id_cliente:idcliente
            },

        });
        res.json({
            data:cliente
        })

    }catch(error){
        console.log(error);
        res.json({
            data:{},
            message:'Error: consulta no procesada'
        })
    }
}
