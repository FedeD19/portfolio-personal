'use strict';

// H3: menú desplegable accessible, navegación interna y sección activa.
document.documentElement.classList.add('js');

const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacion-principal');
const mobileViewport = window.matchMedia('(max-width: 767px)');

if (header && toggle && navigation) {
  const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const sections = sectionLinks
    .map(link => ({ link, section: document.querySelector(link.getAttribute('href')) }))
    .filter(item => item.section);

  function setMenuOpen(open) {
    const isOpen = mobileViewport.matches && open;
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    navigation.classList.toggle('is-open', isOpen);
  }

  toggle.addEventListener('click', () => {
    setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', event => {
    if (event.target.closest('a[href^="#"]')) setMenuOpen(false);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  // Se cierra si el usuario pulsa fuera del header desplegado.
  document.addEventListener('pointerdown', event => {
    if (toggle.getAttribute('aria-expanded') === 'true' && !header.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  mobileViewport.addEventListener('change', () => {
    if (!mobileViewport.matches && document.activeElement === toggle) {
      sectionLinks[0]?.focus();
    }
    setMenuOpen(false);
  });

  // Mantiene un único aria-current en la sección visible, incluso al hacer scroll.
  // La franja Métricas forma parte visual de Inicio.
  let scheduled = false;
  function syncCurrentSection() {
    const marker = window.scrollY + Math.max(120, window.innerHeight * 0.3);
    let current = sections[0];
    for (const item of sections) {
      if (item.section.getBoundingClientRect().top + window.scrollY <= marker) {
        current = item;
      }
    }
    for (const item of sections) {
      if (item === current) item.link.setAttribute('aria-current', 'location');
      else item.link.removeAttribute('aria-current');
    }
    scheduled = false;
  }
  function requestSync() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(syncCurrentSection);
  }
  window.addEventListener('scroll', requestSync, { passive: true });
  window.addEventListener('resize', requestSync);
  window.addEventListener('hashchange', requestSync);
  requestSync();
}
