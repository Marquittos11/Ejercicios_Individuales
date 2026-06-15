function generarMatriz14(){

    const filas =
    parseInt(
        document.getElementById("filas14").value
    );

    const cols =
    parseInt(
        document.getElementById("cols14").value
    );

    const cont =
    document.getElementById(
        "contenedorMatriz14"
    );

    if(
        isNaN(filas) ||
        isNaN(cols)
    ){
        alert("Ingrese dimensiones válidas.");
        return;
    }

    if(
        filas<=0 ||
        cols<=0
    ){
        alert("Las dimensiones deben ser mayores a cero.");
        return;
    }

    if(
        filas>10 ||
        cols>10
    ){
        alert("Máximo 10x10.");
        return;
    }

    let html = `
    <div class="table-responsive">

    <table class="table table-bordered text-center">

    <tbody>
    `;

    for(let i=1;i<=filas;i++){

        html += "<tr>";

        for(let j=1;j<=cols;j++){

            html += `
            <td>

            <input
                type="number"
                step="any"
                class="form-control"
                id="m14_${i}_${j}">

            </td>
            `;
        }

        html += "</tr>";
    }

    html += `
    </tbody>
    </table>

    </div>

    <button
        class="btn btn-primary mt-3"
        onclick="ejecutarEjercicio(14)">

        Analizar Matriz

    </button>
    `;

    cont.innerHTML = html;
}
function ejercicio14(){

    const filas =
    parseInt(
        document.getElementById("filas14").value
    );

    const cols =
    parseInt(
        document.getElementById("cols14").value
    );

    const res =
    document.getElementById("res14");

    let positivos = 0;
    let negativos = 0;

    let sumaTodos = 0;
    let sumaPares = 0;

    let productoNegativos = 1;

    let hayNegativos = false;

    let htmlTabla = `
    <div class="table-responsive">

    <table class="table table-bordered text-center">

    <tbody>
    `;

    for(let i=1;i<=filas;i++){

        htmlTabla += "<tr>";

        for(let j=1;j<=cols;j++){

            const valor =
            parseFloat(
                document.getElementById(
                    `m14_${i}_${j}`
                ).value
            );

            if(isNaN(valor)){

                res.innerHTML = `
                <div class="alert alert-danger">
                Complete toda la matriz.
                </div>
                `;

                return;
            }

            htmlTabla += `<td>${valor}</td>`;

            sumaTodos += valor;

            if(valor>0){

                positivos++;
            }

            if(valor<0){

                negativos++;

                productoNegativos *= valor;

                hayNegativos = true;
            }

            if((j)%2===0){

                sumaPares += valor;
            }
        }

        htmlTabla += "</tr>";
    }

    htmlTabla += `
    </tbody>
    </table>
    </div>
    `;

    if(!hayNegativos){

        productoNegativos = 0;
    }

    res.innerHTML = `

    ${htmlTabla}

    <div class="row g-3 mt-2">

        <div class="col-md-6">

            <div class="alert alert-success">

                <b>Positivos:</b>
                ${positivos}

            </div>

        </div>

        <div class="col-md-6">

            <div class="alert alert-danger">

                <b>Negativos:</b>
                ${negativos}

            </div>

        </div>

        <div class="col-md-6">

            <div class="alert alert-info">

                <b>Suma Total:</b>
                ${sumaTodos}

            </div>

        </div>

        <div class="col-md-6">

            <div class="alert alert-warning">

                <b>Suma Columnas Pares:</b>
                ${sumaPares}

            </div>

        </div>

        <div class="col-12">

            <div class="alert alert-secondary">

                <b>Producto de Negativos:</b>
                ${productoNegativos}

            </div>

        </div>

    </div>
    `;
}