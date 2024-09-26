/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista, temos que marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

	OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele 
*/

const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

// Função para remover a classe 'selecionado' de um elemento, caso exista
function removerSelecao(classe) {
  const selecionado = document.querySelector(`.${classe}.selecionado`);
  if (selecionado) selecionado.classList.remove("selecionado");
}

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // Remover seleção do botão e do personagem previamente selecionados
    removerSelecao('botao');
    removerSelecao('personagem');
    
    // Adicionar seleção ao botão e personagem correspondentes
    botao.classList.add("selecionado");
    personagens[indice].classList.add("selecionado");
  });
});

