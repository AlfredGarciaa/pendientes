import añadir from "./descripcion.js";

const tarea_string = document.querySelector("#ingresar-tarea");
const form = document.querySelector("#descripcion-form");
const div = document.querySelector("#descripcion-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const texto = tarea_string.value;

  div.innerHTML = "<p>" + añadir(texto) + "</p>";
});
