const conn = require("../../config/database"); //Necesitamos acceder a la base de datos para poder hacer los query(consulta).

module.exports = (app) => {

    //GET
    app.get('/productos', (req, res, next)=> {
        let consulta = "SELECT * FROM productos"; 
        conn.query(consulta, (err, rows, cols) =>{
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            } else {
                res.json({status: 1, mensaje: "Exitoso", productos: rows})
            }
        });
    });

    //POST --- También se guarda un id (Código)
    app.post('/productos', (req, res, next)=> {
        let consulta = "INSERT INTO productos (id_producto, nombre, precio, grms, existencia, fecha_venc) VALUES ( '" + req.body.id_producto + "','"  + req.body.nombre + "','" + req.body.precio + "','" + req.body.grms+ "','" + req.body.existencia + "','" + req.body.fecha_venc + "')"; 
        conn.query(consulta, (err, rows, cols) =>{
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            } else {
                res.json({status: 1, mensaje: "Exitoso"})
            }
        });
    });

    //PUT
    app.put('/productos/:id', (req, res, next)=>{
        let consulta = "UPDATE productos SET nombre = '" + req.body.nombre + "', precio = '" + req.body.precio + "', grms = '" + req.body.grms + "', existencia = '" + req.body.existencia + "', fecha_venc = '" + req.body.fecha_venc + "'WHERE id_producto = " + req.params.id;
        
        conn.query(consulta, (err, rows, cols) => {
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            }else{
                res.json({mensaje: "Exitoso"});
            }
        });
    });

    //DELETE
    app.delete('/productos/:id', (req, res, next) =>{
        let consulta = "DELETE FROM productos WHERE id_producto = "+ req.params.id;
        conn.query(consulta, (err, rows, cols) => {
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            } else{
                res.json({mensaje: "Exitoso"});
            }
        });
    });
}