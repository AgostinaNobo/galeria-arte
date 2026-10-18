# M. L. Perlán – Galería de arte

Galería virtual de las obras de María Luján Perlán, desarrollada con HTML, CSS y JavaScript y publicada mediante GitHub Pages.

## Estructura del proyecto

- `index.html`: estructura principal de la página.
- `style.css`: diseño y apariencia de la galería.
- `script.js`: funcionamiento e interactividad.
- `obras.json`: información de las obras exhibidas.
- `imagenes/`: fotografías de las obras.

## Agregar una nueva obra

1. Subir la fotografía a la carpeta `imagenes/`.
2. Abrir el archivo `obras.json`.
3. Agregar un nuevo objeto con los datos de la obra, respetando el formato JSON:

```json
{
  "titulo": "Nombre de la obra",
  "autora": "María Luján Perlán",
  "tecnica": "Óleo sobre tela",
  "medidas": "50 × 70 cm",
  "precio": "Consultar precio",
  "imagen": "nombre-de-la-obra.jpeg"
}
```

4. Verificar que el nombre de la imagen coincida exactamente con el archivo subido, incluyendo su extensión (`.jpg`, `.jpeg` o `.png`).
5. Guardar los cambios mediante `Commit changes`.

## Modificar una obra existente

Desde `obras.json` se pueden actualizar:

- Título de la obra.
- Técnica y materiales utilizados.
- Medidas.
- Precio o disponibilidad.
- Fotografía asociada.

Para modificar una imagen, reemplazar el archivo correspondiente en `imagenes/` o actualizar su nombre en `obras.json`.

Las obras pueden reorganizarse modificando su posición dentro de la lista, siempre que el código de la galería respete ese orden.

## Publicar los cambios

1. Realizar las modificaciones necesarias en GitHub.
2. Confirmarlas mediante `Commit changes`.
3. Esperar unos minutos para que GitHub Pages publique la nueva versión.
4. Abrir la galería y recargar con `Ctrl + Shift + R` para evitar visualizar una versión almacenada en caché.

## Contacto

Instagram: https://www.instagram.com/mlperlan.art/

---

La galería está alojada en GitHub Pages y no requiere instalar dependencias.
