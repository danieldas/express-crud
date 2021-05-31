const jwt = require('jsonwebtoken')

export function autenticacion(req, res)
{
    if(req.body.usuario === "dorys" && req.body.contrasena === "123456") {
  const payload = {
   check:  true,
   nombreUsuario: req.body.usuario,
   usuarioId:12
  };
  const token = jwt.sign(payload, "lalal", {
   expiresIn: 1440 ,algorithm:"HS256" //tiempo de vencimiento en minutos
  });
  /*const token = jwt.sign(payload, "llave", {
    expiresIn: 1440  //tiempo de vencimiento en minutos
   });*/
  res.json({
   mensaje: 'Autenticación correcta',
   token: token
  });
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"})
    }
  }



  
