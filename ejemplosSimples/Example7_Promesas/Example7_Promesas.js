//Las Promesas Son Una Manera Alternativa De Modelar Asincronia, se esta convirtiendo en el standar para hacer asincronia
//Construccion explicita del flujo de ejecucion
//Manejo de errores mas controlado, tienen un solo metodo para el manejo de errores.
//Combinacion de diferentes flujos asincronos
//la interfaz de las promsesas es, resuelven o rechazan el codigo que estamos ejecutando, Las Promesas tienen dos partes, el codigo que se ejecuta y el diferido

const fs = require('fs');//Modulo Para Leer Los Archivos

let promise = new Promise((resolve, reject)=>{//deinimos promesa, tiene como atributo una funcion anonima
    fs.readFile('archivo.txt',(error,content)=>{//dentro de la promesa ejecutamos la funcion para leer archivo
      return(error) ? reject(new Error('El Archivo No Se Pudo Leer')) : resolve(content);//si hay un error se retorna un rejeact(Catch), si no hay un error se retorna un resolve(Then)
    });
});

console.log('\nAbriendo Archivo');

promise
  .then(promiseData => console.log(promiseData.toString()))//Definimos que hacer cuando la promesa es resulta/cumplida "resolve" con la llamada al metodo then(). promiseData es el content
  .catch(error => console.log(error.message));//Definimos que hacer cuando la promesa es rechazada "reject"

console.log('\nHaciendo Otra Cosa\n');

console.log(process.uptime());//Para mirar el tiempo que tarda la ejecucion del archivo
