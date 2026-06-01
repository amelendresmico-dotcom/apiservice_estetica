const { Articulo}= require('../models')

//Get listar todos los articulos 
exports.getArticulos = async (req, res) => {
    const articulos = await Articulo.findAll();
    res.json(articulos);

}

// Post registra un articulo
exports.createArticulo = async (req, res)=>{
    try {
        const articulo = await Articulo.create(req.body);
        res.json(articulo)
    } catch (error) {
        res.status(400).json({error: error.mensaje });
    }
}

//Put actualizar datos
exports.updateArticulo = async (req, res) => {
    const articulo = await Articulo.findByPk(req.params.id);
    if (!articulo) return res.status(404).json({msg: "Articulo no encontrado"});

    await articulo.update(req.body);
    res.json(articulo);
}

// Delete eliminar dato
exports.deleteArticulo = async (req, res) =>{
    const articulo = await Articulo.findByPk(req.params.id);
    if(!articulo) return res.status(404).json({msg: "Articulo no encontrado "  });

    await articulo.destroy();
    res.json({msg: "Articulo Eliminado"});
}