const http = require("http");//Importamos Librerias "Modulos", Estamos Importanto La Libreria "Modulo" http, http nos sirbe para comunicarnos a travez del protocolo http
const hostname = '127.0.0.1';//Creacion Constante Con el nombre del host
const port = 3000;//creaicon constante con el puerto es decir que no se puede modificar.
const port2 = 3001;//Creacion contante con segundo puerto.

//Creacion Primer Servidor que se ejecutara en el puerto port2
const server = http.createServer(function(req,res){// Creamos El Servidor. Los Caracteres "=>" Se remplaza por function(req,res), y se coloca despues de los atributos de la funcion "
  res.setHeader('Content-Type','text/html');
  res.end("Hello World\n"+ `http://${hostname}`);
});

server.listen(port,hostname, () =>{
  console.log(`Server running at http://${hostname}:${port}/`);//Para impriir por consola, imprimirmos el hostname y el port, tiene que estar entre el caracter `.
});

//Creacion Segundo Server que se ejecutara en el puerto port2
const server2 = http.createServer((req,res)=>{// Creamos El Servidor. Los Caracteres "=>" Se remplaza por function(req,res), y se coloca despues de los atributos de la funcion "
  res.setHeader('Content-Type','text/html');
  res.end("Hello World\n"+ `http://${hostname}:${port2}`);
});

server2.listen(port2,hostname, () =>{
  console.log(`Server running at http://${hostname}:${port2}/`);//Para impriir por consola, imprimirmos el hostname y el port, tiene que estar entre el caracter `.
});
