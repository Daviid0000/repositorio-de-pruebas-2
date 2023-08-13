//  Rutas para un CRUD de práctica


const { Router } = require('express')
const router = Router()
const {
    obtenerTareas,
    obtenerUnaTarea,
    crearTarea,
    actualizarUnaTarea,
    eliminarUnaTarea
} = require('../controllers/controllers')


router.get('/', obtenerTareas)
router.post('/', crearTarea)
router.put('/:id', actualizarUnaTarea)
router.get('/:id', obtenerUnaTarea)
router.delete('/:id', eliminarUnaTarea)


module.exports = router



