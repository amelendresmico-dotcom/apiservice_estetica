const express = require('express');
const { sequelize } = require('./src/models');
//const articulosRoutes = require('./src/router/articuloRoutes');

const caja_efectivo = require('./src/router/Caja_EfectivoRoutes');
const cliente = require('./src/router/ClienteRoutes')
const ficha_cliente = require('./src/router/Ficha_ClienteRoutes');
const historial_servicio = require('./src/router/Historial_servico');
const personal = require ('./src/router/PersonalRoutes');
const roles = require ('./src/router/RolesRoutes');
const servicio = require ('./src/router/ServicioRoutes');
const Usuario = require ('./src/router/UsuarioRoutes')

const app = express();

app.use(express.json());

// Probar conexión a la base de datos
sequelize.authenticate()
    .then(() => console.log("Conectados a la Base de Datos Estetica"))
    .catch(err => console.log("Error al conectar:", err));

// Sincronizar modelos
sequelize.sync()
    .then(() => console.log("Modelos sincronizados"))
    .catch(err => console.log("Error al sincronizar:", err));

// Rutas
//app.use('/api/articulos', articulosRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/personal', personalRoutes);
app.use('/apiroles', rolesRoutes);
app.use('/api/usuarios',  usuarioRoutes);
app.use('/api/caja',      cajaRoutes);
app.use('/api/fichas',    fichaRoutes);
app.use('/api/historial', historialRoutes);
app.use('/api/servicios', servicioRoutes);
app.get('/', (req, res) => {
    res.send("Api Estetica");
});

// Iniciar servidor
app.listen(3000, () => console.log('Servidor en http://localhost:3000'));