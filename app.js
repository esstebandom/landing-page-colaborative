function saludarUsuario() {
    alert("¡Hola! Bienvenido a nuestra Landing Page.");
}

const boton = document.getElementById("saludoBtn");

if (boton) {
    boton.addEventListener("click", saludarUsuario);
}
