let Ejercicio3 = function()
{
    let loopup = true;
    var contador = 0;
    let Arraynumero = [];
    let ArrayMultiplos3 =[];

    while(loopup == true)
    {
        let valor = prompt("Introduce un numero");
        let loopdown = isNaN(valor);
        if(loopdown == true)
        {
            loopup = false;
            valor = 0;
        }
        contador++;
        
        if(contador%2 != 0)
        {
            let numero =+ valor;
            Arraynumero[contador] = numero;
        }
        else
        {
            let numero = Number(valor)
            Arraynumero[contador] = numero;
        }
        
    }
    console.log(Arraynumero.sort(function(a, b){return a - b}));

    for(var i = 0; i < Arraynumero.length; i++) /*Esto es un filter*/
    {
        let multiplo3 = Arraynumero[i];

        if(multiplo3%3 == 0)
        {
            ArrayMultiplos3[i] = multiplo3;
        }
        
    }
    console.log(ArrayMultiplos3.sort(function(a, b){return a - b}));
}

Ejercicio3();
