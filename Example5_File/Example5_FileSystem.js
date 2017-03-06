var http = require("http"),
    fs = require("fs");//Libreria o modula para leer archivos

    http.createServer((request,response)=>{
      //Retorna El Contenido Del Archivo
      //Lo leemos con readFileSync Para Entender la programacion sincrona "Sync", Seespera a que termine de procesar el archivo html para poder proseguir, es decir si el archivo index.html es demaciado pesado se quedara esperando a que termine, en cambio de la manera Asincrona es lo contrario.
      //var html = fs.readFileSync("./index.html");//Primer parametro patch, "."Para empezar a buscarlo desde el direcotio raiz, es decir desde la misma carpeta e donde esta este proyecto Example5_FileSystem
      //De Forma Asincrona
      var html = fs.readFile("./index.html",function(err, html){//Si el archivo index.html tiene bastante contenido y es demorado en procesar, no importa por que el codigo se seguira ejecutando sin esperar a que termine de procesar el archivo index.html

      });
      response.write(html);//Escribimos ese archivo al navegador
      response.end();
    }).listen(8003);
