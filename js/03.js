let graficaTriangulo = null;

function ejercicio3() {

    const a = parseFloat(document.getElementById("lA").value);
    const b = parseFloat(document.getElementById("lB").value);
    const c = parseFloat(document.getElementById("lC").value);

    const res = document.getElementById("res3");

    if (
        isNaN(a) ||
        isNaN(b) ||
        isNaN(c) ||
        a <= 0 ||
        b <= 0 ||
        c <= 0
    ) {

        res.innerHTML = `
            <div class="alert alert-danger mb-0">
                Ingrese valores válidos para los tres lados.
            </div>
        `;

        return;
    }

    if (
        a + b <= c ||
        a + c <= b ||
        b + c <= a
    ) {

        res.innerHTML = `
            <div class="alert alert-warning mb-0">
                Los lados ingresados no forman un triángulo válido.
            </div>
        `;

        return;
    }

    const perimetro = a + b + c;

    const p = perimetro / 2;

    const area = Math.sqrt(
        p *
        (p - a) *
        (p - b) *
        (p - c)
    );

    res.innerHTML = `
        <div class="alert alert-success mb-0">

            <h6 class="fw-bold">
                Resultado
            </h6>

            <p>
                <strong>Perímetro:</strong>
                ${perimetro.toFixed(2)}
            </p>

            <p>
                <strong>Área:</strong>
                ${area.toFixed(4)}
            </p>

        </div>
    `;

    dibujarTriangulo(a,b,c);
}

function dibujarTriangulo(a,b,c){

    const canvas =
        document.getElementById("graficaTriangulo");

    if(!canvas) return;

    const ctx = canvas.getContext("2d");

    if(graficaTriangulo){
        graficaTriangulo.destroy();
    }

    const x =
        (b*b + c*c - a*a) /
        (2*c);

    const y =
        Math.sqrt(
            c*c - x*x
        );

    graficaTriangulo = new Chart(ctx, {

        type: "scatter",

        data: {

            datasets: [

                {
                    label: "Triángulo",

                    data: [
                        {x:0,y:0},
                        {x:c,y:0},
                        {x:x,y:y},
                        {x:0,y:0}
                    ],

                    showLine:true,

                    borderColor:"#ff4fa3",

                    backgroundColor:
                    "rgba(255,79,163,0.3)",

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
                        text:"Base"
                    }
                },

                y:{
                    title:{
                        display:true,
                        text:"Altura"
                    }
                }
            }
        }
    });
}