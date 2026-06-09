const { Servicio } = require('../models');

exports.getServicios = async (req, res) => {
    try {
        const servicios = await Servicio.findAll();
        res.json(servicios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getServicioById = async (req, res) => {
    const servicio = await Servicio.findByPk(req.params.id);
    if (!servicio) return res.status(404).json({ msg: "Servicio no encontrado" });
    res.json(servicio);
};

exports.createServicio = async (req, res) => {
    try {
        const servicio = await Servicio.create(req.body);
        res.status(201).json(servicio);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateServicio = async (req, res) => {
    const servicio = await Servicio.findByPk(req.params.id);
    if (!servicio) return res.status(404).json({ msg: "Servicio no encontrado" });

    await servicio.update(req.body);
    res.json(servicio);
};

exports.deleteServicio = async (req, res) => {
    const servicio = await Servicio.findByPk(req.params.id);
    if (!servicio) return res.status(404).json({ msg: "Servicio no encontrado" });

    await servicio.destroy();
    res.json({ msg: "Servicio eliminado de la oferta" });
};