function ejercicio17() {

    const res =
    document.getElementById("res17");

    let html = `

    <div class="alert alert-info text-center">

        <strong>
            Tabla de Multiplicar del 1 al 12
        </strong>

    </div>

    <div class="table-responsive">

    <table class="table table-bordered text-center align-middle">

        <thead>

            <tr class="table-danger">

                <th>×</th>

    `;

    for(let i=1;i<=12;i++){

        html += `<th>${i}</th>`;
    }

    html += `
            </tr>
        </thead>

        <tbody>
    `;

    for(let i=1;i<=12;i++){

        html += `
        <tr>

            <th class="table-danger">
                ${i}
            </th>
        `;

        for(let j=1;j<=12;j++){

            html += `
            <td>
                ${i*j}
            </td>
            `;
        }

        html += "</tr>";
    }

    html += `
        </tbody>

    </table>

    </div>

    <div class="text-center mt-3">

        <span class="badge bg-success">

            Total operaciones:
            144

        </span>

    </div>
    `;

    res.innerHTML = html;
}