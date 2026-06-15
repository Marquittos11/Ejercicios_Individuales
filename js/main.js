/* INICIALIZACIÓN: Verificamos si ya hay un usuario logueado */
window.onload = function() {
    if (localStorage.getItem("usuario")) {
        // Si hay usuario, mostramos el sistema
        activarSistema(localStorage.getItem("usuario"));
    }

    // Eventos keypress para el login
    let usuarioInput = document.getElementById("usuario");
    let passwordInput = document.getElementById("password");
    if(usuarioInput) {
        usuarioInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("password").focus();
            }
        });
    }
    if(passwordInput) {
        passwordInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                login();
            }
        });
    }
};
function mostrarPassword() {
    let passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
/* FUNCIÓN DE LOGIN */
function login() {
    let usuarioInput = document.getElementById("usuario").value;
    let passwordInput = document.getElementById("password").value;
    let mensaje = document.getElementById("mensajeLogin");

    if (usuarioInput === "" || passwordInput === "") {
        mensaje.innerHTML = "Por favor, complete todos los campos";
        mensaje.className = "text-center mt-3 text-danger fw-bold";
        mensaje.style.color = "red";
        return;
    }

    // LOGIN DE PRUEBA: usuario 'admin', contraseña 'Espoch2026'
    if (usuarioInput === "admin" && passwordInput === "Espoch2026") {
        localStorage.setItem("usuario", usuarioInput);
        activarSistema(usuarioInput);
        
        // Limpiamos los inputs
        document.getElementById("usuario").value = "";
        document.getElementById("password").value = "";
        mensaje.innerHTML = "";
    } else {
        mensaje.innerHTML = "Usuario o contraseña incorrectos";
        mensaje.className = "text-center mt-3 text-danger fw-bold";
        mensaje.style.color = "red";
        
        // Limpiamos la contraseña
        document.getElementById("password").value = "";
    }
}

/* FUNCIÓN SALIR */
function salir() {
    localStorage.removeItem("usuario");
    location.reload(); // Recargamos para volver al estado inicial (login)
}

/* FUNCIÓN AUXILIAR PARA MOSTRAR SISTEMA */
function activarSistema(usuario) {
    // Ocultamos la sección de login
    let loginSec = document.getElementById("loginSection");
    if (loginSec) {
        loginSec.classList.remove("active");
        loginSec.style.display = "none";
    }

    // Mostramos la sección del sistema
    let sistemaSec = document.getElementById("sistemaSection");
    if (sistemaSec) {
        sistemaSec.style.display = "flex"; // Se activa como flexbox flex-column
    }
}