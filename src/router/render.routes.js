const  {Router}  = require('express')
const router = Router()


const { 
    renderProducts, 
    renderCrearProducto} = require('../controllers/render.product.controllers')


// Rutas CRUD Render
router.get('/', renderProducts)

router.get('/crear-producto', renderCrearProducto)


module.exports = router



