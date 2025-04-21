function actualizarReloj() {
    const ahora = new Date();
  
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
  
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const año = ahora.getFullYear();
  
    document.getElementById('hora').textContent = `${horas}:${minutos}:${segundos}`;
    document.getElementById('fecha').textContent = `${dia}/${mes}/${año}`;
    document.getElementById('mensaje').textContent = obtenerMensaje(horas);
  }
  
  function obtenerMensaje(horas) {
    const h = parseInt(horas);
    if (h >= 0 && h <= 7) return 'Es hora de descansar. Apaga y sigue mañana';
    if (h >= 7 && h <= 12) return 'Buenos días, desayuna fuerte y a darle al código';
    if (h > 12 && h <= 14) return 'Echa un rato más pero no olvides comer';
    if (h > 14 && h <= 16) return 'Espero que hayas comido';
    if (h > 16 && h <= 18) return 'Buenas tardes, el último empujón';
    if (h > 18 && h <= 22) return 'Esto ya son horas extras... piensa en parar pronto';
    return 'Buenas noches, es hora de pensar en parar y descansar';
  }
  
  setInterval(actualizarReloj, 1000);
  actualizarReloj(); 
  