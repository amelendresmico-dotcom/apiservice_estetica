const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/:id', usuarioController.getUsuarioById);
router.get('/', usuarioController.getUsuarios);
router.post('/', usuarioController.createUsuario); // Registro
router.put('/:id', usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;