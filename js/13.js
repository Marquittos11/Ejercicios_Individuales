function generarTabla13() {

    const nInv = parseInt(document.getElementById("nInv").value);
    const nExp = parseInt(document.getElementById("nExp").value);

    const contenedor = document.getElementById("contenedorTabla13");

    if (isNaN(nInv) || isNaN(nExp)) {
        alert("Ingrese investigadores y experimentos.");
        return;
    }

    if (nInv < 1 || nInv > 20) {
        alert("Investigadores entre 1 y 20.");
        return;
    }

    if (nExp < 1 || nExp > 20) {
        alert("Experimentos entre 1 y 20.");
        return;
    }

    let html = `
    <div class="table-responsive">
    <table class="table table-bordered text-center align-middle">
    <thead class="table-secondary">
    <tr>
        <th>Investigador/Experimento</th>
    `;

    for(let j=1;j<=nExp;j++){
        html += `<th>Exp${j}</th>`;
    }

    html += `</tr></thead><tbody>`;

    for(let i=1;i<=nInv;i++){

        html += `<tr>
            <th>Inv${i}</th>`;

        for(let j=1;j<=nExp;j++){

            html += `
            <td>
                <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="9999.99"
                    class="form-control"
                    id="dato_${i}_${j}"
                    placeholder="0.00"
                    oninput="
                        if(this.value<0)this.value='';
                        let v=this.value.split('.');
                        if(v[1] && v[1].length>2)
                            this.value=parseFloat(this.value).toFixed(2);
                    "
                >
            </td>`;
        }

        html += `</tr>`;
    }

    html += `</tbody></table></div>`;

    contenedor.innerHTML = html;
}

function ejercicio13() {

    const nInv = parseInt(document.getElementById("nInv").value);
    const nExp = parseInt(document.getElementById("nExp").value);

    const res = document.getElementById("res13");

    if (isNaN(nInv) || isNaN(nExp)) {

        res.innerHTML = `
        <div class="alert alert-danger">
        Debe generar la tabla primero.
        </div>`;
        return;
    }

    let matriz = [];

    let sumaGeneral = 0;

    let mayor = -Infinity;

    let invMayor = 0;

    let expMayor = 0;

    for(let i=1;i<=nInv;i++){

        matriz[i-1] = [];

        for(let j=1;j<=nExp;j++){

            const valor = parseFloat(
                document.getElementById(`dato_${i}_${j}`).value
            );

            if(isNaN(valor)){

                res.innerHTML = `
                <div class="alert alert-danger">
                Complete todos los resultados experimentales.
                </div>`;
                return;
            }

            if(valor < 0){

                res.innerHTML = `
                <div class="alert alert-danger">
                No se permiten números negativos.
                </div>`;
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

    let promInv = [];

    for(let i=0;i<nInv;i++){

        let suma = 0;

        for(let j=0;j<nExp;j++){

            suma += matriz[i][j];
        }

        promInv.push((suma/nExp).toFixed(2));
    }

    let promExp = [];

    for(let j=0;j<nExp;j++){

        let suma = 0;

        for(let i=0;i<nInv;i++){

            suma += matriz[i][j];
        }

        promExp.push((suma/nInv).toFixed(2));
    }

    const promedioGeneral =
        (sumaGeneral/(nInv*nExp)).toFixed(2);

    let html = `

    <div class="alert alert-success">

        <h5>Resultados del Laboratorio</h5>

        <hr>

        <b>Promedio por investigador:</b><br>
        [ ${promInv.join(" , ")} ]

        <br><br>

        <b>Promedio por experimento:</b><br>
        [ ${promExp.join(" , ")} ]

        <br><br>

        <b>Mayor resultado:</b><br>
        ${mayor.toFixed(2)}
        (Investigador ${invMayor},
        Experimento ${expMayor})

        <br><br>

        <b>Promedio general:</b><br>
        ${promedioGeneral}

    </div>
    `;

    res.innerHTML = html;
}

function limpiarEjercicio13(){

    document.getElementById("nInv").value = "";
    document.getElementById("nExp").value = "";

    document.getElementById("contenedorTabla13").innerHTML = "";

    document.getElementById("res13").innerHTML =
    "<em>El resultado se mostrará aquí...</em>";
}