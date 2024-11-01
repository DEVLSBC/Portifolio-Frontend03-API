// Carrega o formulário

const formularioCEP = document.querySelector("#formularioCEP");

// Mensagem de ERRO
const mensagemErro = "CEP invalido!";


// Ao carregar a página, coloca o foco do cursor no campo CEP

window.onload = () => {
    colocarFoco(formularioCEP.cep);
};

// Cria um evento de submit/envio do formulario

formularioCEP.addEventListener('submit', (evento) => {
    // Previne o comportamento padrão do submit
    evento.preventDefault();

    // Obtem o CEP informado pelo usuário
    const cep = formularioCEP.cep.value;

    // Verifica se o CEP informado possui 8 digitos
    if(cep.length !== 8){
        limparTodosCampos();
        mostrarMensagem(mensagemErro);
        colocarFoco(formularioCEP.cep);
        return; // Early return(retorno antecipado)
    }

    // Chama a function para buscar o CEP na API ViaCEP
    buscarCEP(cep);
})


function buscarCEP(cep) {
    // URL da API ViaCEP
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    // Faz a solicitação HTTP para a API ViaCEP
    fetch(url)
        // Se tiver sucesso, converte os dados em JSON
        .then(response => response.json())

        // Exibe os dados no formulario
        .then(dados => {
            //Verifica se o CEP foi encontrado
            if(!dados.erro){
                formularioCEP.logradouro.value = dados.logradouro;
                formularioCEP.bairro.value = dados.bairro;
                formularioCEP.localidade.value = dados.localidade;
                formularioCEP.estado.value = dados.estado;
                formularioCEP.regiao.value = dados.regiao;
            }
            else{
                limparTodosCampos();
                mostrarMensagem(mensagemErro);
                colocarFoco(formularioCEP.cep);
            }
        });

        limparCEP();

        //Coloca o foco no campo Numero
        colocarFoco(formularioCEP.numero);
}


// ======= functions auxiliares =======

function colocarFoco(campo){
    campo.focus();
}

function limparCEP() {
    formularioCEP.cep.value = "";
}

function limparTodosCampos() {
    formularioCEP.reset();
}

function mostrarMensagem(mensagem) {
    alert(mensagem);
}
