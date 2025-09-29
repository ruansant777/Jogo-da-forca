let palavras = ["python", "desenvolvimento", "programcao", "algoritmo", "github"];
let palavras = palavras[Math.floor(Math.random () * palavras.length)];
let letrasCorretas = [];
let letrasErradas = [];
let tentativas = 6;

function exibirPalavra () {
  let exibir = palavra.split("").map(letra => letrasCorretas.includes(letra) ? letra: "__").join(" ");
  document.getElementById("palavra").textContent = exibir;
}

function verificarLetra() {
  const letra = document.getElementById("inputLetra").value.toLowerCase();

if (letra=== " " || letra.length >1) {
  return;
}

if (letrasCorreta.includes(letra))
