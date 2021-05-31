import Venta from '../models/Venta';
import Cliente from '../models/Cliente';

export async function obtenerVentas(req, res){

    try{

        const ventas = await Venta.findAll({
            include:[
                {
                    model: Cliente,                  
                },
            ],
        });
        res.json({
            data:ventas
        })

    }catch(error){
        console.log(error);
        res.json({
            data:{},
            message:'Error: consulta no procesada'
        })

    }

}


export async function nuevaVenta(req, res){
    const{codigo, id_cliente, nombre_cliente, fecha, estado} = req.body;
    try{

        const nuevaVenta = await Venta.create({codigo, id_cliente, nombre_cliente, fecha, estado
        },{
            fields:[ 'codigo', 'id_cliente', 'nombre_cliente', 'fecha', 'estado']
        });

        if(nuevaVenta){
            res.json({
                message: 'La venta fue registrada correctamente',
                data: nuevaVenta
            })
        }
        else
        {
            res.status(500).json({
                message:'La venta no pudo registrarse'
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