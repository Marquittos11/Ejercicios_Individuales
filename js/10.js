let graficaTrig = null;

function ejercicio10(){

    const angulo =
        parseFloat(
            document.getElementById("angulo").value
        );

    const funcion =
        document.getElementById("func").value;

    const res =
        document.getElementById("res10");

    if(
        isNaN(angulo) ||
        angulo < 0 ||
        angulo > 360
    ){

        res.innerHTML=`
            <div class="alert alert-danger">
                Ingrese un ángulo entre 0° y 360°.
            </div>
        `;

        return;
    }

    const rad =
        angulo * Math.PI / 180;

    let resultado;
    let formula;

    switch(funcion){

        case "seno":

            resultado = Math.sin(rad);
            formula = "sin(θ)";
            break;

        case "coseno":

            resultado = Math.cos(rad);
            formula = "cos(θ)";
            break;

        case "tangente":

            if(
                Math.abs(Math.cos(rad))
                < 0.0000001
            ){

                res.innerHTML=`
                <div class="alert alert-danger">
                    La tangente no está definida para ${angulo}°.
                </div>
                `;

                return;
            }

            resultado = Math.tan(rad);
            formula = "tan(θ)";
            break;
    }

    res.innerHTML=`

    <div class="row g-3">

        <div class="col-md-6">

            <div class="card border-0 shadow-sm">

                <div class="card-body text-center">

                    <h6 class="text-magenta">
                        Ángulo
                    </h6>

                    <h2>${angulo}°</h2>

                </div>

            </div>

        </div>

        <div class="col-md-6">

            <div class="card border-0 shadow-sm">

                <div class="card-body text-center">

                    <h6 class="text-magenta">
                        Resultado
                    </h6>

                    <h2>
                        ${resultado.toFixed(6)}
                    </h2>

                </div>

            </div>

        </div>

        <div class="col-12">

            <div class="card border-0 shadow-sm">

                <div class="card-body text-center">

                    <h6 class="text-magenta">
                        Fórmula Aplicada
                    </h6>

                    <h4>
                        ${formula}
                    </h4>

                </div>

            </div>

        </div>

    </div>

    `;

    dibujarTrig(
        funcion,
        angulo
    );
}
function dibujarTrig(funcion,angulo){

    const canvas =
        document.getElementById("graficaTrig");

    if(!canvas) return;

    const ctx =
        canvas.getContext("2d");

    if(graficaTrig){

        graficaTrig.destroy();
    }

    const grados=[];
    const valores=[];

    for(let x=0;x<=360;x++){

        const r=
            x*Math.PI/180;

        grados.push(x);

        switch(funcion){

            case "seno":
                valores.push(
                    Math.sin(r)
                );
                break;

            case "coseno":
                valores.push(
                    Math.cos(r)
                );
                break;

            case "tangente":

                let v=
                    Math.tan(r);

                if(Math.abs(v)>10){

                    valores.push(null);

                }else{

                    valores.push(v);
                }

                break;
        }
    }

    graficaTrig=
        new Chart(ctx,{

        type:"line",

        data:{

            labels:grados,

            datasets:[{

                label:funcion,

                data:valores,

                borderColor:"#8b1458",

                backgroundColor:"#ff9ecf",

                tension:0.3,

                fill:false

            }]
        },

        options:{

            responsive:true,

            plugins:{

                legend:{
                    display:true
                }
            }
        }
    });
}