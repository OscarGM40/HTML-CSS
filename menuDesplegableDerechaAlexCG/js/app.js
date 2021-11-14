// creando una funcion que se ejecuta a si misma estoy generando un scope
(function () {
  // .menu__item--show son todos los <a> con un submenu
  const listElements = document.querySelectorAll(".menu__item--show");
  // .menu__links es la <ul> principal
  const list = document.querySelector(".menu__links");
  // .menu__hamburguer es un <div> con una <img>
  const menu = document.querySelector(".menu__hamburguer");

  const addClick = () => {
    listElements.forEach((element) => {
      //  console.log(element);
      element.addEventListener("click", () => {
        //   console.log(element.children[1]);
        let submenu = element.children[1];
        let height = 0;
        element.classList.toggle("menu__item--active");
        // la propiedad elemento.clientHeight me devuelve la altura de ese elemento
        //   console.log(submenu.clientHeight)
        if (submenu.clientHeight === 0) {
          // elemento.scrollHeight es la altura minima para que exista un elemento
          height = submenu.scrollHeight;
        }
        // puto máquina
        submenu.style.height = `${height}px`;
      });
    });
  };
  addClick();

  const deleteStyleHeight = () => {
    listElements.forEach((element) => {
      //   quitar el style es quitar todo y dejará el height en 0
      if (element.children[1].getAttribute("style")) {
        element.children[1].removeAttribute("style");
        element.classList.remove("menu__item--active");
      }
    });
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      deleteStyleHeight();
      if (list.classList.contains("menu__links--show")) {
        list.classList.remove("menu__links--show");
      }
    } else {
      addClick();
    }
  });

  if (window.innerWidth <= 800) {
    addClick();
  }

  menu.addEventListener("click", () => {
    list.classList.toggle("menu__links--show");
  });
})();
