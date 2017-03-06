function haceAlgo(callbackPaso1, callbackPaso2, callbackTermino){
    //algo aca
    callbackPaso1('paso 1');

    //sigo... algo aca
    callbackPaso2('paso 2');

    //sigo ... y termino
    callbackTermino('terminó');
}

haceAlgo(
    function(quePaso){
       console.log(quePaso);
    },
    function(quePaso){
       console.log(quePaso);
    },
    function(queHizo){
       console.log(queHizo);
    });
