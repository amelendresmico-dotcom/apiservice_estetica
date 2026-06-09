const { Roles } = require('../models');

exports.getRoles = async (req, res) => {
    try {
        const roles = await Roles.findAll();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRolById = async (req, res) => {
    try {
        const rol = await Roles.findByPk(req.params.id);
        if (!rol) return res.status(404).json({ msg: "Rol no encontrado" });
        res.json(rol);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createRol = async (req, res) => {
    try {
        const rol = await Roles.create(req.body);
        res.status(201).json(rol);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateRol = async (req, res) => {
    try {
        const rol = await Roles.findByPk(req.params.id);
        if (!rol) return res.status(404).json({ msg: "Rol no encontrado" });

        await rol.update(req.body);
        res.json(rol);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteRol = async (req, res) => {
    try {
        const rol = await Roles.findByPk(req.params.id);
        if (!rol) return res.status(404).json({ msg: "Rol no encontrado" });

        await rol.destroy();
        res.json({ msg: "Rol eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};