function generarMatriz13(){

    const nInv =
    parseInt(
        document.getElementById("nInv").value
    );

    const nExp =
    parseInt(
        document.getElementById("nExp").value
    );

    const cont =
    document.getElementById(
        "contenedorMatriz13"
    );

    if(
        isNaN(nInv) ||
        isNaN(nExp)
    ){

        alert(
            "Ingrese dimensiones válidas."
        );

        return;
    }

    if(
        nInv<=0 ||
        nExp<=0
    ){

        alert(
            "Los valores deben ser mayores que cero."
        );

        return;
    }

    if(
        nInv>10 ||
        nExp>10
    ){

        alert(
            "Máximo 10 investigadores y 10 experimentos."
        );

        return;
    }

    let html =
    `
    <div class="table-responsive">

    <table class="table table-bordered text-center">

    <thead>

    <tr>

    <th>Inv/Exp</th>
    `;

    for(let j=1;j<=nExp;j++){

        html += `<th>Exp ${j}</th>`;
    }

    html += "</tr></thead><tbody>";

    for(let i=1;i<=nInv;i++){

        html += `<tr>`;

        html += `<th>Inv ${i}</th>`;

        for(let j=1;j<=nExp;j++){

            html += `

            <td>

            <input
                type="number"
                step="0.01"
                class="form-control"
                id="m_${i}_${j}">

            </td>

            `;
        }

        html += `</tr>`;
    }

    html += `
    </tbody>
    </table>

    </div>

    <button
        class="btn btn-primary mt-3"
        onclick="ejecutarEjercicio(13)">

        Analizar Resultados

    </button>
    `;

    cont.innerHTML = html;
}
function ejercicio13(){

    const nInv =
    parseInt(
        document.getElementById("nInv").value
    );

    const nExp =
    parseInt(
        document.getElementById("nExp").value
    );

    const res =
    document.getElementById("res13");

    let matriz = [];

    let mayor = -Infinity;

    let invMayor = 0;

    let expMayor = 0;

    let sumaGeneral = 0;

    for(let i=1;i<=nInv;i++){

        matriz[i-1] = [];

        for(let j=1;j<=nExp;j++){

            const valor =
            parseFloat(
                document.getElementById(
                    `m_${i}_${j}`
                ).value
            );

            if(isNaN(valor)){

                res.innerHTML = `
                <div class="alert alert-danger">
                Complete todos los resultados.
                </div>
                `;

                return;
            }

            matriz[i-1][j-1] = valor;

            sumaGeneral += valor;

            if(valor > mayor){

                mayor = valor;

                invMayor = i;

                expMayor = j;
            }
        }
    }

    let html = "";

    html += `
    <div class="table-responsive">

    <table class="table table-bordered text-center">

    <thead class="table-light">

    <tr>

    <th>Investigador</th>

    <th>Promedio</th>

    </tr>

    </thead>

    <tbody>
    `;

    for(let i=0;i<nInv;i++){

        let suma=0;

        for(let j=0;j<nExp;j++){

            suma += matriz[i][j];
        }

        let promedio =
        suma/nExp;

        html += `

        <tr>

        <td>
        Inv ${i+1}
        </td>

        <td>
        ${promedio.toFixed(2)}
        </td>

        </tr>

        `;
    }

    html += `
    </tbody>
    </table>
    </div>
    `;

    html += `
    <div class="mt-3">

    <h6 class="text-magenta">
    Promedio por Experimento
    </h6>
    `;

    for(let j=0;j<nExp;j++){

        let suma=0;

        for(let i=0;i<nInv;i++){

            suma += matriz[i][j];
        }

        html += `
        <div>
        Exp ${j+1}:
        ${(suma/nInv).toFixed(2)}
        </div>
        `;
    }

    html += "</div>";

    html += `

    <div class="alert alert-success mt-3">

    <b>Mayor resultado:</b>
    ${mayor}

    <br>

    Investigador ${invMayor}

    <br>

    Experimento ${expMayor}

    </div>

    `;

    html += `

    <div class="alert alert-info">

    <b>Promedio General:</b>

    ${(sumaGeneral/(nInv*nExp)).toFixed(2)}

    </div>

    `;

    res.innerHTML = html;
}