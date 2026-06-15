function ejercicio15() {

    const res =
    document.getElementById("res15");

    let encontrados = [];

    function invertir(num) {

        return parseInt(
            num.toString()
               .split('')
               .reverse()
               .join('')
        );

    }

    for(let a = 10; a <= 99; a++) {

        for(let b = a; b <= 99; b++) {

            const revA = invertir(a);
            const revB = invertir(b);

            const producto1 = a * b;
            const producto2 = revA * revB;

            if(
                producto1 === producto2 &&
                a !== revA &&
                b !== revB
            ){

                const clave1 = `${a}-${b}`;
                const clave2 = `${revA}-${revB}`;

                const existe =
                encontrados.some(
                    e =>
                    e.clave === clave1 ||
                    e.clave === clave2
                );

                if(!existe){

                    encontrados.push({

                        clave: clave1,

                        texto:
                        `${a} × ${b} = ${producto1}
                        <br>
                        ${revA} × ${revB} = ${producto2}`

                    });

                }

            }

        }

    }

    let html = `

    <div class="alert alert-info text-center">

        <strong>
            Total encontrados:
        </strong>

        ${encontrados.length}

    </div>

    <div class="table-responsive">

        <table class="table table-bordered table-hover text-center">

            <thead class="table-light">

                <tr>

                    <th>#</th>

                    <th>Propiedad Encontrada</th>

                </tr>

            </thead>

            <tbody>

    `;

    encontrados.forEach((item,index)=>{

        html += `

        <tr>

            <td>
                ${index+1}
            </td>

            <td>
                ${item.texto}
            </td>

        </tr>

        `;

    });

    html += `
            </tbody>
        </table>
    </div>
    `;

    res.innerHTML = html;
}