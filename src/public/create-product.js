const elFile = document.querySelector('#submitfile')

elFile.addEventListener('submit', (e) =>{
e.preventDefault()

const rutaArchivo = document.querySelector('#routeFile').value

    fetch('/api/product/crear-producto', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ routeFile: rutaArchivo })
    })
        
        .then((res) => {
            if (!res.ok) {
                window.alert("Error al crear el Producto")
                return
            }
            window.alert("Producto creado exitosamente")
        })
    });
