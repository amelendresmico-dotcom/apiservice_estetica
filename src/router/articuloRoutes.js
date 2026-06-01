const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/', controller.getArticulos);
router.post('/', controller.createArticulo);
router.put('/:id', controller.updateArticulo);
router.delete('/:id', controller.deleteArticulo);

module.exports=router;