const gallery = document.querySelector('#gallery');
const viewer = document.querySelector('#viewer');
const largeImage = document.querySelector('#largeImage');
const viewerTitle = document.querySelector('#viewerTitle');
document.querySelector('#year').textContent = new Date().getFullYear();
let works = [];
function textElement(tag, className, value) { const el = document.createElement(tag); el.className = className; el.textContent = value; return el; }
function render() {
  gallery.replaceChildren();
  const shown = works;
  if (!shown.length) { gallery.append(textElement('p', 'details', 'No hay obras para mostrar.')); return; }
  shown.forEach(work => {
    const article = document.createElement('article'); article.className = 'artwork';
    const button = document.createElement('button'); button.className = 'image-button'; button.type = 'button'; button.setAttribute('aria-label', `Ampliar ${work.titulo}`);
    const img = document.createElement('img'); img.src = work.imagen; img.alt = `Obra ${work.titulo}, de ${work.autora}`; img.loading = 'lazy';
    button.append(img);
    button.addEventListener('click', () => { largeImage.src = work.imagen; largeImage.alt = img.alt; viewerTitle.textContent = `${work.titulo} — ${work.autora}`; viewer.showModal(); });
    
article.append(
  button,
  textElement('h3', '', work.titulo),
  textElement('p', 'details', work.tecnica),
  textElement('p', 'details', work.medidas),
  textElement('p', 'details', work.autora),
  textElement('p', 'price', work.precio || 'Consultar precio')
);

    gallery.append(article);
  });
}
document.querySelector('#closeViewer').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', e => { if (e.target === viewer) viewer.close(); });
fetch('obras.json').then(r => { if (!r.ok) throw Error('No se pudo cargar el catálogo'); return r.json(); }).then(data => { works = data; render(); }).catch(() => { gallery.textContent = 'No se pudo cargar el catálogo. Abrí la página desde GitHub Pages o un servidor local.'; });
