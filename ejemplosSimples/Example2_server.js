var http = require("http"); //Importamos Librerias "Modulos", Estamos Importanto La Libreria "Modulo" http, http nos sirbe para comunicarnos a travez del protocolo http

//Creacion Primer Servidor Con Node js
/*
var manejador = function(request, response){
  console.log("Hola mundo");//Para Impriimr mensaje por consola
  response.writeHead(200, {"Content-Type": "text/html"});//Para Dar Formato A lo que se enviara al navegador, decimos que el contenido sera de de tipoo text/html
  response.write("Hola Mundo");//Para Imiprimir mensaje en el navegar
  response.end();//Para Cerrar La Conexion, es decir para indicar al servidor node que no siga espeando peticiones del navegador. Y de esa manera el navegador sabra que ya termino de extraer toda la pagina y no seguira en espera
  response.end("Hola Mundo");//Para cerrar la conexion y enviarle al navegador un String de hola mundo el cual se pintara en el navegador.
}
var servidor = http.createServer(manejador);//se ejecuta cada ves que el navegador hace una peticion a nuestro servidor node, retorna un objeto que ejerce "Fungir" como servidor
servidor.listen(8881);//el servidor tiene un metodo llamado listen, endonde se le indica el puerto de escucha a la speticiones http
*/
//Ejemplo Mas Practico Creando La Funcion Directa Como Parametro
http.createServer(function(request, response){//funcion que recibe como parametro una funcion, esta funcion se ejecuta cada ves que el navegador hace una peticion a nuestro servidor node
  response.writeHead(200, {"Content-Type": "text/html"});//Para Dar Formato A lo que se enviara al navegador, decimos que el contenido sera de de tipo text/html, y el Status es 200 'exitoso'
  response.write("Hola Mundo Server Node");//Mensaje Que Se Mostrara
  response.end();//Para Cerrar La Conexion
}).listen(8888);//Puerto El Cual va A estar Escuchando
//Para Ejecutar El Archivo, Tenemos Que dirijirnos por consola y colocar node server.js, y luego en el navegador a localhost:8881
