# Guía final de publicación y entrega — Portfolio UX/UI

**Consigna:** entrega del 10/11/2026. Sitio one-page, responsive, accesible, repo público con 10+ commits, Figma completo, documentación breve y Lighthouse mobile.

## 1. Probar H10 localmente

Desde VS Code, ejecutar Live Server o `py -m http.server 5500`. Abrir el menú, navegar por todas las anclas, desplegar el caso de estudio, comprobar los 3 proyectos, sus URLs, el retrato y el Footer. Ver checklist en `docs/validacion-final.md`.

## 2. Hacer el décimo commit

```powershell
git status
git diff --check
git add -A
git commit -m "H10: optimizar accesibilidad SEO y preparar despliegue"
git push origin main
git log --oneline -10
```

## 3. Conectar GitHub a Netlify (obligatorio: CI/CD)

1. Abrir https://app.netlify.com/ e iniciar sesión.
2. Seleccionar **Add new project → Import an existing project** y **GitHub**.
3. Autorizar el acceso al repositorio `portfolio-personal` de tu cuenta de GitHub.
4. Elegir la rama **main** para producción.
5. **Build command:** dejar vacío (HTML/CSS/JS sin compilación). **Publish directory:** `.` (raíz que contiene `index.html`); `netlify.toml` establece este valor.
6. Seleccionar Deploy/Publish. Confirmar el subdominio HTTPS real en tu panel.
7. Abrir la URL, navegar las secciones y probar un enlace a una página inexistente (404 personalizada).
8. Confirmar que cada nuevo `git push origin main` publica una nueva versión automáticamente.

**Importante:** no usar Netlify Drop ni arrastrar una carpeta manualmente: la consigna exige deploy desde GitHub.

Documentación actualizada de Netlify: https://docs.netlify.com/start/quickstarts/deploy-from-repository/

## 4. SEO definitivo cuando conozcas el dominio

Ejecutar en PowerShell desde la raíz del proyecto (reemplazar dominio):

```powershell
.\scripts\configurar-url.ps1 -SiteUrl "https://TU-DOMINIO-REAL.netlify.app"
git diff --check
git status
git add index.html README.md robots.txt sitemap.xml
git commit -m "docs: configurar URL publica y metadatos SEO"
git push origin main
```

El script agrega canonical, og:url, og:image absoluto y sitemap sin inventar URL. La portada social es `assets/og/portada-prototipo.webp`, revisarla y actualizarla si deseas otra imagen antes de la entrega.

## 5. Lighthouse (URL de producción)

- Chrome → F12 → **Lighthouse** → Device **Mobile** → activar Performance, Accessibility, Best Practices y SEO → **Analyze page load**.
- Meta por categoría: **90/100 o más**. No asumir que está cumplida antes de ejecutar el informe.
- Corregir advertencias, repetir auditoría y hacer captura con las cuatro cifras visibles.
- Guardar `docs/capturas/lighthouse-mobile.png` y subirla con un commit si querés que quede en el repo.
- No confundir cuatro puntuaciones Lighthouse con una certificación completa WCAG 2.2 AA.

Referencia: https://developer.chrome.com/docs/devtools/lighthouse/

## 6. Preparar Figma y documentación UX

- Verificar que el enlace de Figma se pueda **abrir sin solicitar acceso** y contenga Research, Benchmark, Moodboard, Arquitectura, Wireframes mobile/desktop, Design System, Prototipo y Test de usabilidad.
- Test de usabilidad sobre prototipo con **al menos 3 personas** y evidencia de cambios aplicados.
- Revisión entre pares sobre el sitio ya maquetado.
- Crear presentación o PDF de **hasta 10 diapositivas**. Sugerencia en `docs/plantilla-proceso-uxui.md`.
- Registrar dos comparaciones **Figma vs sitio** en la presentación.
- Confirmar el requisito LinkedIn: el sitio actual usa GitHub en lugar de LinkedIn por decisión del autor, lo cual difiere de la consigna original.

## 7. Entrega final

- [ ] URL pública HTTPS del portfolio.
- [ ] Repo público GitHub (10+ commits, README completo con URL, Figma, stack, créditos y capturas).
- [ ] Enlace de Figma con permiso de visualización.
- [ ] Presentación/PDF breve del proceso (máx. 10 slides).
- [ ] Captura Lighthouse **mobile** (cuatro categorías).

**Condiciones de evaluación:** sin sitio desplegado o sin 9 secciones, la consigna no se califica. Aprobación mínima de 60/100 y 50% de cada criterio.

## Formulario de contacto (cambio posterior a H10)

- Habilitar **Forms → Enable form detection** en Netlify y desplegar los archivos nuevos.
- Verificar `portfolio-contacto` en el panel de Forms.
- Enviar una prueba desde la URL pública, comprobando nombre, email y mensaje.
- Confirmar que no se publica el correo personal en la sección Contacto.
- Si se necesitan avisos, configurar una notificación privada en el panel de Netlify.
- La recepción en producción y los límites de Netlify Forms dependen del servicio: verificarlos en el panel.

### Confirmación del formulario de contacto sin cambiar de página

El formulario se envía con `fetch()` a Netlify Forms desde la misma sección de Contacto.
Si Netlify acepta la solicitud HTTP, la tarjeta muestra «¡Mensaje enviado!» y permite
volver a escribir otro mensaje; el navegador no abandona `index.html`. No se utiliza
`gracias.html`. Para verificar la recepción, revisar **Netlify → Forms → portfolio-contacto**.
La prueba de Live Server no envía mensajes. Sin JavaScript, la confirmación del
envío HTML nativo queda a cargo de Netlify y podría abrir su página predeterminada.
