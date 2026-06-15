function ejercicio1() {

    const input = document.getElementById("in1").value;
    const res = document.getElementById("res1");

    if (!input || input.length !== 5 || isNaN(input)) {

        res.innerHTML = `
            <div class="alert alert-danger mb-0">
                Debe ingresar un número válido de 5 cifras.
            </div>
        `;

        return;
    }

    const invertido = input
        .split('')
        .reverse()
        .join('');

    res.innerHTML = `
        <div class="alert alert-success mb-0">
            <strong>Número invertido:</strong>
            ${invertido}
        </div>
    `;
}
