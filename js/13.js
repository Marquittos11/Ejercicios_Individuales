function generarMatriz13() {

    const nInv =
        parseInt(document.getElementById("nInv").value);

    const nExp =
        parseInt(document.getElementById("nExp").value);

    const cont =
        document.getElementById("contenedorMatriz13");

    if (
        isNaN(nInv) ||
        isNaN(nExp) ||
        nInv < 1 ||
        nExp < 1
    ) {

        cont.innerHTML = `
        <div class="alert alert-danger">
            Ingrese cantidades válidas.
        </div>`;

        return;
    }

    let html = `
    <div class="table-responsive mt-3">

    <table class="table table-bordered text-center">

    <thead class="table-danger">

    <tr>

    <th>Investigador/Experimento</th>
    `;

    for (let j = 1; j <= nExp; j++) {

        html += `<th>Exp${j}</th>`;

    }

    html += `
    </tr>
    </thead>

    <tbody>
    `;

    for (let i = 1; i <= nInv; i++) {

        html += `<tr>`;

        html += `<th>Inv${i}</th>`;

        for (let j = 1; j <= nExp; j++) {

            html += `
            <td>

            <input
                type="number"
                step="0.01"
                min="0"
                class="form-control"
                id="m${i}_${j}">

            </td>
            `;
        }

        html += `</tr>`;
    }

    html += `
    </tbody>

    </table>

    <div class="text-center">

        <button
        class="btn btn-success"
        onclick="ejercicio13()">

        Analizar Resultados

        </button>

    </div>

    </div>
    `;

    cont.innerHTML = html;
}

function ejercicio13() {

    const nInv =
        parseInt(document.getElementById("nInv").value);

    const nExp =
        parseInt(document.getElementById("nExp").value);

    const res =
        document.getElementById("res13");

    let matriz = [];

    let sumaGeneral = 0;

    let mayor = -Infinity;
    let invMayor = 0;
    let expMayor = 0;

    for (let i = 1; i <= nInv; i++) {

        matriz[i - 1] = [];

        for (let j = 1; j <= nExp; j++) {

            const valor =
                parseFloat(
                    document.getElementById(`m${i}_${j}`).value
                );

            if (
                isNaN(valor) ||
                valor < 0
            ) {

                res.innerHTML = `
                <div class="alert alert-danger">
                Complete correctamente todos los resultados.
                </div>`;
                return;
            }

            matriz[i - 1][j - 1] = valor;

            sumaGeneral += valor;

            if (valor > mayor) {

                mayor = valor;
                invMayor = i;
                expMayor = j;
            }
        }
    }

    let promInv = [];

    for (let i = 0; i < nInv; i++) {

        let suma = 0;

        for (let j = 0; j < nExp; j++) {

            suma += matriz[i][j];
        }

        promInv.push(
            (suma / nExp).toFixed(2)
        );
    }

    let promExp = [];

    for (let j = 0; j < nExp; j++) {

        let suma = 0;

        for (let i = 0; i < nInv; i++) {

            suma += matriz[i][j];
        }

        promExp.push(
            (suma / nInv).toFixed(2)
        );
    }

    const promGeneral =
        (
            sumaGeneral /
            (nInv * nExp)
        ).toFixed(2);

    res.innerHTML = `

    <div class="alert alert-success">

        <strong>
        Promedio por investigador:
        </strong>

        [ ${promInv.join(" , ")} ]

        <br><br>

        <strong>
        Promedio por experimento:
        </strong>

        [ ${promExp.join(" , ")} ]

        <br><br>

        <strong>
        Mayor resultado:
        </strong>

        ${mayor.toFixed(2)}
        (Investigador ${invMayor},
        Experimento ${expMayor})

        <br><br>

        <strong>
        Promedio general:
        </strong>

        ${promGeneral}

    </div>

    `;
}