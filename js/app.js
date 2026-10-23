const eventos = [
  { id: 1, nombre: "React Summit Alajuela", fecha: "2026-11-12", modalidad: "Presencial", cupos: 35 },
  { id: 2, nombre: "Web Dev Day San José", fecha: "2026-11-20", modalidad: "Virtual", cupos: 50 },
  { id: 3, nombre: "JS Cartago Meetup", fecha: "2026-12-03", modalidad: "Híbrida", cupos: 3 }
];

const contenedor = document.querySelector("#eventos");

function crearTarjeta(evento) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("card");
  tarjeta.setAttribute("data-id", evento.id);

  // Tarea adicional 1: insertar badge de modalidad con insertAdjacentHTML
  tarjeta.insertAdjacentHTML("afterbegin", `<span class="badge">${evento.modalidad}</span>`);

  const titulo = document.createElement("h3");
  titulo.textContent = evento.nombre;

  const detalle = document.createElement("p");
  detalle.textContent = `${evento.fecha} · ${evento.modalidad}`;

  const cupos = document.createElement("p");
  cupos.classList.add("cupos");
  cupos.textContent = `Cupos disponibles: ${evento.cupos}`;

  const boton = document.createElement("button");
  boton.classList.add("btn-inscribir");
  boton.textContent = "Inscribirme";

  tarjeta.appendChild(titulo);
  tarjeta.appendChild(detalle);
  tarjeta.appendChild(cupos);
  tarjeta.appendChild(boton);

  return tarjeta;
}

function renderEventos() {
  contenedor.replaceChildren();
  eventos.forEach((evento) => contenedor.append(crearTarjeta(evento)));
}

// Tarea adicional 2: crear <h2> e insertarlo antes del contenedor con .before()
const subtitulo = document.createElement("h2");
subtitulo.textContent = "Próximos eventos";
contenedor.before(subtitulo);

// Renderizar las tarjetas de eventos
renderEventos();

// Tarea adicional 3: agregar año actual al #pie con insertAdjacentText
const pie = document.querySelector("#pie");
if (pie) {
  pie.insertAdjacentText("beforeend", `${new Date().getFullYear()}`);
}

// Tarea adicional 4: insertar al inicio del contenedor tarjeta de aviso con .prepend()
const tarjetaAviso = document.createElement("article");
tarjetaAviso.classList.add("card");
tarjetaAviso.textContent = "Inscripciones abiertas";
contenedor.prepend(tarjetaAviso);

// Tarea adicional 5: navegación por el DOM en consola
console.log("Cantidad de hijos de contenedor:", contenedor.children.length);
console.log("Primer hijo (firstElementChild):", contenedor.firstElementChild);
console.log("Último hijo (lastElementChild):", contenedor.lastElementChild);
console.log("Hermano anterior del último hijo (previousElementSibling):", contenedor.lastElementChild.previousElementSibling);
