let graficaEcuacion = null;

function ejercicio12(){

    const a =
        parseFloat(
            document.getElementById("a12").value
        );

    const b =
        parseFloat(
            document.getElementById("b12").value
        );

    const c =
        parseFloat(
            document.getElementById("c12").value
        );

    const res =
        document.getElementById("res12");

    if(
        isNaN(a) ||
        isNaN(b) ||
        isNaN(c)
    ){

        mostrarError12(
            "Complete todos los coeficientes."
        );

        return;
    }

    if(
        a===0 &&
        b===0 &&
        c===0
    ){

        mostrarError12(
            "La ecuación es indeterminada."
        );

        return;
    }

    if(
        a===0 &&
        b===0
    ){

        mostrarError12(
            "La ecuación no tiene solución."
        );

        return;
    }

    if(a===0){

        const x =
            -c/b;

        res.innerHTML = `
        <div class="alert alert-info">
            El coeficiente <b>a</b> es 0, por lo tanto la ecuación no es cuadrática sino lineal.
        </div>

        <div class="resultado-card mt-3">
            <h5 class="text-magenta">Solución</h5>
            <h3>x = ${(-c/b).toFixed(4)}</h3>
        </div>
        `;

        return;
    }

    const delta =
        b*b - 4*a*c;

    let html = `
        <div class="text-center mb-3">

            <h5 class="text-magenta">
                Δ = ${delta.toFixed(4)}
            </h5>

        </div>
    `;

    if(delta < 0){

        html += `

        <div class="alert alert-warning">

            La ecuación no posee raíces reales.

        </div>

        `;

        res.innerHTML = html;

        dibujarParabola(a,b,c);

        return;
    }

    if(delta === 0){

        const x =
            -b/(2*a);

        html += `

        <div class="card border-0 shadow-sm">

            <div class="card-body text-center">

                <h6>Raíz Doble</h6>

                <h2>${x.toFixed(4)}</h2>

            </div>

        </div>

        `;

        res.innerHTML = html;

        dibujarParabola(a,b,c);

        return;
    }

    const x1 =
        (-b + Math.sqrt(delta))
        /(2*a);

    const x2 =
        (-b - Math.sqrt(delta))
        /(2*a);

    html += `

    <div class="row g-3">

        <div class="col-md-6">

            <div class="card border-0 shadow-sm">

                <div class="card-body text-center">

                    <h6>Raíz x₁</h6>

                    <h3>
                        ${x1.toFixed(4)}
                    </h3>

                </div>

            </div>

        </div>

        <div class="col-md-6">

            <div class="card border-0 shadow-sm">

                <div class="card-body text-center">

                    <h6>Raíz x₂</h6>

                    <h3>
                        ${x2.toFixed(4)}
                    </h3>

                </div>

            </div>

        </div>

    </div>

    `;

    res.innerHTML = html;

    dibujarParabola(a,b,c);
}
function dibujarParabola(a,b,c){

    const ctx =
        document
        .getElementById(
            "graficaEcuacion"
        )
        .getContext("2d");

    if(graficaEcuacion){

        graficaEcuacion.destroy();
    }

    const puntos = [];

    for(
        let x=-20;
        x<=20;
        x+=0.5
    ){

        puntos.push({

            x:x,

            y:
            a*x*x +
            b*x +
            c

        });
    }

    graficaEcuacion =
        new Chart(ctx,{

        type:"line",

        data:{

            datasets:[{

                label:"Parábola",

                data:puntos,

                borderColor:"#8b1458",

                backgroundColor:"#ff9ecf",

                tension:0.3,

                fill:false

            }]
        },

        options:{

            responsive:true,

            scales:{

                x:{
                    type:"linear"
                }
            }
        }
    });
}
function mostrarError12(msg){

    document.getElementById(
        "res12"
    ).innerHTML = `

    <div class="alert alert-danger">

        ${msg}

    </div>

    `;
}