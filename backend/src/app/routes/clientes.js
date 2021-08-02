const conn = require("../../config/database"); //Necesitamos acceder a la base de datos para poder hacer los query(consulta).

module.exports = (app) => {

    //GET
    app.get('/clientes', (req, res, next)=> {
        let consulta = "SELECT * FROM clientes"; 
        conn.query(consulta, (err, rows, cols) =>{
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            } else {
                res.json({status: 1, mensaje: "Exitoso", clientes: rows})
            }
        });
    });

    //POST
    app.post('/cliente/:id', (req, res, next) => {
        let consulta = "UPDATE clientes SET nombre '" + req.body.nombre + "', nit = '" + req.body.nit + "' WHERE id_cliente = " + req.params.id;
        
        conn.query(consulta, (err, rows, cols) => {
            if(err){
                res.status(500).json({status: 0, mensaje = "Error"});
            } else {
                res.json({mensaje: "Exitoso"});
            }
        });
    });

    //PUT

    //DELETE
}