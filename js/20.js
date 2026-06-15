function ejercicio20() {

    const texto = document
        .getElementById("cadena20")
        .value
        .trim()
        .toUpperCase();

    const res = document.getElementById("res20");

    // Validación vacío
    if (texto === "") {

        res.innerHTML = `
        <div class="alert alert-danger">
            Debe ingresar una oración.
        </div>`;

        return;
    }

    // Solo letras
    const letras = texto.match(/[A-ZÁÉÍÓÚÑ]/g);

    if (!letras) {

        res.innerHTML = `
        <div class="alert alert-warning">
            No se encontraron letras en la oración.
        </div>`;

        return;
    }

    const conteo = {};

    letras.forEach(letra => {

        conteo[letra] = (conteo[letra] || 0) + 1;

    });

    const ordenado = Object.entries(conteo)
        .sort((a,b) => b[1] - a[1]);

    let html = `

    <div class="text-center mb-3">

        <h5 class="text-success">
            ✅ Resultado
        </h5>

        <p>
            Total de letras encontradas:
            <strong>${letras.length}</strong>
        </p>

    </div>

    <div class="table-responsive">

    <table class="table table-bordered text-center align-middle">

        <thead class="table-danger">

            <tr>
                <th>Letra</th>
                <th>Cantidad</th>
            </tr>

        </thead>

        <tbody>
    `;

    ordenado.forEach(item => {

        html += `
        <tr>

            <td class="fw-bold">
                ${item[0]}
            </td>

            <td>
                ${item[1]}
            </td>

        </tr>`;
    });

    html += `
        </tbody>
    </table>
    </div>
    `;

    res.innerHTML = html;
}