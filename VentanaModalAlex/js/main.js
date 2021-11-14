



const modal = document.querySelector(".modal");

const openModal = document
  .querySelector(".hero__cta")
  .addEventListener("click", (e) => {
    //   e.preventDefault hace que no se agregue la # a la url al clickar en un enlace.Es lo que quiero
      e.preventDefault();
      modal.classList.add("modal--show");
    });
    
    const closeModal = document
    .querySelector(".modal__close")
    .addEventListener("click", (e) => {
      e.preventDefault();
    modal.classList.remove("modal--show");
  });
