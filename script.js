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

if (letrasCorreta.includes(letra) || letraErradas.includes(letra)) {
  document.getElementById("mensagem").textContent = "cê ja tentou essa letra bocó";
  return;
}

  if (palavras.includes(letra)) {
    letrasCorretas.push(letra);
    if (!palavra.split("").some(letra=> !letraCorretas.includes(letra))) }
  document.getElementById("mensagem").textContent = "boa mlk! acertou!";
}
} else {
  letrasErradas.push(letra);
  tentativas--;
  document.getElementById("mensagem").textContent = "letra errada burro";
}

document.getElementById("tentativas").textContent = tentativas;
document.getElementById("letrasErradas").textContent = letrasErradas.join(", ");
exibirPalavra();

if (tentativas === 0) {
  document.getElementById(",mensagem")
