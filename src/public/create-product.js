const elFile = document.querySelector('#submitfile')

elFile.addEventListener('submit', async(e) =>{
e.preventDefault()

const rutaArchivo = document.querySelector('#routeFile').value

try {
    const response = await fetch('/api/product/crear-producto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ routeFile: rutaArchivo })
    });

    if (!response.ok) {
        window.alert('Error al crear el producto');
        return;
    }

    window.alert('Producto creado exitosamente');
    window.location.href = '/'; // Cambia esto según tu necesidad

} catch (error) {
    console.error('Error:', error);
    window.alert('Error al crear el producto');
}
})
