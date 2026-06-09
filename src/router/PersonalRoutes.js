const express = require('express');
const router = express.Router();
const personalController = require('../controllers/personalController');

// GET: Listar todo el personal (estilistas, barberos, etc.)
router.get('/', personalController.getPersonal);

// GET: Buscar un empleado por su ID
router.get('/:id', personalController.getPersonalById);

// POST: Registrar un nuevo empleado
router.post('/', personalController.createPersonal);

// PUT: Actualizar los datos de un empleado por su ID
router.put('/:id', personalController.updatePersonal);

// DELETE: Dar de baja o eliminar un empleado por su ID
router.delete('/:id', personalController.deletePersonal);

module.exports = router;