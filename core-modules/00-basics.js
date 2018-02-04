/*Organizacion del Codigo JS

Librerias/Modulos
constantes
objetos/variables
funciones
eventos
ejecuciones

  Usar CamelCase
    Cuando una instrucciones tenga una sola palabra, va en minusculas p.e require*/

//  A la hora de trabajar JS, utiliza el modo estricto ('use strict') // modo para trabajar con buenas practicas

'use strict'
console.log('Hola, este es mi primer mensaje en NodeJS');
console.log(4+13)

console.log(global)

setInterval(function () {
  console.log('Hola, NodeJS :3')
}, 1000)
// Objetos globales: global, process, console, class:Buffer, require(), 

// Como parar un proceso en Loop ctrl+C