const exercisesInfo = [
    { id: 1, title: "1. Invertir un número de 5 cifras" },
    { id: 2, title: "2. Distancia entre 2 puntos" },
    { id: 3, title: "3. Área y Perímetro de Triángulo" },
    { id: 4, title: "4. Antecesor, sucesor, raíz y cifras" },
    { id: 5, title: "5. Ángulo de incidencia del sol" },
    { id: 6, title: "6. Resistencia equivalente en paralelo" },
    { id: 7, title: "7. Puntuación de Gimnasta" },
    { id: 8, title: "8. Clasificación de nota" },
    { id: 9, title: "9. Vuelo del Avión" },
    { id: 10, title: "10. Funciones Trigonométricas" },
    { id: 11, title: "11. Calcular edad" },
    { id: 12, title: "12. Raíces de Ecuación Cuadrática" },
    { id: 13, title: "13. Investigadores y Experimentos" },
    { id: 14, title: "14. Matriz Numérica" },
    { id: 15, title: "15. Propiedad 46x96" },
    { id: 16, title: "16. Repetición (mismo q 15)" },
    { id: 17, title: "17. Tabla de multiplicar" },
    { id: 18, title: "18. Suma de números en cadena" },
    { id: 19, title: "19. Interfaz de voz" },
    { id: 20, title: "20. Conteo de letras" },
    { id: 21, title: "21. Librería Random" }
];

async function generarModales() {
    const container = document.getElementById("modals-container");
    if (!container) return;

    let htmlModals = "";

    // 1. Generar los "cascarones" de los modales
    exercisesInfo.forEach(ex => {
        htmlModals += `
        <!-- Modal ${ex.id} -->
        <div class="modal fade" id="modal${ex.id}" tabindex="-1" aria-labelledby="modalLabel${ex.id}" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalLabel${ex.id}">${ex.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" id="modal-body-${ex.id}">
                <div class="text-center">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
    });

    container.innerHTML = htmlModals;

    // 2. Cargar el contenido de cada modal dinámicamente usando fetch
    for (const ex of exercisesInfo) {
        try {
            const response = await fetch(`html/modal${ex.id}.html`);
            if (response.ok) {
                const htmlContent = await response.text();
                document.getElementById(`modal-body-${ex.id}`).innerHTML = htmlContent;
            } else {
                document.getElementById(`modal-body-${ex.id}`).innerHTML = "<div class='alert alert-danger'>Error al cargar el contenido del modal (Verifica que estás usando un servidor local como Live Server).</div>";
            }
        } catch (error) {
            console.error(`Error al cargar html/modal${ex.id}.html:`, error);
            document.getElementById(`modal-body-${ex.id}`).innerHTML = "<div class='alert alert-danger'>Error CORS o archivo no encontrado. Por favor, abre el proyecto desde un servidor local (ej. Live Server).</div>";
        }
    }
}

function handleEnter(event, id) {
    if (event.key === "Enter") {
        event.preventDefault();
        ejecutarEjercicio(id);
    }
}

function siguienteCampo(event, siguienteId) {

    if (event.key === "Enter") {

        event.preventDefault();

        document
            .getElementById(siguienteId)
            .focus();
    }
}

function ejecutarEjercicio(id) {
    if (typeof window["ejercicio" + id] === "function") {
        window["ejercicio" + id]();
    } else {
        document.getElementById("res" + id).innerHTML = "<span class='text-danger'>Ejercicio no implementado aún.</span>";
    }
}

// Generamos los modales al cargar
window.addEventListener("DOMContentLoaded", generarModales);

function limpiarEjercicio(id) {

    const modalBody = document.getElementById(`modal-body-${id}`);

    if (modalBody) {

        // Limpiar inputs
        const inputs = modalBody.querySelectorAll('input');

        inputs.forEach(input => {
            input.value = '';
        });

        // Limpiar selects
        const selects = modalBody.querySelectorAll('select');

        selects.forEach(select => {
            select.selectedIndex = 0;
        });

        // Reiniciar resultado
        const res = document.getElementById(`res${id}`);

        if (res) {

            if (id === 2) {

                res.innerHTML = `
                    <span class="text-muted">
                        La distancia aparecerá aquí...
                    </span>
                `;

            } else {

                res.innerHTML = `
                    <em>El resultado se mostrará aquí...</em>
                `;
            }
        }
    }

    /* ==========================
       LIMPIEZA ESPECIAL EJERCICIO 2
       ========================== */

    if (id === 2 && typeof graficaPuntos !== "undefined") {

        if (graficaPuntos) {

            graficaPuntos.destroy();
            graficaPuntos = null;
        }
    }
    /* LIMPIEZA ESPECIAL EJERCICIO 3 */
    if (id === 3 && typeof graficaTriangulo !== "undefined") {

        if (graficaTriangulo) {
            graficaTriangulo.destroy();
            graficaTriangulo = null;
        }
    }

    if (id === 5 && typeof graficaSol !== "undefined") {

        if (graficaSol) {

            graficaSol.destroy();
            graficaSol = null;
        }

    }

    if (id === 6 && typeof graficaResistencia !== "undefined") {

        if (graficaResistencia) {

            graficaResistencia.destroy();
            graficaResistencia = null;
        }

    }

    if (id === 7 && typeof graficaGimnasta !== "undefined") {

        if (graficaGimnasta) {

            graficaGimnasta.destroy();
            graficaGimnasta = null;
        }
    }

    if (id === 8 && typeof graficaNota !== "undefined") {

        if (graficaNota) {

            graficaNota.destroy();
            graficaNota = null;
        }
    }

    if (id === 9 && graficaVuelo) {

        graficaVuelo.destroy();
        graficaVuelo = null;
    }

    if (id === 10) {

        if (graficaTrig) {

            graficaTrig.destroy();
            graficaTrig = null;
        }
    }

    if (id === 11) {

        if (graficaEdad) {

            graficaEdad.destroy();
            graficaEdad = null;
        }
    }

    if (id === 12) {

        if (graficaEcuacion) {

            graficaEcuacion.destroy();
            graficaEcuacion = null;
        }
    }
    if (id === 13) {

        const cont =
            document.getElementById("contenedorMatriz13");

        if (cont) {

            cont.innerHTML = "";
        }
    }
    if (id === 14) {

        document.getElementById(
            "contenedorMatriz14"
        ).innerHTML = "";
    }
    if (id === 15) {

        document.getElementById("res15").innerHTML =
            "<em>Los resultados aparecerán aquí...</em>";

    }
    if (id === 16) {

        document.getElementById("num16").value = "";

        document.getElementById("res16").innerHTML =
            "<em>El resultado se mostrará aquí...</em>";

    }
    if (id === 17) {

        document.getElementById("res17").innerHTML =
            "<em>La tabla aparecerá aquí...</em>";

    }
    if (id === 18) {

        document.getElementById("cadena18").value = "";

        document.getElementById("res18").innerHTML =
            "<em>El resultado aparecerá aquí...</em>";

    }
    // Detener voz del ejercicio 19
    if (id === 19) {
        window.speechSynthesis.cancel();
    }
}
