const app = require('./config/server');

require('./config/database');
app.listen(app.get("port"), () => console.log(`Ejecutando en puerto ${app.get("port")}`));