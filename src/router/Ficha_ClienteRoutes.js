const express = require('express');
const router = express.Router();
const fichaController = require('../controllers/fichaController');

router.get('/:id', fichaController.getFichaById);
// Útil para buscar la ficha médica/estética directamente por el ID del cliente
router.get('/cliente/:clienteId', fichaController.getFichaByClienteId);
router.post('/', fichaController.createFicha);
router.put('/:id', fichaController.updateFicha);
router.delete('/:id', fichaController.deleteFicha);

module.exports = router;