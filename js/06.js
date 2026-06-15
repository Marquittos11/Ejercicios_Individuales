let graficaResistencia = null;

function ejercicio6() {

    const r1 =
        parseFloat(document.getElementById("r1").value);

    const r2 =
        parseFloat(document.getElementById("r2").value);

    const res =
        document.getElementById("res6");

    if (
        isNaN(r1) ||
        isNaN(r2) ||
        r1 <= 0 ||
        r2 <= 0
    ) {

        res.innerHTML = `
            <div class="alert alert-danger mb-0">
                Ingrese valores positivos válidos.
            </div>
        `;

        return;
    }

    const req =
        (r1 * r2) / (r1 + r2);

    res.innerHTML = `

        <div class="row g-3">

            <div class="col-md-4">

                <div class="card border-0 shadow-sm">

                    <div class="card-body text-center">

                        <h6 class="text-magenta">
                            R1
                        </h6>

                        <h4>${r1} Ω</h4>

                    </div>

                </div>

            </div>

            <div class="col-md-4">

                <div class="card border-0 shadow-sm">

                    <div class="card-body text-center">

                        <h6 class="text-magenta">
                            R2
                        </h6>

                        <h4>${r2} Ω</h4>

                    </div>

                </div>

            </div>

            <div class="col-md-4">

                <div class="card border-0 shadow-sm">

                    <div class="card-body text-center">

                        <h6 class="text-magenta">
                            Req
                        </h6>

                        <h4 class="fw-bold text-success">
                            ${req.toFixed(4)} Ω
                        </h4>

                    </div>

                </div>

            </div>

        </div>
    `;

    dibujarCircuito(r1,r2,req);
}

function dibujarCircuito(r1,r2,req){

    const canvas =
        document.getElementById("graficaResistencia");

    if(!canvas) return;

    const ctx =
        canvas.getContext("2d");

    if(graficaResistencia){

        graficaResistencia.destroy();
    }

    graficaResistencia = new Chart(ctx,{

        type:"scatter",

        data:{
            datasets:[]
        },

        options:{
            responsive:true,
            plugins:{
                legend:{
                    display:false
                }
            },
            scales:{
                x:{
                    display:false,
                    min:0,
                    max:10
                },
                y:{
                    display:false,
                    min:0,
                    max:10
                }
            }
        },

        plugins:[{

            id:"circuito",

            afterDraw(chart){

                const ctx = chart.ctx;

                ctx.save();

                ctx.lineWidth = 3;
                ctx.strokeStyle = "#ff4fa3";

                /* Línea izquierda */
                ctx.beginPath();
                ctx.moveTo(80,120);
                ctx.lineTo(180,120);
                ctx.stroke();

                /* Rama superior */
                ctx.beginPath();
                ctx.moveTo(180,120);
                ctx.lineTo(180,60);
                ctx.lineTo(380,60);
                ctx.lineTo(380,120);
                ctx.stroke();

                /* Rama inferior */
                ctx.beginPath();
                ctx.moveTo(180,120);
                ctx.lineTo(180,180);
                ctx.lineTo(380,180);
                ctx.lineTo(380,120);
                ctx.stroke();

                /* Salida */
                ctx.beginPath();
                ctx.moveTo(380,120);
                ctx.lineTo(500,120);
                ctx.stroke();

                ctx.font =
                    "bold 16px Segoe UI";

                ctx.fillStyle =
                    "#8b1458";

                ctx.fillText(
                    `R1 = ${r1} Ω`,
                    240,
                    50
                );

                ctx.fillText(
                    `R2 = ${r2} Ω`,
                    240,
                    200
                );

                ctx.fillStyle =
                    "#198754";

                ctx.font =
                    "bold 18px Segoe UI";

                ctx.fillText(
                    `Req = ${req.toFixed(4)} Ω`,
                    180,
                    250
                );

                ctx.restore();
            }
        }]
    });
}