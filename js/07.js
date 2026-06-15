let graficaGimnasta = null;

function ejercicio7() {

    const notas = [

        parseFloat(document.getElementById("j1").value),
        parseFloat(document.getElementById("j2").value),
        parseFloat(document.getElementById("j3").value),
        parseFloat(document.getElementById("j4").value),
        parseFloat(document.getElementById("j5").value)

    ];

    const res =
        document.getElementById("res7");

    if (
        notas.some(isNaN) ||
        notas.some(n => n < 0 || n > 10)
    ) {

        res.innerHTML = `
            <div class="alert alert-danger mb-0">
                Ingrese puntuaciones entre 0 y 10.
            </div>
        `;

        return;
    }

    const ordenadas =
        [...notas].sort((a,b)=>a-b);

    const menor =
        ordenadas[0];

    const mayor =
        ordenadas[4];

    const validas =
        ordenadas.slice(1,4);

    const promedio =
        validas.reduce((a,b)=>a+b,0)/3;

    res.innerHTML = `

        <div class="row g-3">

            <div class="col-md-6">

                <div class="card border-0 shadow-sm">

                    <div class="card-body text-center">

                        <h6 class="text-danger">
                            Nota Eliminada (Menor)
                        </h6>

                        <h3>${menor}</h3>

                    </div>

                </div>

            </div>

            <div class="col-md-6">

                <div class="card border-0 shadow-sm">

                    <div class="card-body text-center">

                        <h6 class="text-danger">
                            Nota Eliminada (Mayor)
                        </h6>

                        <h3>${mayor}</h3>

                    </div>

                </div>

            </div>

            <div class="col-12">

                <div class="card border-0 shadow-sm">

                    <div class="card-body text-center">

                        <h6 class="text-magenta">
                            Notas Válidas
                        </h6>

                        <h4>
                            ${validas.join(" - ")}
                        </h4>

                    </div>

                </div>

            </div>

            <div class="col-12">

                <div class="card border-0 shadow-sm">

                    <div class="card-body text-center">

                        <h6 class="text-success">
                            Puntuación Final
                        </h6>

                        <h2 class="fw-bold">
                            ${promedio.toFixed(2)}
                        </h2>

                    </div>

                </div>

            </div>

        </div>

    `;

    dibujarGraficaGimnasta(
        notas,
        promedio
    );
}

function dibujarGraficaGimnasta(notas,promedio){

    const canvas =
        document.getElementById(
            "graficaGimnasta"
        );

    if(!canvas) return;

    const ctx =
        canvas.getContext("2d");

    if(graficaGimnasta){

        graficaGimnasta.destroy();
    }

    graficaGimnasta = new Chart(ctx,{

        type:"bar",

        data:{

            labels:[
                "Juez 1",
                "Juez 2",
                "Juez 3",
                "Juez 4",
                "Juez 5"
            ],

            datasets:[{

                label:"Puntuación",

                data:notas,

                backgroundColor:[
                    "#ff9ecf",
                    "#ff9ecf",
                    "#ff9ecf",
                    "#ff9ecf",
                    "#ff9ecf"
                ],

                borderColor:"#8b1458",

                borderWidth:2

            }]
        },

        options:{

            responsive:true,

            plugins:{

                legend:{
                    display:false
                }
            },

            scales:{

                y:{

                    beginAtZero:true,

                    max:10
                }
            }
        }
    });
}