// Carrega o formulário

const formularioCEP = document.querySelector("#formularioCEP");

// Mensagem de ERRO
const mensagemErro = "CEP invalido!";


// Ao carregar a página, coloca o foco do cursor no campo CEP

window.onload = () => {
    colocarFoco(formularioCEP.cep);
};



// ======= functions auxiliares =======

function colocarFoco(campo){
    campo.focus();

}
