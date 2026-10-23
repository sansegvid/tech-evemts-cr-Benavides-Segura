contenedor.addEventListener("click", (event) => {
  const boton = event.target;
  if (!boton.classList.contains("btn-inscribir")) return;

  const tarjeta = boton.parentElement;
  const id = Number(tarjeta.getAttribute("data-id"));
  const evento = eventos.find((e) => e.id === id);

  if (evento.cupos > 0) {
    evento.cupos--;
    tarjeta.querySelector(".cupos").textContent = `Cupos disponibles: ${evento.cupos}`;
  }

  // Tarea 1: deshabilitar el botón cuando los cupos lleguen a 0
  if (evento.cupos === 0) {
    boton.disabled = true;
    boton.textContent = "Agotado";
  }

  console.log(event.type, event.target, event.clientX, event.clientY);
});

// Tarea 2: resaltar tarjetas con mouseover y mouseout
const tarjetas = document.querySelectorAll(".card");
tarjetas.forEach((tarjeta) => {
  tarjeta.addEventListener("mouseover", () => tarjeta.classList.toggle("resaltada"));
  tarjeta.addEventListener("mouseout", () => tarjeta.classList.toggle("resaltada"));
});

const titulo = document.querySelector("h1");

// Tarea 3: listener con { once: true } (solo se ejecuta la primera vez)
titulo.addEventListener(
  "click",
  () => {
    const gracias = document.createElement("p");
    gracias.textContent = "¡Gracias por visitar TechEvents CR!";
    titulo.insertAdjacentElement("afterend", gracias);
  },
  { once: true }
);

// Tarea 4: segundo listener de click en el mismo <h1> (no reemplaza al anterior)
titulo.addEventListener("click", (event) => {
  console.log(event.target, event.type);
});

// Tarea 5: onclick solo permite una función por evento (la nueva reemplaza a la anterior),
// mientras que addEventListener permite registrar varias funciones y opciones como { once: true }.