# Design System — H2

## Referencia visual

Basado en `Prototipo de Portfolio Personal.fig` y las exportaciones desktop (1920 px) y mobile (390 px) entregadas. Los tokens son una **aproximación visual a partir de las exportaciones**, no una exportación automática de los valores exactos de Figma. Cuando se disponga de los códigos y estilos del panel Design pueden afinarse los valores en `css/tokens.css`.

## Color

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-ink` | `#101414` | Titulares, texto principal, bordes fuertes |
| `--color-muted` | `#173b3a` | Texto secundario sobre fondos claros |
| `--color-on-dark` | `#f0faf8` | Texto sobre negro |
| `--color-surface` | `#111313` | Franja de métricas y footer |
| `--color-accent` | `#8cece7` | Accentos y botones secundarios |
| `--color-bg-fallback` | `#079c9b` | Color de respaldo del fondo |
| `--color-line` | `rgb(16 20 20 / 35%)` | Separadores |
| `--color-focus` | `#fff8b8` | Foco del teclado sobre oscuro |

El fondo con textura original del H1 se conserva en `assets/backgrounds/fondo-portfolio.webp`.

## Tipografía

Una sola familia sans serif: **Inter**, con alternativas `Segoe UI`, Arial, sans-serif. Es una elección visual provisional; confirmar la tipografía exacta en Figma. Se carga por Google Fonts usando `display=swap`; si no hay conexión, se usa el fallback.

- Título principal: `--type-h1: clamp(2.75rem, 5.2vw, 6rem)`, peso 800.
- Títulos de sección: `--type-h2: clamp(2rem, 3.6vw, 4.1rem)`, peso 800.
- Títulos de tarjeta: `--type-h3: clamp(1.125rem, 1.6vw, 1.5rem)`.
- Texto base: 16 px / 1.55; etiquetas: 12 px; texto secundario: 14 px.
- Tracking en títulos: `-0.055em`.

## Espaciado y responsive

Escala basada en múltiplos de 4 y 8 píxeles (`--space-1` a `--space-24`). Contenedor central máximo: 1120 px. Breakpoints del CSS: 768 px (tablet) y 1200 px (desktop); realizar las pruebas que exige la consigna a **375 px, 768 px y 1280 px**.

## Interacción y accesibilidad

- `:focus-visible` visible y «Saltar al contenido» en HTML.
- `:hover` y `:active` definidos para enlaces y botones; las interacciones específicas se completan en H3–H8.
- `prefers-reduced-motion: reduce` reduce animaciones y desactiva scroll suave.
- Contraste WCAG AA y puntuaciones Lighthouse se **verificarán** en H10. El fondo es fotográfico y su contraste cambia por región, así que no basta validar colores de token aislados.
- Navegación accesible sin JavaScript y menú toggle con `aria-expanded` cuando JS está activo.

## Próximos pasos

H3 ya implementó la navbar flotante horizontal en desktop, la cabecera redondeada mobile y un fondo fijo sin repetición vertical. H4 afinará alturas y posiciones del Hero y la franja de métricas. H5–H8 cerrarán el diseño por sección; H9 el caso de estudio; H10 validación y despliegue.


## H4 — Hero y métricas

- Título del Hero en tres renglones, con escala fluida y alineación izquierda.
- CTA negros en dos columnas en desktop y apilados a ancho completo en mobile, manteniendo su forma rectangular.
- La ubicación y disponibilidad se separaron semánticamente del bloque de presentación para que puedan ocupar el pie del Hero en mobile.
- Métricas sobre franja negra continua: distribución horizontal tanto desktop como mobile.
- Se usan cifras académicas verificables, sin inventar experiencia profesional.
- El contenido y posición fueron ajustados con referencias exportadas de Figma a 1920 y 390 px.

## H5 — Skills / Especialidades

- Figma desktop: contenedor propio de máximo **1360 px**, encabezado grande y tres filas con columnas para **número**, **especialidad** y **descripción + conocimientos**. Separadores horizontales entre filas.
- Figma mobile: márgenes laterales de 24 px, encabezado en dos renglones, especialidades apiladas y separadores. Evita las tarjetas genéricas que se utilizaban en H4.
- La estructura utiliza `ol > li`, con encabezados `h3` y una lista `ul` para las herramientas o conocimientos de cada especialidad. Se mantiene un único DOM para todos los tamaños.
- La etiqueta y el título de sección tienen variantes visibles por breakpoint; no hay dos títulos `h2` distintos.
- Se eligió la descripción de programación de la referencia desktop para ambas vistas por coherencia temática; la versión mobile mostraba una frase sobre «Experiencias mobile-first» bajo Lógica de programación. Se deja registrado como ajuste de contenido.
- El máximo específico se controla con `--skills-container-width`, sin modificar el contenedor general de H4, cuya alineación fue revisada y aprobada.


## H6 — Proyectos

- La sección usa la misma imagen de fondo turquesa fija del portfolio; no se crea una capa independiente por tarjeta.
- Desktop (a partir de 768 px): dos columnas editoriales; cada tarjeta distribuye el año y título a la izquierda, la captura a la derecha y luego resumen/herramientas/aprendizaje.
- Mobile: una sola columna y orden natural de lectura (año, título, imagen, descripción, herramientas, aprendizaje y enlace).
- El título del bloque cambia según la exportación de Figma: «Proyectos recientes» desktop y «Ideas que toman forma.» mobile. El encabezado sigue siendo un solo `h2`.
- Imágenes optimizadas en WebP: capturas suministradas por el alumno, completas y sin recortar textos o logos gracias a `object-fit: contain`.
- Enlaces: cada captura y su enlace «Ver proyecto» apuntan a un destino externo en nueva pestaña: Coffea y TP3 a sus repositorios GitHub, Cubri Seguros a Netlify. No hay fichas internas. El caso de estudio de H9 se resolverá como modal accesible sin alterar esos enlaces.
- H6 preserva el título de Skills «Mis especialidades» en todos los anchos y no modifica la maquetación del Hero aprobado en H4.

## H7 — Trayectoria / Experiencia

- Composición desktop (1920 × 1202): contenedor de hasta 1360 px, título uppercase de dos líneas y línea de tiempo de tres columnas visuales: **fecha / eje con punto / hito y aprendizajes**.
- Composición mobile (390 × 1178): el año se coloca encima de cada hito y a la derecha de un eje vertical continuo con tres marcadores oscuros.
- Contenido académico realista: trabajos de UX/UI realizados en 2026 y Licenciatura iniciada en 2023. El portfolio sigue etiquetado *en desarrollo* hasta confirmar su publicación.
- Se utiliza `ol` para los hitos, `<time datetime="...">` para las fechas y `ul` para los dos aprendizajes de cada entrada; los puntos del eje son decorativos y se dibujan exclusivamente con CSS.
- Breakpoints reutilizados de H1–H6, con estilos encapsulados en `.section--experience`; no se introducen animaciones ni dependencias adicionales.


## H8 — Sobre mí, Contacto y Footer

- Misma textura turquesa que las secciones anteriores, sin nuevos fondos repetidos.
- Foto de perfil: WebP original suministrado por el alumno, redimensionado sin modificaciones de estilo. `object-fit: cover` en contenedor que respeta su relación de aspecto; `alt` descriptivo.
- Sobre mí desktop: grilla de dos columnas, foto al lado izquierdo, presentación y tres principios a la derecha; mobile: una columna y retrato centrado.
- Los principios se presentan como lista `ol` sin tarjetas para coincidir con el diseño visual.
- Contacto desktop: título y email a la izquierda, propuesta de colaboración, CTA y zona horaria a la derecha. Mobile: una columna, CTA negro por debajo de los enlaces, margen vertical amplio según Figma.
- Footer negro con enlaces de anclas, GitHub y pendiente de LinkedIn, copyright y crédito tecnológico. El Figma mostraba Instagram como segundo vínculo, pero se usa GitHub porque su URL sí fue confirmada.
- **Pendiente**: obtener y enlazar URL exacta de LinkedIn antes de la entrega final. Los rótulos de LinkedIn son informativos, NO enlaces falsos. Revisar contrastes WCAG AA y Lighthouse en H10.
