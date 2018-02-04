/*
'use strict' 
var http = require('http'); // se carga modulo http

http.createServer(function (request, response) { // peticion y respuesta
  response.writeHead(200, {'Content-Type': 'text/plain'}) // Mandar a la cabecera de http, 200 es cuando el servidor responde
  response.end('Hello World!');
}).listen(1337, "127.0.0.1") // Puerto por donde escucha que por defecto es 8080 *Investigar de puertos

console.log('Server 127.0.0.1:1337') 
*/

'use strict'
var http = require('http'); // se carga modulo http

function webServer (req, res) { // peticion y respuesta
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('<h1>Hello World!</h1>'); // Mandar a la cabecera de http, 200 es cuando el servidor responde. El metodo end termina la ejecucion
}

http
  .createServer(webServer)
  .listen(3000, 'localhost') // Puerto por donde escucha que por defecto es 8080 *Investigar de puertos. Muchas desarrolladores utilizan el puerto 3000 por convencio

console.log('Corriendo en Server localhost:3000')