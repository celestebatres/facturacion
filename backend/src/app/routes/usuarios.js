const conn = require("../../config/database"); //Necesitamos acceder a la base de datos para poder hacer los query(consulta).

module.exports = (app) => {

    //GET
    app.get('/usuarios', (req, res, next) => {
        let consulta = "SELECT * FROM usuarios";
        conn.query(consulta, (err, rows, cols) => {
            if (err) {
                res.status(500).json({ status: 0, mensaje: "Error" });
            } else {
                res.json({ status: 1, mensaje: "Exitoso", usuarios: rows })
            }
        });
    });

    //POST
    app.post('/usuarios', (req, res, next) => {
        let consulta = "INSERT INTO usuarios (nombre, username, contrasena, fecha_nac, rol) VALUES ( '" + req.body.nombre + "','" + req.body.username + "','" + req.body.contrasena + "','" + req.body.fecha_nac + "','" + req.body.rol + "')";
        conn.query(consulta, (err, rows, cols) => {
            if (err) {
                res.status(500).json({ status: 0, mensaje: "Error" });
            } else {
                res.json({ status: 1, mensaje: "Exitoso" })
            }
        });
    });

    //PUT
    app.put('/usuarios/:id', (req, res, next) => {
        let consulta = "UPDATE usuarios SET nombre = '" + req.body.nombre + "', username = '" + req.body.username + "', contrasena = '" + req.body.contrasena + "', fecha_nac = '" + req.body.fecha_nac + "', rol = '" + req.body.rol + "'WHERE id_usuario = " + req.params.id;

        conn.query(consulta, (err, rows, cols) => {
            if (err) {
                res.status(500).json({ status: 0, mensaje: "Error" });
            } else {
                res.json({ mensaje: "Exitoso" });
            }
        });
    });

    //DELETE
    app.delete('/usuarios/:id', (req, res, next) => {
        let consulta = "DELETE FROM usuarios WHERE id_usuario = " + req.params.id;
        conn.query(consulta, (err, rows, cols) => {
            if (err) {
                res.status(500).json({ status: 0, mensaje: "Error" });
            } else {
                res.json({ mensaje: "Exitoso" });
            }
        });
    });
}