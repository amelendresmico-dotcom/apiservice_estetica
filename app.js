const express = require('express');
const { sequelize } = require('./src/models');

// 1. Importar las rutas (Nombres corregidos para que coincidan abajo)
const articuloRoutes = require('./src/router/articuloRoutes'); // Descomentar cuando lo uses
const cajaRoutes = require('./src/router/Caja_EfectivoRoutes');
const clienteRoutes = require('./src/router/ClienteRoutes');
const fichaRoutes = require('./src/router/Ficha_ClienteRoutes');
const historialRoutes = require('./src/router/Historial_servico');
const personalRoutes = require('./src/router/PersonalRoutes');
const rolesRoutes = require('./src/router/RolesRoutes');
const servicioRoutes = require('./src/router/ServicioRoutes');
const usuarioRoutes = require('./src/router/UsuarioRoutes');

const app = express();

//Habilitamos cors a la api de forma externa
app.use(express.json());

// Probar conexión a la base de datos
sequelize.authenticate()
    .then(() => console.log("✅ Conectados a la Base de Datos Estetica"))
    .catch(err => console.log("❌ Error al conectar:", err));

// Sincronizar modelos
sequelize.sync()
    .then(() => console.log("✅ Modelos sincronizados"))
    .catch(err => console.log("❌ Error al sincronizar:", err));

// 2. Montar las Rutas
app.use('/api/articulos', articuloRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/personal', personalRoutes);
app.use('/api/roles', rolesRoutes); // Corregido: Añadida la '/' que faltaba en /api/roles
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/caja', cajaRoutes);
app.use('/api/fichas', fichaRoutes);
app.use('/api/historial', historialRoutes);
app.use('/api/servicios', servicioRoutes);

app.get('/', (req, res) => {
    res.send("Api Estetica");
});

// Iniciar servidor
app.listen(3000, () => console.log(' Servidor en http://localhost:3000'));