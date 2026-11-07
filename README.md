# Portfolio personal — Federico Dri

Trabajo Final de Diseño UX/UI (2026) · Licenciatura en Sistemas de Información.

> **Estado actual: H4/10 — Hero y métricas.** Navbar H3 intacta y primera pantalla adaptada a desktop y mobile según las exportaciones de Figma. Skills y las siguientes secciones permanecen provisionales hasta H5–H8.

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
- Menú mobile con botón nativo, `aria-expanded`, `aria-controls`, Escape (devuelve el foco al botón), cierre al seleccionar enlace y al pulsar fuera.
- `aria-current="location"` identifica la sección activa al desplazarse; el menú no duplica enlaces entre desktop y mobile.
- Sin JS, la navegación móvil queda visible (degradación progresiva).
- CSS mobile-first con puntos de control en 768 y 1200 px; también se probará a 375, 768 y 1280 px.
- Respeto a `prefers-reduced-motion` para scroll suave, animaciones y transiciones.
- Fondo turquesa original sobre una capa fija `body::before`, sin repetición vertical; **comprobar visualmente** a 375/390 px y desktop en Live Server.
- Navegación flotante centrada a partir de 768 px; menú colapsable hasta 767 px. Las anclas respetan el espacio del header sticky.

**Pendiente:** validar contraste WCAG 2.2 AA y Lighthouse mobile (≥ 90 en las cuatro categorías) al finalizar. H3 no certifica todavía estas métricas.

## Recursos y contenidos

- Prototipos de Figma: seis pantallas desktop y seis pantallas mobile, aportadas para este trabajo.
- TP3: 20 ejercicios en tres bloques (básico, intermedio y medio/avanzado); incluye una landing integradora en el ejercicio 20.
- Design System H2: ver [`docs/design-system.md`](docs/design-system.md) para colores, tipografía, espaciado y decisiones; los valores todavía pueden afinarse contra Figma.
- Fuente principal: Inter mediante Google Fonts (`display=swap`), con alternativas locales de sistema.
- Fondo: imagen aportada junto con el prototipo; confirmar crédito/licencia en la entrega final.
- Imagen de Open Graph: captura del prototipo **provisional**; sustituirla por la captura del sitio final y cambiar `og:image` a una URL HTTPS absoluta en H10.
- Fotografías de proyectos, perfil y enlaces a demos/repositorios: se agregarán en H6 y H8.
- Datos de experiencia, métricas y presentación: revisar junto con los textos personales definitivos antes de publicar.

## H4 — Hero y Métricas

- `index.html`: el Hero ahora tiene tres líneas explícitas de título, agrupación de presentación y área de disponibilidad independiente. Ambos CTA son anclas nativas a `#proyectos` y `#contacto`.
- `css/layout.css`, `components.css` y `responsive.css`: maquetación mobile-first con área principal y datos de disponibilidad al pie de la primera pantalla mobile; desktop coloca el contenido a la izquierda y aproxima la distribución del frame 1920 × 1200.
- Mobile (referencia 390 × 1386): botones negros a ancho completo, título grande en tres líneas y **tres métricas en una sola fila**, con mínimo de alto para mantener el espacio del prototipo. En dispositivos de menos altura hará falta desplazarse para ver las métricas; es intencional.
- Desktop (referencia 1920 × 1200): hero alineado al contenedor de 1120px, botones horizontales y barra oscura de métricas de ancho completo.
- Los indicadores de H3 no se duplicaron ni se reescribió JavaScript.
- Para evitar atribuir experiencia laboral no demostrada, las métricas muestran **3 proyectos académicos**, **20 ejercicios HTML/CSS** y **3 áreas de especialidad**, en lugar de los años de experiencia que todavía aparecen en el Figma.
- El diseño requiere **validación visual con Live Server** a 375px, 390px, 768px, 1280px y 1920px, además de zoom al 200%, navegación por teclado y ausencia de scroll horizontal. H4 no equivale a certificación WCAG AA ni Lighthouse.

## H3 — navegación y pruebas locales

- A partir de **768 px**: menú horizontal flotante en cápsula translúcida centrada.
- Por debajo de **768 px**: cabecera oscura con iniciales FD y botón hamburguesa; al abrir aparece un panel con los seis enlaces.
- El menú se cierra al navegar, al pulsar Escape o al hacer clic fuera. Sin JavaScript, la lista de enlaces queda visible.
- Se marca el enlace de la sección visible con `aria-current="location"`.
- El fondo no utiliza `repeat-y` ni `background-size: auto 100vh`; la imagen se mantiene estática detrás de todas las secciones.
- Verificaciones pendientes con Live Server: ancho **375 px**, **390 px**, **768 px** y **1280 px**; activar el menú con Enter/Espacio; usar Tab y Escape; saltar a Skills y Proyectos, comprobar que el título quede visible; recorrer la página en mobile y confirmar que no hay líneas de reinicio de fondo. El navegador automatizado del entorno de preparación no permitió completar estas comprobaciones.

## Próximos hitos

- H2: design tokens, tipografía, fondo y estilos globales (completado).
- H3: header/navegación final desktop y móvil; corrección del fondo (completado).
- H4: Hero y métricas (completado).
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

La estructura H1, los estilos globales H2, la navegación H3 y la composición Hero/Métricas H4 se prepararon con asistencia de ChatGPT. El código debe revisarse, probarse y personalizarse durante los siguientes hitos. Las decisiones UX/UI finales se documentarán en Figma.
