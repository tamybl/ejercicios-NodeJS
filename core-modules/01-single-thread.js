'use strict'

function singleThread () {
  console.log('-------------------------------------');
  console.log('El proceso de node.js')
  console.log('Id del Proceso ........... ' + process.pid)
  console.log('Título ................... ' + process.title)
  console.log('Directorio de Node ....... ' + process.execPath)
  console.log('Directorio actual ........ ' + process.cwd())
  console.log('Versión de Node .......... ' + process.version)
  console.log('Versiones dependencias ... ' + process.versions)
  console.log('Plataforma (S.O) ......... ' + process.platform)
  console.log('Arquitectura ............. ' + process.arch)
  console.log('Tiempo activo de node .... ' + process.uptime())
  console.log('Argumentos del Proceso ... ' + process.argv)
  console.log('-------------------------------------');
}

singleThread()