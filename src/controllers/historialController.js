const { HistorialServicio, Cliente, Servicio, Personal } = require('../models');

exports.getRegistros = async (req, res) => {
    try {
        // Trae la cita con los datos asociados completos
        const registros = await HistorialServicio.findAll({
            include: [
                { model: Cliente, as: 'cliente', attributes: ['nombre', 'telefono'] },
                { model: Servicio, as: 'servicio', attributes: ['nombre_servicio', 'precio_base'] },
                { model: Personal, as: 'estilista', attributes: ['nombre'] }
            ]
        });
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRegistroById = async (req, res) => {
    const registro = await HistorialServicio.findByPk(req.params.id, {
        include: [
            { model: Cliente, as: 'cliente' },
            { model: Servicio, as: 'servicio' },
            { model: Personal, as: 'estilista' }
        ]
    });
    if (!registro) return res.status(404).json({ msg: "Registro de servicio no encontrado" });
    res.json(registro);
};

exports.getHistorialByCliente = async (req, res) => {
    try {
        const historial = await HistorialServicio.findAll({ 
            where: { clienteId: req.params.clienteId },
            include: [{ model: Servicio, as: 'servicio' }]
        });
        res.json(historial);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createRegistro = async (req, res) => {
    try {
        const nuevoRegistro = await HistorialServicio.create(req.body);
        res.status(201).json(nuevoRegistro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateRegistro = async (req, res) => {
    const registro = await HistorialServicio.findByPk(req.params.id);
    if (!registro) return res.status(404).json({ msg: "Registro no encontrado" });

    await registro.update(req.body);
    res.json(registro);
};

exports.deleteRegistro = async (req, res) => {
    const registro = await HistorialServicio.findByPk(req.params.id);
    if (!registro) return res.status(404).json({ msg: "Registro no encontrado" });

    await registro.destroy();
    res.json({ msg: "Registro eliminado" });
};