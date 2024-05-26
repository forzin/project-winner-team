import './js/testimonials.js';

(() => {
  const mobileMenu = {
    modal: document.querySelector('#backdrop'),
    // menuOpenBtn: document.querySelector('.button-menu-open'),
    menuCloseBtn: document.querySelector('.close-button'),
    menuCloseByLink: document.querySelectorAll('.modal-menu-item-link'),
  };
//   mobileMenu.menuOpenBtn.addEventListener('click', toogleIsOpen);
  mobileMenu.menuCloseBtn.addEventListener('click', toogleIsOpen);
  mobileMenu.menuCloseByLink.forEach(link => {
    link.addEventListener('click', toogleIsOpen);
  });
  function toogleIsOpen() {
    mobileMenu.modal.classList.toggle('is-open');
  }
})();