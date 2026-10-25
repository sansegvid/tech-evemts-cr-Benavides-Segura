// ===== EJERCICIO DE DEBUGGING: NO CORREGIR EN ESTE PR =====
const cuposTotales = 50;
let cuposDisponibles = 50;
let totalInscritos = 0;

const mensaje = document.querySelector("#mesaje");
const inputCantidad = document.querySelector("#cantidad");
const btnInscribir = document.querySelector("#btnInscribir");
const resumen = document.querySelector("#resumen");

mensaje.textContent = "Bienvenido a TechEvents CR";

function mostrarResumen(texto) {
  resumen.textContent = texto;
}

function registrarInscripcion() {
  const inscritos = inputCantidad.value;
  totalInscritos = totalInscritos + inscritos;
  cuposDisponibles = cuposTotales - totalInscritos;

  if (cuposDisponibles > 0) {
    mostrarResumen(`Inscripción exitosa. Cupos disponibles: ${cuposDisponibles}`);
  } else {
    mostrarResumen("No hay cupos suficientes");
  }
}

btnInscribir.addEventListener("click", registrarInscripcion);
