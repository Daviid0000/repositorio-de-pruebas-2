//  Práctica de controladores para un CRUD

const {producto} = require("../models/product")

const Ctrl = {}

Ctrl.obtenerTareas =  (req, res) => {
   res.send('hola mundo')
}
Ctrl.crearTarea = async (req, res) => {
    try {
        const creandoTarea = await creandoTarea.create(req.body)
    res.status(201).json(creandoTarea)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}
Ctrl.actualizarUnaTarea = async (req, res) => {
    try {
        const actualizandoTarea = await producto.findByPk(req.params.id)
        await actualizandoTarea.update(req.body)
        res.json(actualizandoTarea)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}
Ctrl.obtenerUnaTarea = async (req, res) => {
    try {
        const obteniendoUnaTarea = await producto.findByPk(req.params.id)
        res.json(obteniendoUnaTarea)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
Ctrl.eliminarUnaTarea = async (req, res) =>{
    try {
        const eliminandoUnaTarea = await producto.findByPk(req.params.id)
        await eliminandoUnaTarea.destroy()
        res.json(eliminandoUnaTarea)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = Ctrl