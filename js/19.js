function ejercicio19() {

    const texto = document.getElementById("textoVoz").value.trim();
    const res = document.getElementById("res19");

    // Validación vacío
    if (texto === "") {
        res.innerHTML = `
        <div class="alert alert-danger">
            Debe ingresar un texto.
        </div>`;
        return;
    }

    // Validación longitud
    if (texto.length > 200) {
        res.innerHTML = `
        <div class="alert alert-warning">
            El texto no puede superar los 200 caracteres.
        </div>`;
        return;
    }

    // Compatibilidad navegador
    if (!("speechSynthesis" in window)) {
        res.innerHTML = `
        <div class="alert alert-danger">
            Su navegador no soporta síntesis de voz.
        </div>`;
        return;
    }

    // Detener voz anterior
    window.speechSynthesis.cancel();

    const voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";
    voz.rate = 1;
    voz.pitch = 1;
    voz.volume = 1;

    voz.onstart = function () {

        res.innerHTML = `
        <div class="card border-0 shadow-sm">
            <div class="card-body text-center">

                <h5 class="text-success">
                    🎙 Reproduciendo...
                </h5>

                <p>
                    "${texto}"
                </p>

            </div>
        </div>`;
    };

    voz.onend = function () {

        res.innerHTML = `
        <div class="card border-0 shadow-sm">
            <div class="card-body text-center">

                <h5 class="text-primary">
                    ✅ Lectura finalizada
                </h5>

                <p>
                    "${texto}"
                </p>

            </div>
        </div>`;
    };

    voz.onerror = function () {

        res.innerHTML = `
        <div class="alert alert-danger">
            Error al reproducir la voz.
        </div>`;
    };

    speechSynthesis.speak(voz);
}