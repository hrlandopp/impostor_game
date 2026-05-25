/**
 * Hypixel - Sistema de Gestión de Interfaz y Servicios
 * Proyecto Escolar - Código de Lógica e Interactividad
 */

// Asegura que el DOM esté completamente cargado antes de ejecutar funciones adicionales
document.addEventListener('DOMContentLoaded', () => {
    inicializarFormularios();
    registrarEstadoInicial();
});

/**
 * Controla el intercambio de vistas de las secciones del sitio web.
 * Esta función es invocada por los botones del menú principal.
 * * @param {string} idSeccion - El identificador único de la sección a mostrar.
 * @param {HTMLElement} botonPresionado - El elemento del botón que recibió el clic.
 */
function cambiarSeccion(idSeccion, botonPresionado) {
    // 1. Selección de todas las secciones de contenido de la interfaz
    const secciones = document.querySelectorAll('.seccion-contenido');
    secciones.forEach(seccion => {
        seccion.classList.remove('activa');
    });

    // 2. Selección de todos los botones para remover el estado de selección previo
    const botones = document.querySelectorAll('.bloque-btn');
    botones.forEach(boton => {
        boton.classList.remove('activo');
    });

    // 3. Activación de la sección solicitada mediante su ID dinámico
    const seccionObjetivo = document.getElementById(idSeccion);
    if (seccionObjetivo) {
        seccionObjetivo.classList.add('activa');
        botonPresionado.classList.add('activo');
        
        // Registro técnico de la navegación en la consola del desarrollador
        console.log(`[Sistema] Navegación ejecutada hacia la sección: ${idSeccion.toUpperCase()}`);
    } else {
        console.error(`[Error] No se encontró la sección con el identificador: ${idSeccion}`);
    }
}

// Hacer la función accesible globalmente para los atributos onclick del HTML
window.cambiarSeccion = cambiarSeccion;

/**
 * Configura los controladores de eventos para los formularios de la aplicación.
 * Reemplaza los comportamientos por defecto por flujos de procesamiento controlados.
 */
function inicializarFormularios() {
    // Localización de formularios en el documento
    const formularioTorneo = document.querySelector('#torneos form');
    const formularioSoporte = document.querySelector('#soporte form');

    // Gestión del formulario de Torneos de Videojuegos
    if (formularioTorneo) {
        // Se remueve el atributo onsubmit del HTML para centralizarlo en este script
        formularioTorneo.removeAttribute('onsubmit');
        
        formularioTorneo.addEventListener('submit', (evento) => {
            evento.preventDefault(); // Previene la recarga de la página
            
            const nombreEquipo = document.getElementById('nombre-equipo').value;
            const categoria = document.getElementById('categoria-juego').value;
            const correo = document.getElementById('correo-contacto').value;

            // Simulación de procesamiento de datos
            console.log(`[Torneos] Datos recibidos. Equipo: ${nombreEquipo}, Categoría: ${categoria}, Contacto: ${correo}`);
            
            alert(`REGISTRO EXITOSO\n\nEl equipo "${nombreEquipo}" ha sido inscrito correctamente en la categoría seleccionada. Se ha enviado un correo de confirmación a ${correo}.`);
            
            formularioTorneo.reset(); // Limpieza de los campos del formulario
        });
    }

    // Gestión del formulario de Soporte Tecnológico
    if (formularioSoporte) {
        formularioSoporte.removeAttribute('onsubmit');

        formularioSoporte.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const tipoIncidencia = document.getElementById('tipo-incidencia').value;
            const codigoOrden = document.getElementById('codigo-orden').value || "N/A";
            const descripcion = document.getElementById('descripcion-problema').value;

            // Generación de un número de ticket aleatorio para simular un sistema real
            const numeroTicket = Math.floor(100000 + Math.random() * 900000);

            console.log(`[Soporte] Ticket generado: #${numeroTicket}. Tipo: ${tipoIncidencia}. Orden: ${codigoOrden}`);
            
            alert(`TICKET DE SOPORTE GENERADO\n\nNúmero de caso: #${numeroTicket}\nNaturaleza del requerimiento: ${tipoIncidencia.toUpperCase()}\n\nUn asesor técnico evaluará los detalles proporcionados y se pondrá en contacto a la brevedad.`);
            
            formularioSoporte.reset();
        });
    }
}

/**
 * Registra un mensaje de inicialización en la consola del navegador.
 * Útil para comprobar el correcto enlace del archivo durante la revisión del proyecto.
 */
function registrarEstadoInicial() {
    console.log("%c[Hypixel] Interfaz técnica inicializada correctamente.", "color: #ffcc00; font-weight: bold; font-family: monospace;");
}