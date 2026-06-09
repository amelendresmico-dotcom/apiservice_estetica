const { Usuario, Roles } = require('../models');
const bcrypt = require('bcryptjs');

exports.getUsuarios = async (req, res) => {
    try {
        // Al listar usuarios, incluimos el nombre de su rol automáticamente
        const usuarios = await Usuario.findAll({
            include: { model: Roles, as: 'rol', attributes: ['nombre_rol'] },
            attributes: { exclude: ['password'] } // Por seguridad, no enviamos los hashes de contraseña en el GET
        });
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id, {
            attributes: { exclude: ['password'] }
        });
        if (!usuario) return res.status(404).json({ msg: "Usuario no encontrado" });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createUsuario = async (req, res) => {
    try {
        const { username, password, roleId, personalId } = req.body;

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const usuario = await Usuario.create({
            username,
            password: hashedPassword,
            roleId,
            personalId
        });

        res.status(201).json({ id: usuario.id, username: usuario.username });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) return res.status(404).json({ msg: "Usuario no encontrado" });

        // Si se envía una nueva contraseña en la actualización, también se encripta
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        await usuario.update(req.body);
        res.json({ msg: "Usuario actualizado con éxito" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) return res.status(404).json({ msg: "Usuario no encontrado" });

        await usuario.destroy();
        res.json({ msg: "Usuario eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};