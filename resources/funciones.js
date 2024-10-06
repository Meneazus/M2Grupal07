function validarFormulario() {
    // Obtener los elementos del formulario
    const nombre = document.getElementById("name");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("texto");

    // Crear un array para almacenar los mensajes de error
    const errores = [];

    // Validar nombre
    if (nombre.value.trim() === "") {
        errores.push("El campo Nombre no puede estar vacío.");
    }

    // Validar correo electrónico
    if (email.value.trim() === "") {
        errores.push("El campo Correo electrónico no puede estar vacío.");
    } else if (!validateEmail(email.value.trim())) {
        errores.push("El formato del correo electrónico no es válido.");
    }

    // Validar mensaje
    if (mensaje.value.trim() === "") {
        errores.push("El campo Mensaje no puede estar vacío.");
    }

    // Mostrar errores o enviar el formulario
    if (errores.length > 0) {
        alert(errores.join("\n")); // Mostrar los errores en una alerta
        return false; // Prevenir el envío del formulario
    } else {
        // Aquí puedes realizar el envío del formulario si es necesario
        alert("Formulario enviado con éxito!");
        return true; // Permitir el envío del formulario
    }
}

function validateEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

/* Funcionamiento de la tabla de estadisticas en JQuery */
$(document).ready(function() {
    $('#estadisticasTable').DataTable();
});