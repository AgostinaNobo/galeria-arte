# Galería M. L. Perlán

Sitio estático gratuito para GitHub Pages. Los tres cuadros iniciales son **marcadores de posición**, no obras reales.

## Publicar en GitHub Pages

1. En github.com, creá un repositorio **público** llamado `galeria-arte`.
2. Extraé este ZIP en tu computadora.
3. En el repositorio, elegí **Add file → Upload files** y subí **el contenido de la carpeta `galeria-perlan`**, incluidos `index.html`, `style.css`, `script.js`, `obras.json` y la carpeta `imagenes` (no subas la carpeta contenedora como nivel adicional).
4. Hacé clic en **Commit changes**.
5. En **Settings → Pages**, elegí **Deploy from a branch**, rama **main**, carpeta **/(root)**, y **Save**.
6. Esperá unos minutos y abrí `https://TU-USUARIO.github.io/galeria-arte/`.

## Agregar una obra

1. Subí una foto JPG/PNG/WebP a la carpeta `imagenes` con **Add file → Upload files** (por ejemplo `retrato-azul.jpg`). Preferí archivos comprimidos de menos de 1 MB si es posible.
2. Abrí `obras.json`, presioná el lápiz (Edit) y copiá un objeto entre llaves. Separá cada objeto con una coma. Cambiá los campos y poné `"imagen": "imagenes/retrato-azul.jpg"`.
3. Para un precio visible, usá `"precio": "$ 250.000 ARS"`. Para ocultarlo, `"precio": "Consultar precio"`.
4. Usá `"disponible": false` si ya se vendió.
5. Guardá con **Commit changes** y esperá a que GitHub Pages se actualice.

## Personalizar

- Biografía: editá el texto de la sección `id="artista"` en `index.html`.
- Contacto: reemplazá el enlace de Instagram en `index.html` si cambia.
- Colores y diseño: `style.css`.
- Para eliminar los ejemplos, reemplazá los tres objetos de `obras.json` con los datos de obras reales.

**Nota:** Si abrís `index.html` haciendo doble clic en tu computadora, algunos navegadores bloquean la lectura de `obras.json`. Publicado en GitHub Pages funciona normalmente.
