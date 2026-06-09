const express = require('express');
const router = express.Router();
const controller = require('../controllers/articuloController'); // ✅ corregido

router.get('/', controller.getArticulos);
router.get('/nombre/:nombre', controller.getArticuloByNombre);
router.get('/:id', controller.getArticuloById);
router.post('/', controller.createArticulo);
router.put('/:id', controller.updateArticulo);
router.delete('/:id', controller.deleteArticulo);

module.exports = router;