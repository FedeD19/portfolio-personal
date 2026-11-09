# Federico Dri — Portfolio personal

Portfolio personal desarrollado como **Trabajo Final de Diseño UX/UI (2026)** de la Licenciatura en Sistemas de Información, UADER–FCyT. El proyecto presenta mi formación, especialidades y tres trabajos académicos, siguiendo un prototipo propio realizado en Figma.

- **Sitio publicado:** https://federicodriportfolio.netlify.app/
- **Repositorio de GitHub:** https://github.com/FedeD19/portfolio-personal
- **Figma (diseño y proceso UX):** **pendiente de agregar** el enlace compartido con permiso de visualización.
- **Estado:** H1–H10 desarrollados; sitio desplegado desde GitHub en Netlify, con mejoras posteriores a H10 (navegación, formulario de contacto y documentación).

## Contenido del sitio

Es un sitio **one-page** con navegación por anclas y nueve áreas de contenido: **Header/Navegación, Hero, Métricas, Skills, Proyectos, Experiencia/Formación, Sobre mí, Contacto y Footer**. Incluye un caso de estudio de Cubri Seguros desplegable dentro de **Proyectos**, sin navegación a una ficha interna.

Las métricas reflejan trabajo académico (3 proyectos, 20 ejercicios HTML/CSS y 3 áreas de especialidad), sin atribuir experiencia profesional que todavía no corresponde. El título **«MIS ESPECIALIDADES»** se mantiene en desktop y mobile.

### Proyectos destacados

| Proyecto | Descripción | Destino de «Ver proyecto» |
| --- | --- | --- |
| **Coffea — Coffee Shop** | Maquetación responsive a partir de un diseño de Figma. | [Repositorio GitHub](https://github.com/FedeD19/coffea-landing) |
| **Cubri Seguros — Checkout** | Contratación simulada de seguros: cotización, planes, datos, validaciones y pago de prueba. | [Demo Netlify](https://cubriseguros.netlify.app/) |
| **TP3 — Fundamentos HTML y CSS** | 20 ejercicios y landing integradora **DevFede**. | [Repositorio GitHub](https://github.com/FedeD19/TP3-Dise-o-UX-UI---HTML-CSS) |

Las tres tarjetas muestran capturas reales de los trabajos. La tarjeta de Cubri incluye una segunda acción, **«Leer caso de estudio»**, que despliega problema, proceso, recorrido, pantallas y aprendizajes en la misma página mediante `<details>` y `<summary>`.

## Tecnologías y estructura

- **HTML5** semántico, con títulos jerarquizados, navegación por anclas, un único `h1` y textos alternativos.
- **CSS3** puro: design tokens (`:root`), Flexbox, Grid, media queries, estados interactivos y fondo turquesa continuo.
- **JavaScript vanilla**: menú mobile, indicador de sección activa, acceso al caso de estudio y envío del formulario.
- **Netlify** para hosting HTTPS, despliegue desde GitHub y recepción de formularios mediante Netlify Forms.
- **Sin** React, Vue, Next.js, frameworks de JavaScript ni constructores visuales; **no hace falta compilar ni instalar dependencias**.

```text
index.html                     Página principal con las 9 áreas
404.html                       Página 404 personalizada
robots.txt                     Reglas de indexación
css/
  tokens.css                   Colores, tamaños, espaciado y tipografía
  base.css                     Estilos generales, fondo, accesibilidad y anclas
  layout.css                   Contenedores y estructuras base
  components.css               Navegación, tarjetas, timeline, botones y footer
  responsive.css               Ajustes por breakpoint
  case-study.css               Caso de estudio de Cubri
  contact-form.css             Tarjeta, inputs y confirmación de contacto
js/
  main.js                      Menú, navegación y enlace activo
  case-study.js                Control de apertura y foco del caso de estudio
  contact-form.js              Envío y confirmación en la misma página
assets/                        Fondo, favicon, foto, capturas y portada social
scripts/configurar-url.ps1     Configuración final de metadatos y sitemap
docs/                         Documentación y evidencias Lighthouse
```

> **Estado exacto del ZIP:** no incluye `netlify.toml` ni `sitemap.xml`. La publicación está configurada desde Netlify; el sitemap y las URLs SEO definitivas pueden generarse con el script mencionado más abajo. `css/project-detail.css` permanece como archivo heredado, aunque ya no hay fichas internas de proyectos.

## Ejecutar localmente

1. Abrí la carpeta del repositorio en VS Code.
2. Ejecutá **Live Server** sobre `index.html` o corré `py -m http.server 5500` desde la raíz.
3. Abrí `http://127.0.0.1:5500/`.
4. Probá anclas, navbar desktop, menú mobile, teclado, proyectos, caso de estudio y maquetación responsive.

**Importante:** el formulario muestra un aviso en Live Server porque los envíos reales se procesan solamente desde el sitio publicado en Netlify.

## Despliegue y cambios posteriores

El portfolio está publicado en **Netlify** mediante un repositorio de GitHub. La rama de despliegue es `main`, con **build command vacío** y **publish directory `.`** (raíz del proyecto). Los cambios realizados con `git push origin main` actualizan el sitio mediante el flujo de despliegue conectado a GitHub.

Para registrar mejoras:

```powershell
git status
git add .
git commit -m "docs: actualizar README y design system post H10"
git push origin main
```

### SEO: ajuste pendiente en el código incluido

La página cuenta con `<title>`, descripción, Open Graph básico, favicon, `viewport`, idioma `es` y `robots.txt`. Sin embargo, el `index.html` de este ZIP **todavía utiliza una ruta relativa para `og:image` y no incorpora `canonical` ni `og:url`**. Para completar esos metadatos y generar `sitemap.xml`, ejecutá:

```powershell
.\scripts\configurar-url.ps1 -SiteUrl "https://federicodriportfolio.netlify.app"
```

Revisá los archivos generados (`index.html`, `robots.txt`, `README.md`, `sitemap.xml`) antes de confirmarlos y subirlos a GitHub. El script también actualiza la línea de URL pública de este README; después de ejecutarlo, asegurate de conservar esta documentación actualizada.

## Contacto: formulario integrado con Netlify Forms

En la sección **Contacto**, el correo del destinatario ya **no se muestra como texto público ni mediante un enlace `mailto:`**. En su lugar hay una tarjeta oscura alineada con la estética del sitio: título **«Contame tu idea.»**, campos obligatorios **Nombre, Email y Mensaje**, botón turquesa **«Enviar mensaje»** y breve aviso sobre el uso de los datos.

- Formulario HTML llamado **`portfolio-contacto`**, con `method="POST"`, `data-netlify="true"` y un campo antispam **honeypot** (`bot-field`).
- Validación HTML5: nombre de al menos 2 caracteres, email con formato válido y mensaje de al menos 10 caracteres, además de límites de longitud.
- `js/contact-form.js` envía el contenido mediante `fetch()` con codificación `application/x-www-form-urlencoded`. Si Netlify acepta el envío, los campos se sustituyen por la confirmación **«¡Mensaje enviado!»** y el botón **«Escribir otro mensaje»**, **sin cambiar de página**.
- Si falla el envío, se muestra un aviso de error y se mantienen los datos para reintentar. Con JavaScript desactivado, la confirmación puede pasar a la página predeterminada de Netlify.
- **Validado en producción:** Netlify muestra `portfolio-contacto` entre los formularios activos y registró un envío de prueba en *Verified submissions*. El usuario confirmó también la confirmación integrada y el botón para escribir otro mensaje.
- **Notificaciones:** se configuró en Netlify una alerta por correo ante nuevos envíos; la entrega efectiva de esas notificaciones debe comprobarse por separado.

No se publica una dirección personal como destinataria en el HTML actual. Esto **no borra automáticamente** posibles direcciones expuestas en versiones o commits antiguos. Netlify procesa y almacena los datos enviados: revisar sus ajustes de retención, antispam y notificaciones.

## Diseño visual y accesibilidad

- Identidad visual: **fondo turquesa texturizado**, titulares negros, superficies oscuras, acento turquesa claro y tipografía **Inter**.
- Diseño **mobile-first**: menú hamburguesa por debajo de 768 px; navbar horizontal en desktop; contenidos que pasan de una a dos o más columnas según la sección.
- Interacción: navegación mediante anclas y sección activa, foco visible, enlace **Saltar al contenido**, `aria-expanded` en menú, cierre con Escape, y respeto de `prefers-reduced-motion`.
- **Ajustes post-H10 de anclas:** `css/base.css` compensa las distintas separaciones superiores de Skills, Experiencia y Sobre mí en desktop, conservando el desplazamiento aprobado de Inicio, Proyectos y Contacto.
- Imágenes **WebP** con textos alternativos, dimensiones explícitas y carga diferida fuera de la primera pantalla.

### Evidencias de Lighthouse incluidas

El directorio [`docs/capturas/`](docs/capturas/) contiene cuatro capturas hechas sobre el sitio público:

| Categoría | Puntuación que figura en la captura | Evidencia |
| --- | ---: | --- |
| Rendimiento | **97** | [`captura_rendimiento.png`](docs/capturas/captura_rendimiento.png) |
| Accesibilidad | **100** | [`captura_accesibilidad.png`](docs/capturas/captura_accesibilidad.png) |
| Prácticas recomendadas | **100** | [`captura_practicasrecomendadas.png`](docs/capturas/captura_practicasrecomendadas.png) |
| SEO | **100** | [`captura_seo.png`](docs/capturas/captura_seo.png) |

**Alcance de la evidencia:** en la captura de SEO se lee **«Escritorio emulado»**. Por eso, aunque las puntuaciones cumplen el umbral de 90 en esa ejecución, **no se deben presentar como auditoría mobile verificada** hasta repetir Lighthouse seleccionando **Mobile** y guardar la evidencia correspondiente. Lighthouse tampoco certifica por sí solo cumplimiento completo de **WCAG 2.2 AA**: siguen siendo necesarias comprobaciones manuales de foco, navegación y contraste.

## Proceso UX/UI y entrega académica

Los materiales de Figma deben acreditar proto-persona, escenario de uso, benchmark de tres portfolios, moodboard, sitemap/card sorting, wireframes mobile y desktop, design system, prototipos y pruebas de usabilidad con **al menos tres personas**. Los hallazgos y cambios deben ser reales y estar documentados. También corresponde entregar una presentación o PDF de hasta 10 diapositivas.

- [`docs/design-system.md`](docs/design-system.md) — especificaciones y decisiones visuales actualizadas (incluido el formulario post-H10).
- [`docs/guia-entrega.md`](docs/guia-entrega.md) — guía preparada durante H10; algunas referencias a pasos pendientes pueden haber quedado desactualizadas.
- [`docs/validacion-final.md`](docs/validacion-final.md) — checklist elaborado para H10; contrastar sus pendientes con el estado actual.
- [`docs/plantilla-proceso-uxui.md`](docs/plantilla-proceso-uxui.md) — estructura sugerida para la presentación.
- [`docs/historial-hitos.md`](docs/historial-hitos.md) — registro histórico; describe etapas que luego cambiaron, por lo que no constituye la especificación actual.

**Redes:** Contacto y Footer muestran GitHub, sin LinkedIn. Esto refleja una elección del autor, pero difiere del requisito literal del trabajo final, que solicita LinkedIn y al menos otra red; conviene validarlo con el docente. El caso de estudio se presenta mediante un panel desplegable integrado, no como una página/modal independiente; corresponde confirmar que ese formato sea aceptado.

## Créditos y fuentes

- **Figma:** prototipo personal utilizado para el layout desktop y mobile; falta incluir el enlace compartido.
- **Coffea:** implementación académica a partir de una plantilla pública de Figma; no se atribuye el diseño base como propio.
- **Cubri Seguros:** ejercicio de checkout con contratación y pago simulados.
- **TP3:** ejercicios académicos de HTML/CSS y landing ficticia DevFede.
- **Fotografía y capturas de proyectos:** proporcionadas por el autor.
- **Fondo turquesa:** imagen aportada al proyecto; confirmar autoría, licencia o atribución si corresponde.
- **Fuente:** Inter servida desde Google Fonts con `display=swap` y alternativas del sistema.
- **Asistencia de IA:** ChatGPT colaboró en la estructura, código, ajustes y documentación; el autor realizó personalizaciones, pruebas, commits y publicación. No se atribuyen resultados inventados de investigación o pruebas.
