function ejercicio16() {

    const input =
        document.getElementById("num16");

    const valor =
        input.value.trim();

    const res =
        document.getElementById("res16");

    // Campo vacío
    if (valor === "") {

        res.innerHTML = `
        <div class="alert alert-danger">
            Debe ingresar un número.
        </div>`;
        return;
    }

    // Solo números enteros
    if (!/^\d+$/.test(valor)) {

        res.innerHTML = `
        <div class="alert alert-danger">
            Solo se permiten números enteros positivos.
        </div>`;
        return;
    }

    const numero = Number(valor);

    // Rango razonable
    if (numero > 1000000) {

        res.innerHTML = `
        <div class="alert alert-warning">
            Ingrese un número menor o igual a 1 000 000.
        </div>`;
        return;
    }

    let binario = numero.toString(2);

    // Construcción del procedimiento
    let n = numero;
    let pasos = "";

    if (numero === 0) {

        pasos = `
        <tr>
            <td>0</td>
            <td>-</td>
            <td>0</td>
        </tr>`;
    }
    else {

        while (n > 0) {

            pasos += `
            <tr>
                <td>${n}</td>
                <td>${Math.floor(n / 2)}</td>
                <td>${n % 2}</td>
            </tr>`;

            n = Math.floor(n / 2);
        }
    }

    res.innerHTML = `

    <div class="text-center mb-3">

        <h5 class="text-success">
            Conversión Realizada
        </h5>

    </div>

    <div class="alert alert-info text-center">

        <strong>
            Decimal:
        </strong>

        ${numero}

        <br>

        <strong>
            Binario:
        </strong>

        ${binario}

    </div>

    <div class="table-responsive">

        <table class="table table-bordered text-center">

            <thead class="table-danger">

                <tr>
                    <th>Número</th>
                    <th>Cociente ÷ 2</th>
                    <th>Residuo</th>
                </tr>

            </thead>

            <tbody>

                ${pasos}

            </tbody>

        </table>

    </div>

    <div class="alert alert-success text-center">

        <strong>

            Resultado Final:

        </strong>

        <br>

        ${numero}₁₀ = ${binario}₂

    </div>

    `;
}