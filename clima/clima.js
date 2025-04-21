const apiKey = "7b1d25eeed274317a33191403252104"; 
const ciudad = "Barcelona";

async function obtenerClima() {
  try {
    const respuesta = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ciudad}&days=1&aqi=no&alerts=no`);
    const datos = await respuesta.json();

    document.getElementById('ciudad').textContent = datos.location.name;
    document.getElementById('pais').textContent = datos.location.country;
    document.getElementById('estado').textContent = datos.current.condition.text;
    document.getElementById('icono').src = datos.current.condition.icon;
    document.getElementById('temp').textContent = datos.current.temp_c;
    document.getElementById('lluvia').textContent = datos.forecast.forecastday[0].day.totalprecip_mm;
    document.getElementById('humedad').textContent = datos.current.humidity;
    document.getElementById('viento').textContent = datos.current.wind_kph;

    mostrarHoras(datos.forecast.forecastday[0].hour);
  } catch (error) {
    console.error("Error al obtener el clima:", error);
  }
}

function mostrarHoras(horas) {
  const contenedor = document.getElementById('horas');
  contenedor.innerHTML = ''; 
  horas.forEach(hora => {
    const div = document.createElement('div');
    div.classList.add('hora-item');
    div.innerHTML = `
      <p>${hora.time.split(' ')[1]}</p>
      <img src="${hora.condition.icon}" alt="${hora.condition.text}">
      <p>${hora.temp_c}°C</p>
    `;
    contenedor.appendChild(div);
  });
 
  const horaActual = new Date().getHours();
  const idx = horas.findIndex(h => new Date(h.time).getHours() === horaActual);
  if (idx > -1) {
    const elemento = contenedor.children[idx];
    elemento.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }
}

obtenerClima();
