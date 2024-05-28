import './js/testimonials.js';

(() => {
  const mobileMenu = {
    modal: document.querySelector('#mobile-menu'),
    menuOpenBtn: document.querySelector('.button-burger'),
    menuCloseBtn: document.querySelector('.close-button'),
    menuCloseByLink: document.querySelectorAll('.modal-menu-item-link'),
  };
  mobileMenu.menuOpenBtn.addEventListener('click', toogleIsOpen);
  mobileMenu.menuCloseBtn.addEventListener('click', toogleIsOpen);
  mobileMenu.menuCloseByLink.forEach(link => {
    link.addEventListener('click', toogleIsOpen);
  });
  function toogleIsOpen() {
    mobileMenu.modal.classList.toggle('is-open');
  }
})();