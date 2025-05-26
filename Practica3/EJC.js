function obtenerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos recibidos desde la API simulada");
        }, 2000); // espera 2 segundos
    });
}

async function mostrarDatos() {
    const datos = await obtenerDatos();
    console.log(datos);
}

mostrarDatos();
