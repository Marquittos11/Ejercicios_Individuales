let graficaSol = null;

function ejercicio5() {

    const h =
        parseFloat(document.getElementById("h5").value);

    const s =
        parseFloat(document.getElementById("s5").value);

    const res =
        document.getElementById("res5");

    if (
        isNaN(h) ||
        isNaN(s) ||
        h <= 0 ||
        s <= 0
    ) {

        res.innerHTML = `
            <div class="alert alert-danger mb-0">
                Ingrese valores positivos válidos.
            </div>
        `;

        return;
    }

    const rad = Math.atan(h / s);

    const gradosDecimales =
        rad * (180 / Math.PI);

    const grados =
        Math.floor(gradosDecimales);

    const restoMinutos =
        (gradosDecimales - grados) * 60;

    const minutos =
        Math.floor(restoMinutos);

    const segundos =
        Math.round(
            (restoMinutos - minutos) * 60
        );

    res.innerHTML = `

        <div class="alert alert-success mb-0">

            <h6 class="fw-bold mb-3">
                Ángulo de incidencia solar
            </h6>

            <h4 class="text-success fw-bold">

                ${grados}°
                ${minutos}'
                ${segundos}"

            </h4>

        </div>

    `;

    dibujarSol(h,s,gradosDecimales);
}

function dibujarSol(h,s,angulo){

    const canvas =
        document.getElementById("graficaSol");

    if(!canvas) return;

    const ctx =
        canvas.getContext("2d");

    if(graficaSol){

        graficaSol.destroy();
    }

    graficaSol = new Chart(ctx, {

        type: "scatter",

        data: {

            datasets: [

                {
                    label: "Triángulo",

                    data: [

                        {x:0,y:0},
                        {x:s,y:0},
                        {x:0,y:h},
                        {x:0,y:0}

                    ],

                    showLine:true,

                    borderColor:"#ff4fa3",

                    backgroundColor:
                    "rgba(255,79,163,0.25)",

                    fill:true,

                    pointRadius:6
                }
            ]
        },

        options: {

            responsive:true,

            plugins:{
                legend:{
                    display:false
                }
            },

            scales:{

                x:{
                    title:{
                        display:true,
                        text:"Sombra = " + s
                    }
                },

                y:{
                    title:{
                        display:true,
                        text:"Altura = " + h
                    }
                }
            }
        },

        plugins:[{

            id:"etiquetas",

            afterDraw(chart){

                const ctx =
                    chart.ctx;

                const meta =
                    chart.getDatasetMeta(0);

                const p =
                    meta.data;

                ctx.save();

                ctx.font =
                    "bold 16px Segoe UI";

                ctx.fillStyle =
                    "#8b1458";

                ctx.fillText(
                    "☀",
                    p[2].x + 40,
                    p[2].y - 30
                );

                ctx.fillText(
                    h,
                    p[2].x - 30,
                    (p[2].y+p[0].y)/2
                );

                ctx.fillText(
                    s,
                    (p[0].x+p[1].x)/2,
                    p[0].y + 25
                );

                ctx.fillText(
                    angulo.toFixed(2)+"°",
                    p[0].x + 30,
                    p[0].y - 15
                );

                ctx.restore();
            }
        }]
    });
}