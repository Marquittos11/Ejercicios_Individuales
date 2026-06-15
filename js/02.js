let graficaPuntos = null;

function ejercicio2() {

    const x1 = parseFloat(document.getElementById("x1").value);
    const y1 = parseFloat(document.getElementById("y1").value);
    const x2 = parseFloat(document.getElementById("x2").value);
    const y2 = parseFloat(document.getElementById("y2").value);

    const res = document.getElementById("res2");

    if (
        isNaN(x1) ||
        isNaN(y1) ||
        isNaN(x2) ||
        isNaN(y2)
    ) {

        res.innerHTML = `
            <div class="alert alert-danger mb-0">
                Debe ingresar todas las coordenadas.
            </div>
        `;

        return;
    }

    const distancia = Math.sqrt(
        Math.pow(x2 - x1, 2) +
        Math.pow(y2 - y1, 2)
    );

    res.innerHTML = `
        <div class="alert alert-success mb-0">
            <h6 class="fw-bold mb-3">
                Resultado
            </h6>

            <p class="mb-1">
                <strong>Punto A:</strong> (${x1}, ${y1})
            </p>

            <p class="mb-1">
                <strong>Punto B:</strong> (${x2}, ${y2})
            </p>

            <hr>

            <h5 class="text-success fw-bold">
                Distancia = ${distancia.toFixed(4)}
            </h5>
        </div>
    `;

    dibujarGrafica(x1, y1, x2, y2);
}

function dibujarGrafica(x1, y1, x2, y2) {

    const canvas = document.getElementById("graficaDistancia");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (graficaPuntos) {
        graficaPuntos.destroy();
    }

    graficaPuntos = new Chart(ctx, {

        type: "scatter",

        data: {

            datasets: [

                {
                    label: "Punto A",

                    data: [
                        {
                            x: x1,
                            y: y1
                        }
                    ],

                    backgroundColor: "#ff4fa3",
                    borderColor: "#ff4fa3",
                    pointRadius: 8
                },

                {
                    label: "Punto B",

                    data: [
                        {
                            x: x2,
                            y: y2
                        }
                    ],

                    backgroundColor: "#8b1458",
                    borderColor: "#8b1458",
                    pointRadius: 8
                },

                {
                    label: "Distancia",

                    type: "line",

                    data: [
                        {
                            x: x1,
                            y: y1
                        },
                        {
                            x: x2,
                            y: y2
                        }
                    ],

                    borderColor: "#ff80bf",
                    borderWidth: 3,
                    pointRadius: 0,
                    fill: false
                }
            ]
        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    position: "top"
                },

                tooltip: {
                    enabled: true
                }
            },

            scales: {

                x: {

                    title: {
                        display: true,
                        text: "Coordenada X"
                    },

                    ticks: {
                        precision: 0
                    }
                },

                y: {

                    title: {
                        display: true,
                        text: "Coordenada Y"
                    },

                    ticks: {
                        precision: 0
                    }
                }
            }
        }
    });
}

/* ===================================== */
/* LIMPIAR SOLO EJERCICIO 2 */
/* ===================================== */

function limpiarGrafica2() {

    const res = document.getElementById("res2");

    if (res) {

        res.innerHTML = `
            <span class="text-muted">
                La distancia aparecerá aquí...
            </span>
        `;
    }

    if (graficaPuntos) {

        graficaPuntos.destroy();
        graficaPuntos = null;
    }

    const canvas = document.getElementById("graficaDistancia");

    if (canvas) {

        const ctx = canvas.getContext("2d");

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );
    }
}