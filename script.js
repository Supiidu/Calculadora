let expressao = "";

function adicionarNumero(numero) {
  expressao += numero;
  document.getElementById("resultado").value = expressao;
}

function operacao(op) {
  expressao += ` ${op} `;
  document.getElementById("resultado").value = expressao;
}

function calcular() {
  try {
    expressao = eval(expressao).toString();
    document.getElementById("resultado").value = expressao;
  } catch {
    document.getElementById("resultado").value = "Erro!";
    expressao = "";
  }
}

function limpar() {
  expressao = "";
  document.getElementById("resultado").value = "";
}

document.getElementById('toggle-theme').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});