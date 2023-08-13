const Products = [
    {id: 1,
    name: 'mouse',
    price: 100},

    {id: 2,
    name: 'keyboard',
    price: 100},
        
    {id: 3,
    name: 'monitor',
    price: 100},
]
// Rutas de CRUD Render
const renderProducts = (req, res) => {
    res.render('listar-product', {Products})
}

const renderCrearProducto = (req, res) => {
    res.render('create-product')
}

module.exports =  {
    renderProducts,
    renderCrearProducto }