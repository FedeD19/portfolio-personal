# Federico Dri — Portfolio personal

Sitio personal desarrollado como **Trabajo Final de Diseño UX/UI (2026)**, Licenciatura en Sistemas de Información, UADER–FCyT.

- **Sitio publicado:** pendiente de despliegue en Netlify.
- **Figma (prototipo y proceso):** agregar URL pública con permiso de visualización.
- **Repositorio:** GitHub (este repositorio).
- **Estado:** H10/10, código listo para comprobación final y publicación desde GitHub.

## Qué incluye

Portfolio **one-page** con navegación mediante anclas, responsive y diseñado a partir de un prototipo propio de Figma. Contiene **Header, Hero, Métricas, Skills, Proyectos, Experiencia/Formación, Sobre mí, Contacto y Footer**. El caso de estudio de Cubri Seguros se despliega dentro de la sección Proyectos, sin páginas internas.

Los tres trabajos mostrados son académicos:

| Proyecto | Enlace |
| --- | --- |
| Coffea — Coffee Shop | https://github.com/FedeD19/coffea-landing |
| Cubri Seguros — Checkout | https://cubriseguros.netlify.app/ |
| TP3 — Fundamentos de HTML y CSS | https://github.com/FedeD19/TP3-Dise-o-UX-UI---HTML-CSS |

## Tecnologías

HTML5 semántico, CSS3 (variables de diseño, Flexbox, Grid y media queries) y JavaScript vanilla. **No se utilizaron React, Vue, Next.js ni constructores visuales**; no se necesita instalar dependencias ni compilar.

```text
index.html                     Página one-page
404.html                       Página de error personalizada (Netlify)
netlify.toml                   Despliegue estático y encabezados
robots.txt                     Archivo de indexación
css/                           Design tokens, base, layout, componentes, responsive, case-study
js/                            Navegación y panel de caso de estudio
assets/                        Fondo, imágenes de proyectos, retrato, favicon y Open Graph
docs/                          Proceso, guía de entrega y validaciones
scripts/configurar-url.ps1     Completar SEO al conocer la URL definitiva
```

## Desarrollo local

1. Abrí esta carpeta en VS Code.
2. Abrí `index.html` con **Live Server**, o ejecutá `py -m http.server 5500` desde una terminal de Windows.
3. Visitá `http://127.0.0.1:5500/`.
4. Verificá navegación, menú mobile, teclado, enlaces y el caso de estudio.

El menú responsive utiliza `aria-expanded`, `aria-controls` y Escape. Se incluye un enlace **Saltar al contenido**, foco visible y respeto a `prefers-reduced-motion`. Las imágenes están optimizadas en WebP y las situadas fuera de la primera pantalla usan carga diferida. El fondo turquesa se mantiene sin cortes verticales.

## Publicación con Netlify (GitHub → CI/CD)

1. Subí tu commit H10 a la rama `main` de este repositorio.
2. En https://app.netlify.com/ elegí **Add new project → Import an existing project → GitHub**.
3. Autorizá el acceso y seleccioná este repositorio y la rama `main`.
4. Configuración del sitio: **Build command vacío** y **Publish directory `.`** (raíz). `netlify.toml` ya fija esta carpeta.
5. Seleccioná **Deploy site / Publish** según el texto que muestre Netlify. Guardá la dirección HTTPS real.
6. En PowerShell, desde la raíz del proyecto, ejecutá:

   ```powershell
   .\scripts\configurar-url.ps1 -SiteUrl "https://DOMINIO-REAL.netlify.app"
   ```

   Reemplazá el dominio de ejemplo por **tu URL real de Netlify**. Este paso fija `canonical`, `og:url`, `og:image` absoluto, genera `sitemap.xml`, actualiza `robots.txt` y deja la URL en este README.

7. Revisá los archivos generados y hacé un **commit de ajuste post-deploy** para que Netlify los publique automáticamente:

   ```powershell
   git status
   git add index.html README.md robots.txt sitemap.xml
   git commit -m "docs: configurar URL publica y metadatos SEO"
   git push origin main
   ```

8. Abrí el sitio en la URL pública (no en Live Server) y ejecutá **Lighthouse en modo mobile**. Guardá captura de las cuatro categorías en `docs/capturas/`.

Guía detallada: [`docs/guia-entrega.md`](docs/guia-entrega.md).

## Diseño y proceso UX/UI

El proceso se realiza en Figma: definición de usuario objetivo, escenario de uso, benchmark de tres portfolios, moodboard, arquitectura/card sorting, wireframes desktop y mobile, design system, prototipos, y test con al menos tres participantes. Se recomienda registrar tareas, observaciones y cambios aplicados. No se incluyen hallazgos inventados.

- [`docs/design-system.md`](docs/design-system.md): variables y decisiones visuales.
- [`docs/guia-entrega.md`](docs/guia-entrega.md): requisitos de la consigna y pasos finales.
- [`docs/validacion-final.md`](docs/validacion-final.md): checklist de accesibilidad, Lighthouse y responsive.
- [`docs/plantilla-proceso-uxui.md`](docs/plantilla-proceso-uxui.md): esquema para la presentación y test de usabilidad.
- [`docs/historial-hitos.md`](docs/historial-hitos.md): documentación histórica de H1 a H9.

## Recursos y créditos

- **Coffea:** implementación a partir de una plantilla pública de Figma; el diseño de referencia no se atribuye como original.
- **Cubri Seguros:** ejercicio académico basado en pantallas de referencia y un checkout con pago simulado.
- **TP3:** ejercicios de fundamentos de HTML y CSS, incluida la landing integradora ficticia DevFede.
- **Fotografía personal:** aportada por el autor. Capturas de proyectos aportadas por el autor y optimizadas para la web.
- **Fondo turquesa:** recurso de imagen aportado para el proyecto. **Comprobar crédito y licencia del autor original** antes de presentar la entrega.
- **Tipografía:** Inter desde Google Fonts con fuentes de sistema alternativas.

## Accesibilidad y verificación

Objetivo: **WCAG 2.2 AA** y **Lighthouse mobile ≥ 90** en Performance, Accessibility, Best Practices y SEO. El cumplimiento completo **no queda certificado por el código**: se debe evaluar en el sitio público y validar manualmente navegación por teclado, contraste en fondos fotográficos y tareas de usabilidad. La captura de Lighthouse y los hallazgos reales deben incorporarse a la entrega.

**Nota sobre redes:** por decisión del autor, Contacto/Footer enlazan GitHub y correo electrónico, sin LinkedIn. La consigna académica pide LinkedIn más otra red; confirmar la excepción con el docente.

## Uso de IA

El código HTML/CSS/JavaScript y la documentación H1–H10 se desarrollaron con asistencia de ChatGPT. El autor revisa, modifica y prueba los entregables en Live Server, realiza sus propios commits y debe validar el resultado público. La investigación, los resultados de pruebas y las decisiones UX finales deben documentarse con evidencia real.
