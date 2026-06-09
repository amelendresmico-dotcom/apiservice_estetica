const { CajaEfectivo, Personal } = require('../models');

exports.getMovimientos = async (req, res) => {
    try {
        // Incluye qué personal registró el movimiento de dinero
        const movimientos = await CajaEfectivo.findAll({
            include: { model: Personal, as: 'responsable', attributes: ['nombre'] }
        });
        res.json(movimientos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMovimientoById = async (req, res) => {
    const movimiento = await CajaEfectivo.findByPk(req.params.id);
    if (!movimiento) return res.status(404).json({ msg: "Registro de caja no encontrado" });
    res.json(movimiento);
};

exports.createMovimiento = async (req, res) => {
    try {
        const movimiento = await CajaEfectivo.create(req.body);
        res.status(201).json(movimiento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Por auditoría, los movimientos de caja reales rara vez se editan o borran, 
// pero dejamos las estructuras CRUD estándar por si necesitas ajustar un error de dedo:
exports.updateMovimiento = async (req, res) => {
    const movimiento = await CajaEfectivo.findByPk(req.params.id);
    if (!movimiento) return res.status(404).json({ msg: "Registro no encontrado" });

    await movimiento.update(req.body);
    res.json(movimiento);
};

exports.deleteMovimiento = async (req, res) => {
    const movimiento = await CajaEfectivo.findByPk(req.params.id);
    if (!movimiento) return res.status(404).json({ msg: "Registro no encontrado" });

    await movimiento.destroy();
    res.json({ msg: "Movimiento de caja eliminado" });
};