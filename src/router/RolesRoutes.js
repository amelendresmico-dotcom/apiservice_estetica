const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController');

router.get('/:id', rolesController.getRolById);
router.get('/', rolesController.getRoles);
router.post('/', rolesController.createRol);
router.put('/:id', rolesController.updateRol);
router.delete('/:id', rolesController.deleteRol);

module.exports = router;