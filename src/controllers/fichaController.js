const { FichaCliente } = require('../models');

exports.getFichaById = async (req, res) => {
    try {
        const ficha = await FichaCliente.findByPk(req.params.id);
        if (!ficha) return res.status(404).json({ msg: "Ficha no encontrada" });
        res.json(ficha);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFichaByClienteId = async (req, res) => {
    try {
        const ficha = await FichaCliente.findOne({ where: { clienteId: req.params.clienteId } });
        if (!ficha) return res.status(404).json({ msg: "Este cliente no tiene ficha registrada" });
        res.json(ficha);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createFicha = async (req, res) => {
    try {
        const ficha = await FichaCliente.create(req.body);
        res.status(201).json(ficha);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateFicha = async (req, res) => {
    try {
        const ficha = await FichaCliente.findByPk(req.params.id);
        if (!ficha) return res.status(404).json({ msg: "Ficha no encontrada" });

        await ficha.update(req.body);
        res.json(ficha);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteFicha = async (req, res) => {
    try {
        const ficha = await FichaCliente.findByPk(req.params.id);
        if (!ficha) return res.status(404).json({ msg: "Ficha no encontrada" });

        await ficha.destroy();
        res.json({ msg: "Ficha eliminada" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};