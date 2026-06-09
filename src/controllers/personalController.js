const { Personal } = require('../models');

exports.getPersonal = async (req, res) => {
    try {
        const personal = await Personal.findAll();
        res.json(personal);
    } catch (error) {
        console.error('ERROR PERSONAL:', error.message);
        res.status(500).json({ error: error.message });
    }
};

exports.getPersonalById = async (req, res) => {
    try {
        const empleado = await Personal.findByPk(req.params.id);
        if (!empleado) return res.status(404).json({ msg: "Empleado no encontrado" });
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createPersonal = async (req, res) => {
    try {
        const empleado = await Personal.create(req.body);
        res.status(201).json(empleado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updatePersonal = async (req, res) => {
    try {
        const empleado = await Personal.findByPk(req.params.id);
        if (!empleado) return res.status(404).json({ msg: "Empleado no encontrado" });
        await empleado.update(req.body);
        res.json(empleado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deletePersonal = async (req, res) => {
    try {
        const empleado = await Personal.findByPk(req.params.id);
        if (!empleado) return res.status(404).json({ msg: "Empleado no encontrado" });
        await empleado.destroy();
        res.json({ msg: "Empleado eliminado del sistema" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};