const { producto } = require("../models/product")


// Rutas de CRUD
//  Obtener todos los productos
    const listarProductos = async (req, res) => {

        try{
            const productos = await producto.findAll()
            res.json(productos)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

//  Obtener un producto
    const listarUnProducto = async (req, res) => {
        try{
            const Producto = await Producto.findByPk(req.params.id)
            res.json(Producto)
        } catch (error) {
            res.status(500).json({ message: error.message})
        }
    }
//  Crear un producto
    const crearProducto = async (req, res) => {
        try{
            const Producto = await Producto.create(req.body)
            res.status(201).json(Producto)
        } catch (error) {
            res.status(500).json({ message: error.message})
        }
    }

//  Actualizar un producto
    const actualizarUnProducto = async (req, res) => {
        try{
            const Producto = await producto.findByPk(req.params.id)
            await Producto.update(req.body)
            res.json(Producto)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

//  Eliminar un producto
    const eliminarUnProducto = async (req, res) =>{
        try{
            const Producto = await producto.findByPk(req.params.id)
            await Producto.destroy()
            res.json(Producto)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

module.exports =  {
    listarProductos, 
    listarUnProducto, 
    crearProducto, 
    actualizarUnProducto, 
    eliminarUnProducto }