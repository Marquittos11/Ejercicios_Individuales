let graficaNota = null;

function ejercicio8() {

    const nota =
        parseFloat(
            document.getElementById("nota").value
        );

    const res =
        document.getElementById("res8");

    if (
        isNaN(nota) ||
        nota < 0 ||
        nota > 100 ||
        !Number.isInteger(nota)
    ) {

        res.innerHTML = `
            <div class="alert alert-danger mb-0">
                Ingrese una nota válida entre 0 y 100.
            </div>
        `;

        return;
    }

    let categoria = "";
    let color = "";

    if (nota >= 95) {

        categoria = "Excelente";
        color = "#198754";

    } else if (nota >= 90) {

        categoria = "Muy Bien";
        color = "#20c997";

    } else if (nota >= 80) {

        categoria = "Bien";
        color = "#0dcaf0";

    } else if (nota >= 60) {

        categoria = "Regular";
        color = "#ffc107";

    } else {

        categoria = "Insuficiente";
        color = "#dc3545";
    }

    res.innerHTML = `

        <div class="row g-3">

            <div class="col-md-6">

                <div class="card border-0 shadow-sm">

                    <div class="card-body text-center">

                        <h6 class="text-magenta">
                            Nota
                        </h6>

                        <h2 class="fw-bold">
                            ${nota}
                        </h2>

                    </div>

                </div>

            </div>

            <div class="col-md-6">

                <div class="card border-0 shadow-sm">

                    <div class="card-body text-center">

                        <h6 class="text-magenta">
                            Categoría
                        </h6>

                        <h2 style="color:${color}">
                            ${categoria}
                        </h2>

                    </div>

                </div>

            </div>

        </div>

    `;

    dibujarGraficaNota(
        nota,
        categoria,
        color
    );
}

function dibujarGraficaNota(
    nota,
    categoria,
    color
){

    const canvas =
        document.getElementById(
            "graficaNota"
        );

    if(!canvas) return;

    const ctx =
        canvas.getContext("2d");

    if(graficaNota){

        graficaNota.destroy();
    }

    graficaNota = new Chart(ctx,{

        type:"doughnut",

        data:{

            labels:[
                "Nota",
                "Restante"
            ],

            datasets:[{

                data:[
                    nota,
                    100-nota
                ],

                backgroundColor:[
                    color,
                    "#ffd6e8"
                ],

                borderWidth:0

            }]
        },

        options:{

            responsive:true,

            cutout:"70%",

            plugins:{

                legend:{
                    position:"bottom"
                },

                title:{
                    display:true,
                    text:categoria
                }
            }
        },

        plugins:[{

            id:"textoCentro",

            afterDraw(chart){

                const {ctx} = chart;

                const meta =
                    chart.getDatasetMeta(0);

                if(!meta.data.length) return;

                const x =
                    meta.data[0].x;

                const y =
                    meta.data[0].y;

                ctx.save();

                ctx.textAlign =
                    "center";

                ctx.font =
                    "bold 28px Segoe UI";

                ctx.fillStyle =
                    "#8b1458";

                ctx.fillText(
                    nota,
                    x,
                    y + 10
                );

                ctx.restore();
            }
        }]
    });
}