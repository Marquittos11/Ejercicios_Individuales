function ejercicio21() {

    const res = document.getElementById("res21");

    // Número decimal aleatorio
    const decimal = Math.random();

    // Entero de 1 a 100
    const entero = Math.floor(Math.random() * 100) + 1;

    // Dado
    const dado = Math.floor(Math.random() * 6) + 1;

    // Moneda
    const moneda = Math.random() < 0.5
        ? "🪙 Cara"
        : "🪙 Cruz";

    // Frutas aleatorias
    const frutas = [
        "🍎 Manzana",
        "🍐 Pera",
        "🍌 Banana",
        "🍓 Fresa",
        "🍇 Uva"
    ];

    const fruta =
        frutas[Math.floor(Math.random() * frutas.length)];

    res.innerHTML = `

    <div class="row g-3">

        <div class="col-md-6">

            <div class="card shadow-sm border-0">

                <div class="card-body text-center">

                    <h6 class="text-primary">
                        Número decimal
                    </h6>

                    <h4>
                        ${decimal.toFixed(6)}
                    </h4>

                </div>

            </div>

        </div>

        <div class="col-md-6">

            <div class="card shadow-sm border-0">

                <div class="card-body text-center">

                    <h6 class="text-primary">
                        Entero (1 - 100)
                    </h6>

                    <h4>
                        ${entero}
                    </h4>

                </div>

            </div>

        </div>

        <div class="col-md-6">

            <div class="card shadow-sm border-0">

                <div class="card-body text-center">

                    <h6 class="text-primary">
                        Lanzamiento de dado
                    </h6>

                    <h4>
                        🎲 ${dado}
                    </h4>

                </div>

            </div>

        </div>

        <div class="col-md-6">

            <div class="card shadow-sm border-0">

                <div class="card-body text-center">

                    <h6 class="text-primary">
                        Lanzamiento de moneda
                    </h6>

                    <h4>
                        ${moneda}
                    </h4>

                </div>

            </div>

        </div>

        <div class="col-12">

            <div class="card shadow-sm border-0">

                <div class="card-body text-center">

                    <h6 class="text-primary">
                        Elemento aleatorio
                    </h6>

                    <h4>
                        ${fruta}
                    </h4>

                </div>

            </div>

        </div>

    </div>
    `;
}