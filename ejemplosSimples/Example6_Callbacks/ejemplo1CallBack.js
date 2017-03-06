// Node Js Maneja La Asincronia Utilizando Callbacks
//La Callback es una pieza de codigo ejecutable que se pasa como parametro a otro codigo
//Con Callback estamos logrando un comportamiento asincrono, es decir, de no bloqueo
//Las Callback son continuaciones explicitas como funciones, y que nos dicen que cuando termines algo ejecuto otra cosa como promesa de que ya termine
function haceAlgo(miCallback){
    console.log("Hace Algo ");
    //hago algo y llamo al callback avisando que terminé
    miCallback();
}

haceAlgo(function(){//Invocamos a la funcion haceAlgo y pasamos la funcion anomina como parametro
   console.log('terminó de hacer algo');
});
