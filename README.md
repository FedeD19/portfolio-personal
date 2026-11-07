# Portfolio personal — Federico Dri

Trabajo Final de Diseño UX/UI (2026) · Licenciatura en Sistemas de Información.

> **Estado actual: H2/10 — Design System y estilos globales.** El sitio conserva la estructura de H1 y ahora incorpora tokens visuales, tipografía, color y espaciado basados en las exportaciones de Figma. **Todavía no es una reproducción final del prototipo.**

## Objetivo

Construir un portfolio personal **one-page**, responsive y accesible con HTML5 semántico, CSS3 (variables, Flexbox, Grid, media queries) y JavaScript vanilla. No se usan React, Vue, Next.js ni constructores visuales.

## Cómo verlo localmente

1. Abrir esta carpeta en VS Code.
2. Abrir `index.html` con una extensión de servidor local (por ejemplo, Live Server), o ejecutar desde la terminal: `python -m http.server 5500`.
3. Visitar `http://localhost:5500/`.
4. Probar la navegación por anclas y el menú de móvil con teclado (`Tab`, `Enter`, `Escape`).

El proyecto **no necesita** `npm install`, dependencias ni comandos de compilación.

## Secciones

- Header / Navegación
- Hero
- Métricas
- Skills
- Proyectos (Coffea, Cubri Seguros y TP3 — Fundamentos de HTML y CSS)
- Experiencia / Formación
- Sobre mí
- Contacto
- Footer

## Estructura

```text
index.html
css/          tokens.css, base.css, layout.css, components.css, responsive.css
js/           main.js
assets/       backgrounds/, projects/, profile/, icons/, og/
proyectos/    página interna del caso de estudio (H9)
docs/         documentación y capturas del proceso UX/UI
```

## Accesibilidad y responsive (base H1 + H2)

- Etiquetas HTML semánticas, `lang="es"`, un único `<h1>` y títulos jerárquicos.
- Enlace «Saltar al contenido», focus visible y navegación mediante teclado.
- Menú mobile con botón, `aria-expanded`, `aria-controls`, Escape y cierre al seleccionar enlace.
- Sin JS, la navegación móvil queda visible (degradación progresiva).
- CSS mobile-first con puntos de control en 768 y 1200 px; también se probará a 375, 768 y 1280 px.
- Respeto a `prefers-reduced-motion` para scroll suave, animaciones y transiciones.
- Fondo turquesa original conservado y distribución tipográfica/espaciado centralizada en `css/tokens.css`.

**Pendiente:** validar contraste WCAG 2.2 AA y Lighthouse en mobile (≥ 90 en las 4 categorías) al finalizar la implementación. Este H1 no pretende certificar su cumplimiento definitivo.

## Recursos y contenidos

- Prototipos de Figma: seis pantallas desktop y seis pantallas mobile, aportadas para este trabajo.
- TP3: 20 ejercicios en tres bloques (básico, intermedio y medio/avanzado); incluye una landing integradora en el ejercicio 20.
- Design System H2: ver [`docs/design-system.md`](docs/design-system.md) para colores, tipografía, espaciado y decisiones; los valores todavía pueden afinarse contra Figma.
- Fuente principal: Inter mediante Google Fonts (`display=swap`), con alternativas locales de sistema.
- Fondo: imagen aportada junto con el prototipo; confirmar crédito/licencia en la entrega final.
- Imagen de Open Graph: captura del prototipo **provisional**; sustituirla por la captura del sitio final y cambiar `og:image` a una URL HTTPS absoluta en H10.
- Fotografías de proyectos, perfil y enlaces a demos/repositorios: se agregarán en H6 y H8.
- Datos de experiencia, métricas y presentación: revisar junto con los textos personales definitivos antes de publicar.

## Próximos hitos

- H2: design tokens, tipografía, fondo y estilos globales (completado).
- H3: header/navegación final desktop y móvil.
- H4: Hero y métricas.
- H5: Skills.
- H6: tarjetas de los tres proyectos, capturas y enlaces.
- H7: experiencia/formación.
- H8: sobre mí, contacto, footer y redes.
- H9: caso de estudio de Cubri Seguros.
- H10: accesibilidad, performance, SEO, comparación Figma/sitio y despliegue automático.

## Entrega final (pendiente)

- Sitio publicado por CI/CD desde GitHub a Netlify: **pendiente**.
- URL del prototipo de Figma: **pendiente**.
- Presentación del proceso UX/UI (máx. 10 diapositivas): **pendiente**.
- Captura Lighthouse mobile: **pendiente**.
- Investigación, benchmark, moodboard y pruebas con al menos 3 personas: documentar en Figma.

## Uso de IA

La estructura inicial de H1 y los tokens/estilos globales de H2 se prepararon con asistencia de ChatGPT. El código debe revisarse, probarse y personalizarse durante los siguientes hitos. Las decisiones UX/UI finales se documentarán en Figma.
