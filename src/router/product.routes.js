const  {Router}  = require('express')

const { 
        listarProductos, 
        listarUnProducto, 
        crearProducto, 
        actualizarUnProducto,
        eliminarUnProducto 
        } = require('../controllers/product.controllers')

        const router = Router()

router.get('/obtener-productos', listarProductos)
router.post('/crear-producto', crearProducto)
router.get('/:id', listarUnProducto)
router.put('/:id', actualizarUnProducto)
router.delete('/:id', eliminarUnProducto)

module.exports = router
