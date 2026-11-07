'use strict';

// H1: interacción accesible básica; H3 incorporará el aspecto final del header.
document.documentElement.classList.add('js');

const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacion-principal');
const mobileViewport = window.matchMedia('(max-width: 767px)');

if (toggle && navigation) {
  function setMenuOpen(open) {
    const isOpen = mobileViewport.matches && open;
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    navigation.classList.toggle('is-open', isOpen);
  }

  toggle.addEventListener('click', () => {
    setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a[href^="#"]')) setMenuOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  mobileViewport.addEventListener('change', () => setMenuOpen(false));
}
