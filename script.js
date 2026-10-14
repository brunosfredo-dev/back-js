// =====================================================
// DEMONSTRAÇÃO DO DOM — abra o index.html no navegador
// e aperte F12 para ver as mensagens no console.
// =====================================================

console.log("script.js carregado!");

// -----------------------------------------------------
// 1. TROCAR DE "PÁGINA" (mostrar uma seção, esconder as outras)
// -----------------------------------------------------
const botoesMenu = document.querySelectorAll("nav button");
const paginas = document.querySelectorAll(".pagina");

botoesMenu.forEach((botao) => {
  botao.addEventListener("click", () => {
    // Qual página este botão quer mostrar? (vem do data-pagina no HTML)
    const idDaPagina = botao.dataset.pagina;

    // Esconde todas as páginas e tira o destaque de todos os botões
    paginas.forEach((pagina) => pagina.classList.remove("visivel"));
    botoesMenu.forEach((b) => b.classList.remove("ativo"));

    // Mostra só a página escolhida e destaca o botão clicado
    document.querySelector("#" + idDaPagina).classList.add("visivel");
    botao.classList.add("ativo");

    console.log("Mostrando a página:", idDaPagina);
  });
});

// -----------------------------------------------------
// 2. ALTERAR TEXTO E ESTILO
// -----------------------------------------------------
const titulo = document.querySelector("#titulo");
const paragrafos = document.querySelectorAll(".texto");

// Muda o texto e a cor do título
document.querySelector("#btn-mudar-titulo").addEventListener("click", () => {
  titulo.textContent = "Título mudado pelo JavaScript!";
  titulo.style.color = "#2f6f62";
});

// Passa todos os parágrafos para maiúsculas
document.querySelector("#btn-maiusculas").addEventListener("click", () => {
  paragrafos.forEach((p) => {
    p.textContent = p.textContent.toUpperCase();
  });
});

// Liga e desliga uma classe do CSS
document.querySelector("#btn-destaque").addEventListener("click", () => {
  paragrafos.forEach((p) => p.classList.toggle("destaque"));
});

// Modo escuro: liga e desliga a classe "escuro" no <body>
const botaoEscuro = document.querySelector("#btn-escuro");
botaoEscuro.addEventListener("click", () => {
  document.body.classList.toggle("escuro");

  // Muda o texto do botão conforme o modo atual
  if (document.body.classList.contains("escuro")) {
    botaoEscuro.textContent = "Modo claro";
  } else {
    botaoEscuro.textContent = "Modo escuro";
  }
});

// -----------------------------------------------------
// 3. CRIAR E REMOVER ELEMENTOS
// -----------------------------------------------------
const lista = document.querySelector("#lista");
const cores = ["vermelho", "verde", "azul", "amarelo", "roxo", "laranja"];
let proximaCor = 0;

function adicionarCor(nomeDaCor) {
  const item = document.createElement("li");   // 1. cria
  item.textContent = nomeDaCor;                 // 2. preenche

  // Cada item ganha seu próprio botão de remover
  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";
  botaoRemover.addEventListener("click", () => {
    item.remove();
  });

  item.appendChild(botaoRemover);
  lista.appendChild(item);                      // 3. coloca na página
}

// Começa com três cores na tela
adicionarCor("vermelho");
adicionarCor("verde");
adicionarCor("azul");
proximaCor = 3;

document.querySelector("#btn-adicionar").addEventListener("click", () => {
  adicionarCor(cores[proximaCor % cores.length]);
  proximaCor++;
});

document.querySelector("#btn-limpar").addEventListener("click", () => {
  lista.innerHTML = "";
});

// -----------------------------------------------------
// 4. LER O QUE O USUÁRIO DIGITA
// -----------------------------------------------------
const campoNome = document.querySelector("#campo-nome");
const saudacao = document.querySelector("#saudacao");
const contador = document.querySelector("#contador");

// O evento "input" dispara a cada letra digitada
campoNome.addEventListener("input", () => {
  const nome = campoNome.value.trim();

  if (nome === "") {
    saudacao.textContent = "Digite algo no campo acima.";
  } else {
    saudacao.textContent = `Olá, ${nome}!`;
  }

  contador.textContent = `Letras: ${campoNome.value.length}`;
});
