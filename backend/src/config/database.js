const db = require("mysql");

const conn = db.createConnection({
    host: "127.0.0.1",
    user: "root",
    port: 3306,
    database: "farmacia"
});

conn.connect((error) => {
    if (error) {
      console.log(error);
      console.log("Error en conexion con BD");
    } else {
        console.log('Conexion Exitosa');
    }
});

module.exports = conn;