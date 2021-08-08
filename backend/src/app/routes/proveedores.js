const conn = require("../../config/database"); //Necesitamos acceder a la base de datos para poder hacer los query(consulta).

module.exports = (app) => {

    //GET
    app.get('/proveedores', (req, res, next)=> {
        let consulta = "SELECT * FROM proveedores"; 
        conn.query(consulta, (err, rows, cols) =>{
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            } else {
                res.json({status: 1, mensaje: "Exitoso", proveedores: rows})
            }
        });
    });

    //POST
    app.post('/proveedores', (req, res, next)=> {
        let consulta = "INSERT INTO proveedores (nombre, laboratorio) VALUES ( '" + req.body.nombre+ "','" + req.body.laboratorio + "')"; 
        conn.query(consulta, (err, rows, cols) =>{
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            } else {
                res.json({status: 1, mensaje: "Exitoso"})
            }
        });
    });

    //PUT
    app.put('/proveedores/:id', (req, res, next)=>{
        let consulta = "UPDATE proveedores SET nombre = '" + req.body.nombre + "', laboratorio = '" + req.body.laboratorio + "'WHERE id_proveedor = " + req.params.id;
        
        conn.query(consulta, (err, rows, cols) => {
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            }else{
                res.json({mensaje: "Exitoso"});
            }
        });
    });

    //DELETE
    app.delete('/proveedores/:id', (req, res, next) =>{
        let consulta = "DELETE FROM proveedores WHERE id_proveedor= "+ req.params.id;
        conn.query(consulta, (err, rows, cols) => {
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            } else{
                res.json({mensaje: "Exitoso"});
            }
        });
    });
}