let Ejercicio2 = function(...informacionAlumno)
{
    if(informacionAlumno.length == 0)
    {
        console.log("No hay datos para mostrar");
    }
    else
    {
        for(var i = 0; i < informacionAlumno.length; i++)
        {
            let list = informacionAlumno[i];
            let head = "Nombre: "+list[0]+" -- "+"Curso: "+list[1] + "-- Asignaturas: ";
            for(var j = 2; j < list.length; j++) /*Esto es un join*/
            {
                head += list[j]+"/";
            }
            console.log(head);
        }
    }
}

Ejercicio2(["Fran","DAMA","BD","Fol","Programacion"],["Pepe","DAMB","Programación","ED"]);
