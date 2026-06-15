function ejercicio4() {

    const numStr =
        document.getElementById("in4").value;

    const num =
        parseFloat(numStr);

    const res =
        document.getElementById("res4");

    if (isNaN(num)) {

        res.innerHTML = `
            <div class="alert alert-danger mb-0">
                Ingrese un número válido.
            </div>
        `;

        return;
    }

    const antecesor = num - 1;

    const sucesor = num + 1;

    const raiz =
        num >= 0
            ? Math.floor(Math.sqrt(num))
            : "No definida";

    const cifras =
        numStr
        .replace(/[-.]/g, '')
        .length;

    res.innerHTML = `

        <div class="row g-3">

            <div class="col-md-6">

                <div class="card border-0 shadow-sm h-100">

                    <div class="card-body text-center">

                        <h6 class="text-magenta">
                            Antecesor
                        </h6>

                        <h4 class="fw-bold">
                            ${antecesor}
                        </h4>

                    </div>

                </div>

            </div>

            <div class="col-md-6">

                <div class="card border-0 shadow-sm h-100">

                    <div class="card-body text-center">

                        <h6 class="text-magenta">
                            Sucesor
                        </h6>

                        <h4 class="fw-bold">
                            ${sucesor}
                        </h4>

                    </div>

                </div>

            </div>

            <div class="col-md-6">

                <div class="card border-0 shadow-sm h-100">

                    <div class="card-body text-center">

                        <h6 class="text-magenta">
                            Raíz Entera
                        </h6>

                        <h4 class="fw-bold">
                            ${raiz}
                        </h4>

                    </div>

                </div>

            </div>

            <div class="col-md-6">

                <div class="card border-0 shadow-sm h-100">

                    <div class="card-body text-center">

                        <h6 class="text-magenta">
                            Cantidad de Cifras
                        </h6>

                        <h4 class="fw-bold">
                            ${cifras}
                        </h4>

                    </div>

                </div>

            </div>

        </div>
    `;
}