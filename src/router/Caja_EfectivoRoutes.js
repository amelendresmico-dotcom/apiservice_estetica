const express = require('express');
const router = express.Router();
const cajaController = require('../controllers/cajaController');

router.get('/:id', cajaController.getMovimientoById);
router.get('/', cajaController.getMovimientos);
router.post('/', cajaController.createMovimiento);
router.put('/:id', cajaController.updateMovimiento);
router.delete('/:id', cajaController.deleteMovimiento);

module.exports = router;