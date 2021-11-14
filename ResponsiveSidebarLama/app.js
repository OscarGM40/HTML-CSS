// Fijate que me trae todo el <div></div>asi que puedo crearle un listener
const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item.active");

// fijate que si añado clases con classList.add tendria que andar removiendolas despues.Con className se reasignan,en vez de añadirse
dark.addEventListener("click", () => {
  sidebar.className = "sidebar";
  activeListItem.className = "list-item active";
});

night.addEventListener("click", () => {
  sidebar.className = "sidebar night";
  activeListItem.className = "list-item active night";
});

light.addEventListener("click", () => {
  sidebar.className = "sidebar light";
  activeListItem.className = "list-item active light";
});
