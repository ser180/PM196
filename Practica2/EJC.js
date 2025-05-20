const persona = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
];

// 1. Usar .find() para buscar a la persona con nombre "Luis"
const personaLuis = persona.find(p => p.nombre === "Luis");
console.log("Persona encontrada:", personaLuis);

// 2. Usar .forEach() para imprimir el nombre de cada persona con su edad
persona.forEach(p => {
    console.log(`${p.nombre} tiene ${p.edad} años`);
});

// 3. Usar .reduce() para sumar todas las edades y obtener un total
const totalEdades = persona.reduce((acumulador, p) => acumulador + p.edad, 0);
console.log("Suma total de edades:", totalEdades);
