# H10 — ejecutar en PowerShell desde cualquier ubicación:
# .\scripts\configurar-url.ps1 -SiteUrl "https://tu-nombre-real.netlify.app"
param(
  [Parameter(Mandatory=$true)]
  [string]$SiteUrl
)

$ErrorActionPreference = 'Stop'
try { $uri = [Uri]$SiteUrl } catch { throw 'Introducí una URL HTTPS válida.' }
if ($uri.Scheme -ne 'https' -or -not $uri.Host -or $uri.Host -eq 'tu-nombre-real.netlify.app') {
  throw 'La URL debe ser el dominio HTTPS REAL publicado en Netlify.'
}
$base = $uri.GetLeftPart([System.UriPartial]::Authority).TrimEnd('/')
if ($uri.AbsolutePath -ne '/') {
  throw 'Introducí la URL raíz de tu sitio, sin subcarpetas ni rutas.'
}
$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$indexPath = Join-Path $root 'index.html'
$content = Get-Content -Path $indexPath -Raw -Encoding UTF8
$ogImage = "$base/assets/og/portada-prototipo.webp"
$content = [regex]::Replace($content, '<meta property="og:image" content="[^"]*">', ('<meta property="og:image" content="' + $ogImage + '">'))
if ($content -match '<meta property="og:url"') {
  $content = [regex]::Replace($content, '<meta property="og:url" content="[^"]*">', ('<meta property="og:url" content="' + $base + '/">'))
} else {
  $content = $content.Replace('  <meta property="og:type"', ('  <meta property="og:url" content="' + $base + '/">' + "`n" + '  <meta property="og:type"'))
}
if ($content -match '<link rel="canonical"') {
  $content = [regex]::Replace($content, '<link rel="canonical" href="[^"]*">', ('<link rel="canonical" href="' + $base + '/">'))
} else {
  $content = $content.Replace('  <link rel="icon"', ('  <link rel="canonical" href="' + $base + '/">' + "`n" + '  <link rel="icon"'))
}
Set-Content -Path $indexPath -Value $content -Encoding UTF8
Set-Content -Path (Join-Path $root 'robots.txt') -Value ("User-agent: *`nAllow: /`nSitemap: $base/sitemap.xml`n") -Encoding UTF8
$sitemap = @"
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>$base/</loc></url>
</urlset>
"@
Set-Content -Path (Join-Path $root 'sitemap.xml') -Value $sitemap -Encoding UTF8
$readmePath = Join-Path $root 'README.md'
$readme = Get-Content -Path $readmePath -Raw -Encoding UTF8
$readme = [regex]::Replace($readme, '(?m)^- \*\*Sitio publicado:\*\*.*$', ('- **Sitio publicado:** ' + $base + '/'))
Set-Content -Path $readmePath -Value $readme -Encoding UTF8
Write-Host "URL final configurada: $base/" -ForegroundColor Green
Write-Host 'Se actualizaron index.html, robots.txt, README.md y sitemap.xml.'
Write-Host 'Revisá los cambios con git diff y hacé un nuevo push para publicar los metadatos definitivos.'
