let Ejercicio1 = function(texto,bool,cadenaDenumero,alerta)
{
    if(typeof(texto) != "string") /*Ojo porque si uno no coincide con el esperado no debemos continuar haciendo las otras acciones*/
    {
        console.log("El para metro es incorrecto");
    }
    if(typeof(bool) != "boolean")
    {
        console.log("El para metro es incorrecto");
    }
    if(typeof(cadenaDenumero) != "object")
    {
        console.log("El para metro es incorrecto");
    }

    console.log(texto);
    if(bool == true)
    {
        let producto = 1;
        cadenaDenumero.forEach(element => producto *= element );

        if(producto > 100)
        {
            var correcto = true;
            let check2 = texto.split('');
            
            for(var i = 0 ; i < check2.length; i++)
            {
                if(check2[i] == 'a')
                {   
                    console.log("Te he pillado has usasdo la 'a' ");
                    correcto = false;
                    break;
                }
            }

            if(correcto == true)
            {
                console.log("nice, no has usado ninguna 'a' ");
            }

        }
        else
        {
            console.log("El resultado de tu array "+producto+" es insuficiente")
        }

    }
    else
    {
        alerta();
    }
}

Ejercicio1("papapa",true,[20,30,40,60],()=>{alert("Se acabo el juego")});

Ejercicio1("lolo",true,[1,2,4,6]);

Ejercicio1("lololo",false,[20,30,40,60]);
