const  {Router}  = require('express')

const { 
        listarProductos, 
        listarUnProducto, 
        crearProducto, 
        actualizarUnProducto,
        eliminarUnProducto 
        } = require('../controllers/product.controllers')

        const router = Router()

router.get('/api/product/obtener-productos', listarProductos)
router.post('/api/product/crear-producto', crearProducto)
router.get('/api/product/:id', listarUnProducto)
router.put('/api/product/:id', actualizarUnProducto)
router.delete('/api/product/:id', eliminarUnProducto)

module.exports = router
