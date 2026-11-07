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
