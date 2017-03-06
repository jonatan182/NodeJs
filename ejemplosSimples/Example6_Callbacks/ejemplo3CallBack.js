//También lo podemos utilizar declarando funciones nombradas y separando la lógica:
function haceAlgo(callbackPaso1, callbackPaso2, callbackTermino){
    //algo aca
    callbackPaso1('paso 1');//Ejecutamos La primera funcion que llego como parametro, pasandole como parametro 'paso 1', esta funion imprime por consola 'paso 1'

    //sigo... algo aca
    callbackPaso2('paso 2');

    //sigo ... y termino
    callbackTermino('terminó');
}

function paso1(quePaso){
     console.log(quePaso);
}

function paso2(quePaso){
     console.log(quePaso);
}

function termino(queHizo){
     console.log(queHizo);
}

haceAlgo(paso1, paso2, termino);//Invocamos a la funcion haceAlgo y pasamos las funciones como parametros
