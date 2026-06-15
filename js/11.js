let graficaEdad = null;

function ejercicio11(){

    const dia =
        parseInt(
            document.getElementById("diaN").value
        );

    const mes =
        parseInt(
            document.getElementById("mesN").value
        );

    const anio =
        parseInt(
            document.getElementById("anioN").value
        );

    const res =
        document.getElementById("res11");

    const hoy =
        new Date();

    if(
        isNaN(dia) ||
        isNaN(mes) ||
        isNaN(anio)
    ){

        mostrarError(
            "Complete todos los campos."
        );
        return;
    }

    if(
        mes < 1 ||
        mes > 12
    ){

        mostrarError(
            "Mes inválido."
        );
        return;
    }

    const fecha =
        new Date(
            anio,
            mes-1,
            dia
        );

    if(
        fecha.getDate() !== dia ||
        fecha.getMonth() !== mes-1 ||
        fecha.getFullYear() !== anio
    ){

        mostrarError(
            "La fecha ingresada no existe."
        );
        return;
    }

    if(fecha > hoy){

        mostrarError(
            "La fecha no puede ser futura."
        );
        return;
    }

    if(anio < 1900){

        mostrarError(
            "Ingrese un año válido."
        );
        return;
    }

    let edad =
        hoy.getFullYear() -
        anio;

    if(
        hoy.getMonth() < mes-1 ||
        (
            hoy.getMonth() === mes-1 &&
            hoy.getDate() < dia
        )
    ){

        edad--;
    }

    const diasVividos =
        Math.floor(
            (hoy - fecha) /
            (1000*60*60*24)
        );

    const signo =
        obtenerSigno(
            dia,
            mes
        );

    res.innerHTML = `

        <div class="row g-3">

            <div class="col-md-4">

                <div class="card border-0 shadow-sm">

                    <div class="card-body text-center">

                        <h6 class="text-magenta">
                            Edad
                        </h6>

                        <h2>${edad}</h2>

                        <small>Años</small>

                    </div>

                </div>

            </div>

            <div class="col-md-4">

                <div class="card border-0 shadow-sm">

                    <div class="card-body text-center">

                        <h6 class="text-magenta">
                            Signo
                        </h6>

                        <h5>${signo}</h5>

                    </div>

                </div>

            </div>

            <div class="col-md-4">

                <div class="card border-0 shadow-sm">

                    <div class="card-body text-center">

                        <h6 class="text-magenta">
                            Días Vividos
                        </h6>

                        <h5>${diasVividos}</h5>

                    </div>

                </div>

            </div>

        </div>

    `;

    dibujarEdad(edad);
}

function mostrarError(mensaje){

    document.getElementById(
        "res11"
    ).innerHTML = `
        <div class="alert alert-danger">
            ${mensaje}
        </div>
    `;
}
function obtenerSigno(d,m){

    if((m==1&&d>=20)||(m==2&&d<=18))
        return "Acuario";

    if((m==2&&d>=19)||(m==3&&d<=20))
        return "Piscis";

    if((m==3&&d>=21)||(m==4&&d<=19))
        return "Aries";

    if((m==4&&d>=20)||(m==5&&d<=20))
        return "Tauro";

    if((m==5&&d>=21)||(m==6&&d<=20))
        return "Géminis";

    if((m==6&&d>=21)||(m==7&&d<=22))
        return "Cáncer";

    if((m==7&&d>=23)||(m==8&&d<=22))
        return "Leo";

    if((m==8&&d>=23)||(m==9&&d<=22))
        return "Virgo";

    if((m==9&&d>=23)||(m==10&&d<=22))
        return "Libra";

    if((m==10&&d>=23)||(m==11&&d<=21))
        return "Escorpio";

    if((m==11&&d>=22)||(m==12&&d<=21))
        return "Sagitario";

    return "Capricornio";
}
function dibujarEdad(edad){

    const ctx =
        document
        .getElementById(
            "graficaEdad"
        )
        .getContext("2d");

    if(graficaEdad){

        graficaEdad.destroy();
    }

    graficaEdad =
        new Chart(ctx,{

        type:"doughnut",

        data:{

            labels:[
                "Edad",
                "Meta 100 años"
            ],

            datasets:[{

                data:[
                    edad,
                    100-edad
                ],

                backgroundColor:[
                    "#ff69b4",
                    "#ffd6e8"
                ]

            }]
        },

        options:{

            cutout:"70%",

            plugins:{

                legend:{
                    position:"bottom"
                }
            }
        }
    });
}