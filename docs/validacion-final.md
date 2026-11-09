# H10 — Checklist de validación final

**Estado inicial:** sin mediciones Lighthouse verificadas, sin dominio de Netlify confirmado. Completá los campos al probar tu sitio público; no escribas puntuaciones estimadas.

## Verificación técnica

| Prueba | Método | Resultado / evidencia |
| --- | --- | --- |
| Desktop 1280 px | DevTools Device Mode | Pendiente |
| Tablet 768 px | DevTools Device Mode | Pendiente |
| Mobile 375 y 390 px | DevTools Device Mode | Pendiente |
| Zoom 200% | Chrome, sin scroll horizontal | Pendiente |
| Reflow 320 px | DevTools Device Mode | Pendiente |
| Teclado | Tab, Shift+Tab, Enter, Space, Escape | Pendiente |
| Saltar al contenido | Tab al cargar, Enter | Pendiente |
| Menú mobile | Apertura, Escape, selección, foco visible | Pendiente |
| Caso Cubri | Leer caso, summary, Escape no obligatorio, retorno de foco | Pendiente |
| Enlaces externos | GitHub Coffea/TP3 y Netlify Cubri | Pendiente |
| Imágenes | Capturas cargadas, sin distorsión, alt útil | Pendiente |
| Movimiento reducido | Emular prefers-reduced-motion: reduce | Pendiente |
| Contraste | WebAIM, textos sobre todas las zonas de la fotografía | Pendiente |
| Metadatos | title, description, Open Graph absoluto tras deploy, favicon, canonical | Pendiente |
| 404 | Abrir una URL inexistente bajo Netlify | Pendiente |
| HTTPS y CI/CD | URL publicada y actualización en cada push a main | Pendiente |

## Lighthouse (mobile, **URL pública**)

En Chrome: F12 → Lighthouse → Mobile → seleccionar Performance, Accessibility, Best Practices y SEO → Analyze page load. Guardar captura completa de los resultados en `docs/capturas/lighthouse-mobile.png`. Repetir tras solucionar advertencias.

| Categoría | Meta del trabajo | Resultado real |
| --- | ---: | --- |
| Performance | ≥ 90 | Pendiente |
| Accessibility | ≥ 90 | Pendiente |
| Best Practices | ≥ 90 | Pendiente |
| SEO | ≥ 90 | Pendiente |

**Atención:** Lighthouse es una herramienta automatizada, no certifica por sí sola WCAG 2.2 AA. Repetir pruebas manuales, especialmente los criterios 2.4.11 (foco no oculto) y 2.5.8 (tamaño de objetivos).

## Pendientes académicos

- Agregar al README la URL pública de Netlify y el enlace de Figma con permiso para visualizar.
- Test de usabilidad del prototipo con **3 personas**, registrar tareas, hallazgos y cambios reales.
- Revisar entre pares la web implementada y aplicar observaciones.
- PDF o presentación de **máximo 10 diapositivas** sobre el proceso UX/UI.
- Figma con benchmark de 3 portfolios, proto-persona, escenario, card sorting, wireframes, design system y prototipos desktop/mobile.
- Captura Lighthouse mobile con las 4 categorías de evaluación.
- Confirmar con el docente la sustitución de LinkedIn por GitHub (requisito social original).
- Comprobar atribución y permiso de uso de imágenes de terceros.
