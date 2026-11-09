/* Netlify Forms: envío AJAX y confirmación en el mismo bloque de Contacto.
   El formulario sigue siendo HTML estático, para que Netlify lo detecte al desplegar. */
(() => {
  const form = document.querySelector('#formulario-contacto');
  if (!form) return;

  const status = form.querySelector('#contacto-estado');
  const submit = form.querySelector('button[type="submit"]');
  const label = submit?.querySelector('span');
  const confirmation = form.querySelector('#contacto-confirmacion');
  const confirmationTitle = form.querySelector('#contacto-confirmacion-titulo');
  const again = form.querySelector('#contacto-otro-mensaje');
  const firstField = form.querySelector('#contacto-nombre');
  if (!status || !submit || !confirmation || !confirmationTitle || !again) return;

  const defaultText = label?.textContent || 'Enviar mensaje';

  form.addEventListener('submit', async (event) => {
    // Previene la navegación incluso en el entorno de prueba local.
    event.preventDefault();
    if (submit.disabled || !form.reportValidity()) return;

    status.textContent = '';
    status.removeAttribute('data-state');

    if (['localhost', '127.0.0.1', '::1'].includes(window.location.hostname)) {
      status.dataset.state = 'error';
      status.textContent = 'En Live Server solo podés probar el diseño. Para enviar un mensaje, usá la URL publicada en Netlify.';
      status.focus();
      return;
    }

    submit.disabled = true;
    if (label) label.textContent = 'Enviando...';

    try {
      const body = new URLSearchParams(new FormData(form));
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error('No se pudo enviar el mensaje');

      form.reset();
      form.classList.add('contact-form--sent');
      confirmation.hidden = false;
      confirmationTitle.focus();
    } catch {
      status.dataset.state = 'error';
      status.textContent = 'No se pudo enviar el mensaje. Revisá tu conexión e intentá nuevamente.';
      status.focus();
    } finally {
      submit.disabled = false;
      if (label) label.textContent = defaultText;
    }
  });

  again.addEventListener('click', () => {
    confirmation.hidden = true;
    form.classList.remove('contact-form--sent');
    status.textContent = '';
    status.removeAttribute('data-state');
    firstField?.focus();
  });
})();
