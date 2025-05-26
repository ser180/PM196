function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    });
}

// Pruebas
verificarUsuario("admin")
    .then(console.log)     // Acceso concedido
    .catch(console.error);

verificarUsuario("usuario")
    .then(console.log)
    .catch(console.error); // Acceso denegado
