const express = require('express');
const path = require('path');

require('ejs');

const app = express();

//Routes
app.use('/api', require('./src/router/routes.js'))
app.use('/',require('./src/router/render.routes.js'));
app.use('/api/product',require('./src/router/product.routes.js'));  


//Middlewares
app.use(express.json());
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "src", "public")))



app.listen(3000)
console.log('Server on port', 3000)