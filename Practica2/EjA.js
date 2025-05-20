// Objeto
const persona = {
    nombre: "Sergio Olmedo",
    edad: 20,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

//Extraer valores nombre, edad y ciudad usando desestructuración

//desestructuración
const {nombre, edad, direccion:{ciudad}} = persona;

//Mensaje
console.log("Me llamo "+ nombre, "tengo "+edad, "años y vivo en "+ ciudad)
