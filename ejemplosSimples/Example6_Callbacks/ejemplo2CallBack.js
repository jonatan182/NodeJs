//Podemos enviar y recibir parámetros
function haceAlgo(miCallback){
  miCallback('cualquier cosa');//Ejecutamos la funcion que nos llego como parametro, y le pasamos como parametro un string ya que esa funcion recibia un parametro "queHizo
}

haceAlgo(function(queHizo){//Invocamos a la funcion "haceAlgo", esta rebibe un parametro "queHizo", pasandole como parametro una funcion anonima.
  console.log('terminó de hacer '+ queHizo);
});
