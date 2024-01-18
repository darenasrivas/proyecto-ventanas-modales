// Nos referimos a los elementos para poder cambiar sus clases

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

// Funciones

const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

// Asociar un listener a cada botón para abrir y cerrar el modal:

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal)
  btnCloseModal.addEventListener('click', closeModal)
  overlay.addEventListener('click', closeModal)
}

// Cerrar el modal de una tercera forma, pulsando la tecla  ESC

document.addEventListener('keydown', function (e) {
  // console.log(e, e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})
