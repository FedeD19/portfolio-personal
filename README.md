# Federico Dri — Portfolio personal

Portfolio personal desarrollado como **Trabajo Final de Diseño UX/UI (2026)** de la **Licenciatura en Sistemas de Información — UADER, Facultad de Ciencia y Tecnología (FCyT)**. El sitio presenta mi formación, especialidades y proyectos académicos, a partir de un proceso de investigación, diseño de interfaz, prototipado e implementación web.

### Enlaces del proyecto

- **Sitio publicado:** https://federicodriportfolio.netlify.app/
- **Repositorio:** https://github.com/FedeD19/portfolio-personal
- **Prototipo en Figma:** [Ver diseño desktop y mobile](https://www.figma.com/design/Tgz4uY16dJgQ6WFWyDYKTX/Prototipo-de-Portfolio-Personal?node-id=707-204&t=uZqIL7mvop8lSh47-1)
- **Presentación del proceso (9 diapositivas):** [Ver PDF](docs/presentacion/Presentacion_Portfolio_UXUI_9_slides_Lighthouse_Mobile.pdf)
- **Documentación visual:** [Design System](docs/design-system.md)

## Sobre el sitio

Es un **portfolio one-page**, con navegación interna por anclas y las nueve áreas previstas en la consigna: **Header, Hero, Métricas, Skills, Proyectos, Experiencia/Formación, Sobre mí, Contacto y Footer**.

El contenido está orientado a mi perfil de estudiante. Las métricas reflejan **3 proyectos académicos, 20 ejercicios de HTML/CSS y 3 áreas de especialidad**, sin atribuir experiencia laboral no realizada.

### Proyectos destacados

| Proyecto | Qué desarrollé | Enlace |
| --- | --- | --- |
| **Coffea — Coffee Shop** | Landing responsive de cafetería, implementada en HTML y CSS a partir de una plantilla de Figma. | [GitHub](https://github.com/FedeD19/coffea-landing) |
| **Cubri Seguros — Checkout** | Flujo de contratación simulada de seguros: cotización, selección de plan, datos, validaciones y pago de prueba. | [Demo en Netlify](https://cubriseguros.netlify.app/) |
| **TP3 — Fundamentos HTML y CSS** | 20 ejercicios progresivos y landing integradora «DevFede». | [GitHub](https://github.com/FedeD19/TP3-Dise-o-UX-UI---HTML-CSS) |

Las tarjetas utilizan capturas reales de los trabajos. En **Cubri Seguros**, la opción **«Leer caso de estudio»** despliega, dentro de la misma página, el problema, el proceso, las pantallas, las decisiones técnicas y los aprendizajes. La opción **«Ver proyecto»** conserva el enlace a la demo externa.

## Funcionalidades principales

- **Responsive y mobile-first:** menú hamburguesa en pantallas pequeñas, navegación horizontal en desktop y composiciones adaptadas con Grid, Flexbox y media queries.
- **Navegación accesible:** estructura semántica, un `h1`, enlace «Saltar al contenido», indicadores de foco, manejo del menú mediante teclado y respeto de `prefers-reduced-motion`.
- **Navegación por anclas:** indicador de sección activa y ajustes de desplazamiento para Skills, Proyectos, Experiencia y Sobre mí.
- **Caso de estudio integrado:** panel expandible de Cubri Seguros con controles nativos `<details>` y `<summary>`.
- **Formulario de contacto:** envío real a través de Netlify Forms, sin exponer el correo destinatario en el HTML actual.
- **Recursos optimizados:** imágenes WebP, textos alternativos y carga diferida en imágenes fuera de la primera pantalla.

## Formulario de contacto con Netlify Forms

La sección Contacto presenta una tarjeta oscura, consistente con la estética del portfolio, con los campos obligatorios **Nombre, Email y Mensaje** y el botón **«Enviar mensaje»**.

- El formulario está registrado en Netlify como **`portfolio-contacto`** y utiliza un campo antispam *honeypot*.
- Los campos tienen validación HTML5; el envío se realiza con `fetch()` y `application/x-www-form-urlencoded`.
- Cuando Netlify acepta el mensaje, aparece **«¡Mensaje enviado!»** y el botón **«Escribir otro mensaje»**, sin abandonar la página.
- Si ocurre un error, el formulario permanece visible para poder reintentar.
- **Probado en el sitio publicado:** el envío se registró en *Verified submissions* y la confirmación integrada funcionó correctamente.
- **Notificaciones:** se configuró un aviso por correo en el panel de Netlify para nuevos envíos (la llegada efectiva a la bandeja debe verificarse por separado).

Los datos del formulario son procesados por Netlify. Quitar el correo del HTML actual no elimina necesariamente apariciones en versiones antiguas del repositorio.

## Tecnologías utilizadas

| Tecnología | Uso |
| --- | --- |
| **HTML5** | Estructura semántica y contenido de la página. |
| **CSS3** | Variables de diseño, tipografía, Flexbox, Grid, responsive y estados interactivos. |
| **JavaScript vanilla** | Menú mobile, navegación activa, interacción del caso de estudio y formulario. |
| **Figma y Milanote** | Prototipo de alta fidelidad y materiales del proceso de diseño. |
| **Git y GitHub** | Control de versiones y desarrollo incremental. |
| **Netlify** | Hosting HTTPS, despliegue conectado a GitHub y gestión de formularios. |

No se utilizan React, Vue, Next.js ni constructores visuales. **El sitio es estático y no requiere compilación ni instalación de dependencias.**

## Estructura del repositorio

```text
portfolio-personal/
├── index.html                  # Página principal
├── 404.html                    # Página de error personalizada
├── robots.txt                  # Indicaciones para rastreadores
├── css/                        # Tokens, estilos base, componentes y responsive
├── js/                         # Navegación, caso de estudio y formulario
├── assets/                     # Fondo, favicon, fotografía y capturas de proyectos
├── docs/
│   ├── design-system.md        # Colores, tipografía, componentes y criterios responsive
│   ├── capturas/               # Capturas Lighthouse y evidencia de auditoría
│   │   └── reportes-lighthouse-mobile.pdf
│   └── presentacion/
│       └── Presentacion_Portfolio_UXUI_9_slides_Lighthouse_Mobile.pdf
├── scripts/
│   └── configurar-url.ps1      # Utilidad para URL canónica, Open Graph y sitemap
├── .gitignore
└── README.md
```

> El proyecto contiene también `css/project-detail.css`, un estilo heredado de una etapa anterior que no se utiliza para las fichas actuales. En la copia revisada no hay `netlify.toml` ni `sitemap.xml`; el sitio se publica desde la raíz configurada en Netlify.

## Ejecutar en local

1. Cloná el repositorio y abrí la carpeta en Visual Studio Code.
2. Iniciá **Live Server** sobre `index.html` o ejecutá `py -m http.server 5500` desde la raíz.
3. Abrí `http://127.0.0.1:5500/`.

El diseño, la navegación y las interacciones pueden probarse localmente. **Los envíos reales del formulario requieren la URL pública de Netlify.**

## Despliegue y SEO

El portfolio está publicado mediante **Netlify conectado a la rama `main` de GitHub**. Se utiliza la raíz del proyecto como directorio de publicación (`.`), sin comando de build. Los nuevos pushes a `main` permiten actualizar el sitio.

El HTML incluye título, descripción, favicon, idioma, viewport y metadatos básicos de Open Graph. **En la copia del proyecto revisada aún faltan `canonical` y `og:url`, y `og:image` utiliza una ruta relativa**, aunque la auditoría SEO haya obtenido 100 puntos. Para completar las URLs absolutas y generar el sitemap, se incluye el script:

```powershell
.\scripts\configurar-url.ps1 -SiteUrl "https://federicodriportfolio.netlify.app"
```

Antes de publicarlo, revisá los cambios que produzca en `index.html`, `robots.txt`, `README.md` y `sitemap.xml`.

## Validación y resultados de Lighthouse

Se realizó una auditoría sobre la **URL pública**, el **9 de noviembre de 2026**, en modo **Mobile**: dispositivo **Moto G Power emulado**, conexión **Slow 4G** y **Lighthouse 13.5.0**.

| Categoría | Puntuación Mobile |
| --- | ---: |
| **Performance / Rendimiento** | **98 / 100** |
| **Accessibility / Accesibilidad** | **100 / 100** |
| **Best Practices / Prácticas recomendadas** | **100 / 100** |
| **SEO** | **100 / 100** |

**Evidencia:** [Informe Lighthouse Mobile en PDF](docs/capturas/reportes-lighthouse-mobile.pdf). Las [capturas anteriores](docs/capturas/) del repositorio corresponden a otra ejecución y muestran, entre otros resultados, 97 puntos en Rendimiento; no deben confundirse con la auditoría Mobile definitiva.

El resultado de 100 puntos en accesibilidad refleja las comprobaciones automáticas de Lighthouse, **no una certificación completa de WCAG 2.2 AA**; las pruebas manuales de teclado, foco y contraste siguen siendo relevantes.

## Documentación del proceso UX/UI

- **[Figma](https://www.figma.com/design/Tgz4uY16dJgQ6WFWyDYKTX/Prototipo-de-Portfolio-Personal?node-id=707-204&t=uZqIL7mvop8lSh47-1):** prototipos desktop y mobile.
- **[Design System](docs/design-system.md):** paleta, tipografía, tokens, componentes y criterios responsive implementados.
- **[Presentación del proceso — 9 diapositivas](docs/presentacion/Presentacion_Portfolio_UXUI_9_slides_Lighthouse_Mobile.pdf):** usuario objetivo, benchmark, moodboard, arquitectura, wireframes, sistema visual, prototipo, test de usabilidad y resultados.
- **[Lighthouse Mobile](docs/capturas/reportes-lighthouse-mobile.pdf):** evidencia de rendimiento, accesibilidad, buenas prácticas y SEO.

La presentación resume la investigación y las decisiones de diseño. El proceso se documenta diferenciando el test sobre el prototipo de los ajustes posteriores realizados en el sitio publicado.

## Créditos

- **Diseño y desarrollo del portfolio:** Federico Dri.
- **Coffea:** implementación académica sobre una plantilla comunitaria de Figma; el diseño de referencia no se presenta como propio.
- **Cubri Seguros y TP3:** trabajos prácticos académicos.
- **Fotografía personal y capturas:** materiales proporcionados por el autor.
- **Fondo turquesa:** recurso utilizado en el proyecto, atribuido en la documentación a Sandeep Kumar (Unsplash).
- **Tipografía:** Inter, cargada desde Google Fonts.
- **Asistencia de IA:** ChatGPT colaboró en estructura, desarrollo y documentación; las personalizaciones, revisiones, pruebas y publicación fueron realizadas por el autor.

---

*Trabajo Final de Diseño UX/UI · UADER–FCyT · 2026.*
