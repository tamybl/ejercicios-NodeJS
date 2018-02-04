/* 
Streams 
  Chorros de informacion que es transmiten en pedazos (Chunks)
  3 tipos de streams: Lectura/ Escritura / Duplex (Lectura y Escritura )
  Instancias EventEmitter
  Acceso Asincrono
  Es raro crear streams directamente, pero muchos recursos nos ofrecen esta interfaz
  Detras de muchos mecanismos de Node.JS
    stdin/stdout
    request de HTTP
    Sockets
    Manipulacion de ficheros/imagenes
*/

'use strict'

var fs = require('fs'),
    readStream = fs.createReadStream('assets/names.txt'), // chorro de informacion de lectura
    writeStream = fs.createWriteStream('assets/names_copy.txt')

/* 
readStream.pipe(writeStream)

readStream.on('data', function (chunk) {
  console.log('He leido ' + chunk.length + ' caracteres' )
}) // Evento mientras haya datos = data

readStream.on('end', function () {
  console.log('Termine de leer el archivo')
})
*/

readStream.pipe(writeStream)

readStream
  .on('data', function (chunk) {
  console.log('He leido ' + chunk.length + ' caracteres' )
  }) // Evento mientras haya datos = data 
  .on('end', function () {
  console.log('Termine de leer el archivo')
  })