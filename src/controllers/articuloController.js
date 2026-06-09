const { Articulo } = require('../models');
const { Op } = require('sequelize');

// GET: Buscar un artículo por ID
exports.getArticuloById = async (req, res) => {
    try {
        const articulo = await Articulo.findByPk(req.params.id);
        if (!articulo) return res.status(404).json({ msg: "Artículo no encontrado" });
        res.json(articulo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET: Buscar un artículo por nombre (Coincidencia parcial)
exports.getArticuloByNombre = async (req, res) => {
    try {
        const articulo = await Articulo.findOne({
            where: {
                nombre: {
                    [Op.like]: `%${req.params.nombre}%`
                }
            }
        });
        if (!articulo) return res.status(404).json({ msg: "Artículo no encontrado" });
        res.json(articulo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET: Listar todos los artículos
exports.getArticulos = async (req, res) => {
    try {
        const articulos = await Articulo.findAll();
        res.json(articulos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST: Registrar un nuevo artículo
exports.createArticulo = async (req, res) => {
    try {
        const articulo = await Articulo.create(req.body);
        res.status(201).json(articulo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// PUT: Actualizar datos de un artículo
exports.updateArticulo = async (req, res) => {
    try {
        const articulo = await Articulo.findByPk(req.params.id);
        if (!articulo) return res.status(404).json({ msg: "Artículo no encontrado" });

        await articulo.update(req.body);
        res.json(articulo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE: Eliminar un artículo
exports.deleteArticulo = async (req, res) => {
    try {
        const articulo = await Articulo.findByPk(req.params.id);
        if (!articulo) return res.status(404).json({ msg: "Artículo no encontrado" });

        await articulo.destroy();
        res.json({ msg: "Artículo eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};