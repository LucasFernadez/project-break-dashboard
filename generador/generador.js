const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()-_=+";

function generarPassword(longitud) {
  if (longitud < 12 || longitud > 50) {
    return "La longitud debe estar entre 12 y 50 caracteres.";
  }

  const todos = mayusculas + minusculas + numeros + simbolos;
  let password = "";

  password += mayusculas[Math.floor(Math.random() * mayusculas.length)];
  password += minusculas[Math.floor(Math.random() * minusculas.length)];
  password += numeros[Math.floor(Math.random() * numeros.length)];
  password += simbolos[Math.floor(Math.random() * simbolos.length)];

  for (let i = password.length; i < longitud; i++) {
    password += todos[Math.floor(Math.random() * todos.length)];
  }

  return password.split('').sort(() => Math.random() - 0.5).join('');
}

document.getElementById("generar").addEventListener("click", () => {
  const longitud = parseInt(document.getElementById("longitud").value);
  const contraseña = generarPassword(longitud);
  document.getElementById("resultado").textContent = contraseña;
});
