const app = require('./config/server');

require('./app/routes/usuarios')(app);
require('./app/routes/productos')(app);
require('./app/routes/proveedores')(app);
require('./app/routes/clientes')(app);

require('./config/database');
app.listen(app.get("port"), () => console.log(`Ejecutando en puerto ${app.get("port")}`));