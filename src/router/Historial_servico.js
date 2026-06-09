const express = require('express');
const router = express.Router();
const historialController = require('../controllers/historialController');

router.get('/:id', historialController.getRegistroById);
// Para ver el historial completo de citas de un cliente específico
router.get('/cliente/:clienteId', historialController.getHistorialByCliente);
router.get('/', historialController.getRegistros);
router.post('/', historialController.createRegistro);
router.put('/:id', historialController.updateRegistro);
router.delete('/:id', historialController.deleteRegistro);

module.exports = router;