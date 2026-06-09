const { Cliente } = require('../models');

exports.getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getClienteById = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) return res.status(404).json({ msg: "Cliente no encontrado" });
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCliente = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) return res.status(404).json({ msg: "Cliente no encontrado" });

        await cliente.update(req.body);
        res.json(cliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) return res.status(404).json({ msg: "Cliente no encontrado" });

        await cliente.destroy();
        res.json({ msg: "Cliente eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};