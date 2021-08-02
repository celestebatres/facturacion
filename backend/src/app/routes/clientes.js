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
    app.post('/cliente', (req, res, next)=> {

        //INSERT INTO farmacia.clientes (nombre, nit) VALUES ("Pedro", 0909)
        let consulta = "INSERT INTO clientes (nombre, nit) VALUES ( '" + req.body.name+ "','" + req.body.nit + "')"; 
        conn.query(consulta, (err, rows, cols) =>{
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            } else {
                res.json({status: 1, mensaje: "Exitoso"})
            }
        });
    });


    //PUT

    //DELETE
}