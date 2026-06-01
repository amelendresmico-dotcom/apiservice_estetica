const express = require('express');
const { sequelize } = require('./src/models');
const articulosRoutes = require('./src/router/articuloRoutes');

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
app.use('/api/articulos', articulosRoutes);

app.get('/', (req, res) => {
    res.send("Api Estetica");
});

// Iniciar servidor
app.listen(3000, () => console.log('Servidor en http://localhost:3000'));