function ejercicio18() {

    const cadena =
    document.getElementById("cadena18")
    .value;

    const res =
    document.getElementById("res18");

    if(!cadena.trim()){

        res.innerHTML=`
        <div class="alert alert-danger">
            Ingrese una cadena válida.
        </div>
        `;

        return;
    }

    if(cadena.length>500){

        res.innerHTML=`
        <div class="alert alert-warning">
            Máximo 500 caracteres.
        </div>
        `;

        return;
    }

    const numeros =
    cadena.match(/\d+/g);

    if(!numeros){

        res.innerHTML=`

        <div class="alert alert-warning">

            No se encontraron números en la cadena.

        </div>

        `;

        return;
    }

    let suma = 0;

    numeros.forEach(num=>{

        suma += parseInt(num);

    });

    let textoResaltado = cadena;

    numeros.forEach(num=>{

        textoResaltado =
        textoResaltado.replace(
            num,
            `<span class="badge bg-danger">${num}</span>`
        );

    });

    res.innerHTML = `

    <div class="mb-3 text-center">

        <strong>
            Cadena Analizada
        </strong>

    </div>

    <div class="alert alert-light text-center">

        ${textoResaltado}

    </div>

    <div class="row g-3">

        <div class="col-md-6">

            <div class="alert alert-info">

                <strong>
                    Números encontrados:
                </strong>

                <br>

                ${numeros.join(", ")}

            </div>

        </div>

        <div class="col-md-6">

            <div class="alert alert-success">

                <strong>
                    Suma total:
                </strong>

                <br>

                ${suma}

            </div>

        </div>

    </div>

    `;
}