# M. L. Perlán — Galería de arte

## Actualizar la página que ya publicaste
1. Descomprimí el ZIP. Entrá a la carpeta `galeria-perlan`.
2. En tu repositorio de GitHub, eliminá las imágenes de ejemplo (`imagenes/obra-1.svg`, `obra-2.svg`, `obra-3.svg`) si todavía están.
3. Subí a la **raíz** del repositorio los archivos `index.html`, `style.css`, `script.js`, `obras.json` y la carpeta `imagenes` con las siete fotografías JPG. No subas la carpeta `galeria-perlan` como carpeta anidada.
4. En GitHub, para actualizar archivos existentes, usá `Add file → Upload files`, arrastrá los archivos y confirmá `Commit changes`. Si la interfaz no te deja reemplazarlos en una sola operación, podés editar `obras.json` con el lápiz y subir las imágenes por separado.
5. Esperá unos minutos y recargá tu página (Ctrl+F5).

## Agregar o modificar obras
- Las fotos están en `imagenes/`.
- Cada obra se define en `obras.json`: `titulo`, `autora`, `tecnica`, `medidas`, `precio` e `imagen`.
- Para agregar una obra, subí su JPG a `imagenes/` y agregá un nuevo objeto a la lista de `obras.json`, separado por coma.
- Los siete precios se muestran como «Consultar precio». No se informa disponibilidad porque todavía no se proporcionó.
- El enlace de contacto apunta a `https://www.instagram.com/mlperlan.art/`.

La página funciona con GitHub Pages sin instalar dependencias.
