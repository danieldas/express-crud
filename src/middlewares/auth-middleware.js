const jwt = require('jsonwebtoken')

const auth = async(req, res, next) => {
   try {
    const token = req.header('Authorization').replace('Bearer ', '')

      //const user = await User.findOne({ _id: data._id, 'tokens.token': token })
      if (token) {
        const data = jwt.verify(token, "llave",(err, decoded) => { 
        //const data = jwt.verify(token, process.env.JWT_SECRET,(err, decoded) => {      
          if (err) {
            return res.json({ mensaje: 'Token inválido' });    
          } else {
            req.decoded = decoded;    
            next();
          }
        });
      }
      else{
        res.send({ 
          mensaje: 'Token no proveída.' 
      });
      }
      /*req.user = user
      req.token = token
      next()*/
   } catch (error) {
      res.status(401).send({ error: 'Not authorized to access' })
   }

}
module.exports = auth