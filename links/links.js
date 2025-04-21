const tituloInput = document.getElementById('titulo');
const urlInput    = document.getElementById('url');
const añadirBtn   = document.getElementById('añadir');
const listaMain   = document.getElementById('lista-links-main');

function crearElementoEnLista(titulo, url) {
  const li = document.createElement('li');
  li.style.display = 'flex';
  li.style.justifyContent = 'space-between';
  li.style.alignItems = 'center';
  li.style.marginBottom = '8px';
  li.style.padding = '5px 10px';
  li.style.background = 'rgba(255,255,255,0.05)';
  li.style.borderRadius = '4px';

  const enlace = document.createElement('a');
  enlace.href = url;
  enlace.target = "_blank";
  enlace.textContent = titulo;
  enlace.style.color = '#00ffcc';
  enlace.style.flexGrow = '1';
  enlace.style.textDecoration = 'none';

  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = 'Eliminar';
  btnEliminar.classList.add('eliminar');
  btnEliminar.style.padding = '4px 8px';
  btnEliminar.style.fontSize = '0.8rem';
  btnEliminar.style.backgroundColor = '#ff4444';
  btnEliminar.style.color = 'white';
  btnEliminar.style.border = 'none';
  btnEliminar.style.borderRadius = '4px';
  btnEliminar.style.cursor = 'pointer';
  btnEliminar.style.marginLeft = '10px';
  btnEliminar.addEventListener('click', () => {
    eliminarDeLocalStorage(titulo, url);
    cargarLinks(); 
  });

  li.appendChild(enlace);
  li.appendChild(btnEliminar);
  listaMain.appendChild(li);
}

function guardarEnLocalStorage(titulo, url) {
  const links = JSON.parse(localStorage.getItem('links')) || [];
  links.push({ titulo, url });
  localStorage.setItem('links', JSON.stringify(links));
}

function eliminarDeLocalStorage(titulo, url) {
  let links = JSON.parse(localStorage.getItem('links')) || [];
  links = links.filter(l => !(l.titulo === titulo && l.url === url));
  localStorage.setItem('links', JSON.stringify(links));
}

function cargarLinks() {
  listaMain.innerHTML = '';
  const enlaces = JSON.parse(localStorage.getItem('links')) || [];
  enlaces.forEach(l => crearElementoEnLista(l.titulo, l.url));
}

function configurarAñadir() {
  añadirBtn.addEventListener('click', () => {
    const titulo = tituloInput.value.trim();
    const url    = urlInput.value.trim();
    if (!titulo || !url) return alert('Rellena ambos campos');
    guardarEnLocalStorage(titulo, url);
    tituloInput.value = '';
    urlInput.value    = '';
    cargarLinks();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  configurarAñadir();
  cargarLinks();
});