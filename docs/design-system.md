# Design System — Portfolio personal (versión post-H10)

**Proyecto:** Federico Dri · Portfolio personal · Diseño UX/UI 2026  
**Implementación:** HTML5 + CSS3 + JavaScript vanilla  
**Base visual:** prototipo en Figma con exportaciones desktop (1920 px) y mobile (390 px).  
**Estado:** sistema implementado y extendido después de H10 con el formulario de contacto Netlify Forms, la confirmación integrada y ajustes de navegación.

> Los valores iniciales se ajustaron visualmente desde las exportaciones. Este documento describe **los valores del CSS incluido en el proyecto**, no afirma que todos coincidan numéricamente con los tokens originales de Figma.

## 1. Principios de diseño

1. **Claridad:** jerarquías fuertes, titulares legibles, botones reconocibles y navegación breve.
2. **Consistencia:** colores, tipografía, espaciados, radios, estados y componentes compartidos en todas las secciones.
3. **Adaptabilidad:** una estructura semántica que cambia mediante CSS entre mobile, tablet y desktop, sin duplicar la página.
4. **Accesibilidad:** navegación por teclado, foco visible y reducción del movimiento para quien lo solicite.

## 2. Color y superficies

Los tokens globales están definidos en `css/tokens.css`:

| Token | Valor actual | Uso |
| --- | --- | --- |
| `--color-ink` | `#101414` | Titulares, texto principal, contraste sobre turquesa |
| `--color-muted` | `#173b3a` | Texto secundario sobre fondos claros |
| `--color-on-dark` | `#f0faf8` | Texto claro sobre superficies negras |
| `--color-surface` | `#111313` | Métricas, Footer y tarjeta del formulario |
| `--color-surface-soft` | `#163b3a` | Superficie oscura alternativa |
| `--color-accent` | `#8cece7` | Botones y acentos en superficie negra |
| `--color-accent-deep` | `#007f80` | Tonalidad turquesa intensa |
| `--color-bg-fallback` | `#079c9b` | Fondo de reserva |
| `--color-focus` | `#fff8b8` | Foco de teclado sobre superficies oscuras |
| `--color-line` | `rgb(16 20 20 / 35%)` | Separadores sobre fondo turquesa |
| `--color-header-glass` | `rgb(17 39 43 / 42%)` | Navbar flotante translúcida |

**Fondo:** `assets/backgrounds/fondo-portfolio.webp`, aplicado como imagen fija detrás del contenido mediante CSS para evitar repeticiones verticales. Los titulares usan tinta oscura sobre la textura; la tarjeta del formulario crea un plano negro sólido para asegurar una presentación legible y coherente.

**Colores locales del formulario** (`css/contact-form.css`):

| Elemento | Valor | Función |
| --- | --- | --- |
| Fondo de inputs y textarea | `#071d1d` | Diferenciarlos de la tarjeta `#111313` |
| Texto de campos | `#f0faf8` | Lectura sobre fondo oscuro |
| Borde de campo | `#6d8785` | Delimitación normal |
| Borde al pasar el mouse | `#a7c7c3` | Estado `:hover` |
| Placeholder | `#bdd2cf` | Instrucción de ejemplo |
| Texto secundario y privacidad | `#c5d7d5` | Notas y descripción |
| Botón de envío | `#8cece7` | Acción primaria de formulario |
| Fondo de aviso de error | `#193c3b` | Retroalimentación sin abandonar la página |
| Barra de error | `#ffb6aa` | Estado de fallo de envío |

Los colores anteriores deben comprobarse con herramientas de contraste sobre sus fondos reales. El fondo texturizado tiene variaciones locales de luminosidad.

## 3. Tipografía

- Familia principal: **Inter**, cargada desde Google Fonts con `display=swap`; fallback `Segoe UI`, Arial, sans-serif.
- Texto base: `1rem` (16 px) con `--line-body: 1.55`.
- `--type-h1: clamp(2.75rem, 5.2vw, 6rem)`; `--type-h2: clamp(2rem, 3.6vw, 4.1rem)`; `--type-h3: clamp(1.125rem, 1.6vw, 1.5rem)`.
- Etiquetas: `--type-xs: .75rem` (12 px); texto secundario: `--type-sm: .875rem` (14 px).
- Titulares: `--tracking-heading: -.055em`, peso fuerte, transformaciones a mayúsculas según sección.
- Los encabezados cumplen una jerarquía `h1` → `h2` → `h3` (con `h4` en subsecciones internas).

El contenido de **Skills** utiliza «MIS ESPECIALIDADES» en **desktop y mobile** mediante un solo `h2` en el DOM.

## 4. Espaciados, contenedores y breakpoints

Escala basada en múltiplos de 4/8 px: `--space-1` a `--space-24`; valores de referencia 4, 8, 12, 16, 24, 32, 48, 64, 80 y 96 px. Radios: `--radius-sm: .375rem`, `--radius-md: .75rem`, `--radius-pill: 999px`.

- Contenedor general: `--container-width: 1120px`.
- Skills y otras áreas editoriales: ancho ampliado a **1360 px** según su composición en Figma.
- Navegación: `--nav-max-width: 42rem`; altura mobile `4rem`, desktop `3.5rem`.
- **Mobile-first** con cambios estructurales a `min-width: 768px` y `min-width: 1200px`.
- Tamaños recomendados de prueba: **320, 375, 390, 768, 1280 y 1920 px**, más zoom del navegador y navegación por teclado.

Patrones responsive: navbar hamburguesa en mobile y horizontal flotante en desktop; Skills y timeline con filas editoriales en desktop y bloques apilados en mobile; Proyectos en dos columnas desktop y una mobile; Sobre mí y Contacto en dos columnas desktop y una mobile. Las métricas permanecen en una fila compacta de tres cifras.

## 5. Componentes y estados

| Componente | Desktop | Mobile | Estados/interacción |
| --- | --- | --- | --- |
| **Navbar** | Cápsula centrada, fondo semitransparente | Marca `FD`, botón hamburguesa | `:hover`, `:active`, `:focus-visible`, enlace activo con `aria-current`, `aria-expanded` y Escape |
| **CTA del Hero** | Dos botones oscuros horizontales | Dos botones a ancho disponible | Desplazamiento por anclas a Proyectos y Contacto |
| **Métricas** | Franja negra, tres cifras | Tres cifras compactas | Contenido informativo, sin controles falsos |
| **Skills** | Número, especialidad, descripción y herramientas en columnas | Bloques verticales y separadores | Listas semánticas `ol`/`ul` |
| **Tarjeta de proyecto** | Grilla editorial: título + captura y descripción | Contenido en una columna | Imagen y «Ver proyecto» abren destino real; foco visible |
| **Caso de estudio Cubri** | Panel desplegable bajo las tarjetas | Mismo panel con imágenes apiladas | `<details>/<summary>`, teclado y foco; no altera «Ver proyecto» |
| **Timeline** | Fecha, eje vertical y texto | Fecha y detalle apilados junto al eje | `ol`, `time` y elementos decorativos CSS |
| **Sobre mí** | Foto y principios en dos columnas | Retrato y texto verticales | Retrato con `alt` descriptivo |
| **Contacto** | Texto a la izquierda y tarjeta oscura a la derecha | Texto seguido de formulario | Campos requeridos, foco amarillo, envío, error y confirmación integrada |
| **Footer** | Navegación, GitHub y créditos | Enlaces reordenados verticalmente | Enlaces por anclas y GitHub en nueva pestaña |

## 6. Formulario de contacto (implementación post-H10)

### Composición

La sección mantiene el título **«HAGAMOS ALGO QUE IMPORTE.»**, propuesta de colaboración, ubicación y enlace a GitHub. En desktop, el formulario se encuentra **a la derecha** dentro de una tarjeta negra con borde sutil y sombra; en mobile, se **apila debajo** del texto. Se reemplazó el email expuesto por una interacción directa, conservando la estética de títulos oscuros sobre turquesa y controles claros sobre negro.

### Contenido y validación

- Encabezado de tarjeta: eyebrow **«¿HABLAMOS?»**, título **«Contame tu idea.»** y una frase introductoria.
- Campos: **Nombre**, **Email** y **Mensaje**, todos obligatorios. Nombre `minlength=2`, mensaje `minlength=10`, email `type=email`; límites máximos declarados en HTML.
- Cada campo tiene un `<label>` asociado, placeholder auxiliar y estados `:hover` / `:focus-visible`.
- Botón **«Enviar mensaje»**: acento `#8cece7`, texto oscuro y ancho completo.
- Aviso de privacidad breve debajo del botón; no se muestra la dirección personal del destinatario.

### Comportamiento real en Netlify

1. `<form name="portfolio-contacto" method="POST" data-netlify="true" netlify-honeypot="bot-field">` permite a Netlify reconocer el formulario durante el despliegue.
2. El JavaScript `js/contact-form.js` utiliza `fetch('/')`, `URLSearchParams` y el campo oculto `form-name=portfolio-contacto` para enviar sin recargar la página.
3. Mientras se envía, el botón queda deshabilitado y su texto cambia temporalmente a **«Enviando...»**.
4. **Éxito:** el formulario reemplaza sus campos por una confirmación dentro de la misma tarjeta: icono de check, título **«¡Mensaje enviado!»**, mensaje de agradecimiento y botón **«Escribir otro mensaje»**. Este botón vuelve a mostrar el formulario y enfoca el primer campo.
5. **Error:** permanece el formulario y aparece un mensaje de estado para permitir el reintento. En Live Server se informa que el envío debe hacerse desde la URL pública.
6. **Sin JavaScript:** el envío HTML nativo queda a cargo de Netlify, cuya confirmación puede cambiar de página.

### Evidencia de producción

La detección del formulario está habilitada; `portfolio-contacto` aparece en Netlify Forms y se registró al menos un envío de prueba en **Verified submissions**. El autor confirmó el mensaje de éxito dentro de la página y el botón para escribir otro mensaje. Se configuró una **notificación por email** ante nuevas respuestas; su entrega efectiva requiere una prueba de correo separada.

La dirección destinataria **no se muestra en el HTML público actual**, aunque no puede garantizarse su eliminación de versiones antiguas del repositorio o de cachés históricas.

## 7. Navegación por anclas y ajustes post-H10

La navbar usa anclas hacia `#inicio`, `#skills`, `#proyectos`, `#experiencia`, `#sobre-mi` y `#contacto`. `js/main.js` mantiene visible el enlace activo mediante `aria-current="location"`, permite cerrar el menú mobile con Escape y cerrar al seleccionar una sección.

Durante las pruebas posteriores a H10 se corrigió el posicionamiento de **Skills, Experiencia y Sobre mí**: las secciones no tienen el mismo `padding-top`, por lo que `css/base.css` suma compensaciones específicas en desktop a partir de **1200 px**:

```css
@media (min-width: 1200px) {
  .section--skills { scroll-margin-top: -8rem; }
  .section--experience { scroll-margin-top: -9.875rem; }
  .section--about { scroll-margin-top: -1.5rem; }
}
```

**Inicio, Proyectos y Contacto** conservaron las posiciones de desplazamiento que ya habían sido aprobadas. El fondo común no se reinicia entre secciones.

## 8. Accesibilidad y movimiento

- Enlace «Saltar al contenido», `<main id="contenido" tabindex="-1">` y foco visible `:focus-visible`.
- Menú mobile con `aria-expanded`/`aria-controls`, control de Escape y foco devuelto al botón cuando se cierra por teclado.
- El caso de estudio usa `<details>`/`<summary>` y puede operarse sin depender de JavaScript para expandirse.
- Campos y botón del formulario accesibles con teclado; estado de envío comunicado mediante región `aria-live`.
- `prefers-reduced-motion: reduce` elimina las transiciones relevantes y evita scroll suave.
- Imágenes en WebP, `alt` contextual y dimensiones explícitas; `loading="lazy"` fuera de la vista inicial.
- La conformidad completa con **WCAG 2.2 AA** necesita validación manual además de auditorías automáticas.

## 9. Evidencia Lighthouse y pendientes

El repositorio incluye capturas en `docs/capturas/` de la URL pública con estas puntuaciones: **Rendimiento 97, Accesibilidad 100, Prácticas recomendadas 100 y SEO 100**. Son resultados registrados, no estimaciones. **En la captura de SEO figura «Escritorio emulado»**; antes de afirmar que se alcanzó la meta de **Lighthouse Mobile ≥90**, debe realizarse y documentarse una prueba específica en modo Mobile.

La configuración de SEO en el código actual aún requiere ejecutar `scripts/configurar-url.ps1` con la URL HTTPS publicada para insertar `canonical`, `og:url`, la URL absoluta de `og:image` y generar `sitemap.xml`. Este paso no modifica el sistema visual.

## 10. Relación Figma → implementación

| Hito | Decisión conservada o adaptada |
| --- | --- |
| **H2–H3** | Paleta turquesa/negra, tokens, fondo continuo y navbar adaptable. |
| **H4–H5** | Hero en tres líneas, métricas y Skills; título «MIS ESPECIALIDADES» en ambos anchos. |
| **H6–H7** | Tarjetas reales de tres trabajos y timeline académico, sin experiencias laborales inventadas. |
| **H8** | Retrato real, principios personales, Contacto y Footer. |
| **H9** | Caso de estudio dentro de Proyectos, sin navegación interna adicional. |
| **H10** | Reflow, accesibilidad base, SEO, deploy y página 404. |
| **Post-H10** | Ajustes finos de anclas, formulario Netlify Forms con confirmación in situ, botón para repetir envío, notificaciones y pruebas reales. |

**Archivo fuente de referencia:** `Prototipo de Portfolio Personal.fig`; la definición exacta de colores/tipografía debe contrastarse con el archivo de Figma si se necesita documentar diferencias de tokens. Las decisiones y hallazgos de investigación UX y los test con usuarios deben documentarse por separado, sin inventar evidencias.
