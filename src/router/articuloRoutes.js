const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')
router.get('/:id', controller.getArticuloById);
router.get('/nombre/:nombre', controller.getArticuloByNombre);  
router.get('/', controller.getArticulos);
router.post('/', controller.createArticulo);
router.put('/:id', controller.updateArticulo);
router.delete('/:id', controller.deleteArticulo);

module.exports=router;