const conn = require("../../config/database"); //Necesitamos acceder a la base de datos para poder hacer los query(consulta).

module.exports = (app) => {

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
}