'use strict';

// H9: botón de la tarjeta -> caso de estudio desplegable dentro del mismo index.html.
// <details> y <summary> siguen funcionando con teclado y sin este script.
const caseStudy = document.querySelector('#caso-cubri');
const caseLink = document.querySelector('.project-card__case-link');

if (caseStudy && caseLink) {
  const summary = caseStudy.querySelector('summary');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function syncState() {
    caseLink.setAttribute('aria-expanded', String(caseStudy.open));
  }

  caseLink.addEventListener('click', event => {
    event.preventDefault();
    caseStudy.open = !caseStudy.open;
    syncState();
    if (caseStudy.open) {
      // Un solo panel en la página; el enlace externo "Ver proyecto" no cambia.
      caseStudy.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
      summary?.focus({ preventScroll: true });
    } else {
      caseLink.focus();
    }
  });

  caseStudy.addEventListener('toggle', syncState);
  syncState();
}
