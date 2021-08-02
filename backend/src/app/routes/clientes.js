const conn = require("../../config/database"); //Necesitamos acceder a la base de datos para poder hacer los query(consulta).

module.exports = (app) => {

    //GET
    app.get('/clientes', (req, res, next)=> {
        let consulta = "SELECT * FROM clientes"; 
        conn.query(consulta, (err, rows, cols) =>{
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            } else {
                res.json({status: 10, mensaje: "Exitoso", clientes: rows})
            }
        });
    });

    //POST
    app.post('/clientes', (req, res, next)=> {
        let consulta = "INSERT INTO clientes (nombre, nit) VALUES ( '" + req.body.nombre+ "','" + req.body.nit + "')"; 
        conn.query(consulta, (err, rows, cols) =>{
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            } else {
                res.json({status: 1, mensaje: "Exitoso"})
            }
        });
    });

    //PUT
    app.put('/clientes/:id', (req, res, next)=>{
        let consulta = "UPDATE clientes SET nombre = '" + req.body.nombre + "', nit = '" + req.body.nit + "'WHERE id_cliente = " + req.params.id;
        
        conn.query(consulta, (err, rows, cols) => {
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            }else{
                res.json({mensaje: "Exitoso"});
            }
        });
    });

    //DELETE
    app.delete('/clientes/:id', (req, res, next) =>{
        let consulta = "DELETE FROM clientes WHERE id_cliente = "+ req.params.id;
        conn.query(consulta, (err, rows, cols) => {
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            } else{
                res.json({mensaje: "Exitoso"});
            }
        });
    });
}