/* 
BUFFERS
  Una tira de bytes (datos binarios)
  Similar a una array de enteros
  Tamaño fijo
  Manipular datos directamente
    Sockets
    Streams
    Implementar protocolos complejos
    manipulacion de ficheros/imagenes
    Criptografia

*/

'use strict'

var buf = new Buffer(100), // Lo que esta dentro de Buffer indica el Nro de posiciones
    buf2 = new Buffer(26),
    str = '\u00bd + \u00bc = \u00be'

buf.write('abcd', 0, 4, 'ascii')
console.log(buf, 
            buf.toString('ascii'),
            str,
            str.length)

// Buffer en el backend es eqivalente al objeto en el Front end