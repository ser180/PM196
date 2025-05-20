
const producto = [
    {nombre: "Laptop", precio: "12000"},
    {nombre: "Mouse", precio: "250"},
    {nombre: "Teclado", precio: "750"},
    {nombre: "Monitor", precio: "3000"}
];

// Filtrar productos cuyo precio sea mayor a 1000
// Usar map para crear un nuevo arreglo con lo solicitado

const filtro = producto
    .filter(item => Number(item.precio) > 1000)
    .map(item => item.nombre);

console.log({filtro});
