let graficaVuelo = null;

function ejercicio9(){

    const n =
        parseInt(
            document.getElementById("tVuelo").value
        );

    const t =
        parseInt(
            document.getElementById("tActual").value
        );

    const res =
        document.getElementById("res9");

    if(

        isNaN(n) ||
        isNaN(t) ||

        n <= 0 ||

        t < 0 ||

        !Number.isInteger(n) ||

        !Number.isInteger(t)

    ){

        res.innerHTML = `
            <div class="alert alert-danger mb-0">
                Ingrese valores enteros válidos.
            </div>
        `;

        return;
    }

    const aterrizaje = 15/60;

    const total =
        10 + n + aterrizaje;

    let fase = "";
    let color = "";

    if(t <= 10){

        fase = "Despegue";
        color = "#0dcaf0";

    }
    else if(t <= 10+n){

        fase = "Vuelo Estable";
        color = "#198754";

    }
    else if(t <= total){

        fase = "Aterrizaje";
        color = "#ffc107";

    }
    else{

        fase = "Vuelo Finalizado";
        color = "#dc3545";
    }

    const horas =
        Math.floor(total/60);

    const minutos =
        Math.floor(total%60);

    const segundos =
        Math.round(
            (total%1)*60
        );

    res.innerHTML = `

        <div class="row g-3">

            <div class="col-md-6">

                <div class="card border-0 shadow-sm">

                    <div class="card-body text-center">

                        <h6 class="text-magenta">
                            Fase Actual
                        </h6>

                        <h3 style="color:${color}">
                            ${fase}
                        </h3>

                    </div>

                </div>

            </div>

            <div class="col-md-6">

                <div class="card border-0 shadow-sm">

                    <div class="card-body text-center">

                        <h6 class="text-magenta">
                            Duración Total
                        </h6>

                        <h4>
                            ${horas}h
                            ${minutos}m
                            ${segundos}s
                        </h4>

                    </div>

                </div>

            </div>

        </div>

    `;

    dibujarVuelo(
        n,
        t,
        total
    );
}

function dibujarVuelo(n,t,total){

    const canvas =
        document.getElementById("graficaVuelo");

    if(!canvas) return;

    const ctx =
        canvas.getContext("2d");

    if(graficaVuelo){

        graficaVuelo.destroy();
    }

    graficaVuelo = new Chart(ctx,{

        type:"bar",

        data:{

            labels:[
                "Despegue",
                "Vuelo",
                "Aterrizaje"
            ],

            datasets:[{

                data:[
                    10,
                    n,
                    0.25
                ],

                backgroundColor:[
                    "#ff9ecf",
                    "#ff69b4",
                    "#8b1458"
                ]

            }]
        },

        options:{

            indexAxis:"y",

            responsive:true,

            plugins:{

                legend:{
                    display:false
                }
            }
        }
    });
}