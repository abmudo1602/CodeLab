// ELEMENTOS DO MENU
const carta = document.getElementById('cartaMenu');
const cartaInterna = carta.querySelector('.carta-inner');

const botaoCriar = document.querySelector('[data-secao="criar"]');
const secaoCriar = document.getElementById('secaoCriar');
const botaoVoltar = document.getElementById('voltarMenu');
const secaoColecoes = document.getElementById('secaoColecoes')
const formularioColecao = document.getElementById('formularioColecao');
const botaoNovaColecao = document.getElementById('novaColecao');
const listaColecoes = document.getElementById('listaColecoes');

// BOTÕES DE NAVEGAÇÃO
const botaoVoltarCarta = document.getElementById('voltarCarta');
const botaoAvancarCarta = document.getElementById('avancarCarta');

// FORMULÁRIO
const formulario = document.getElementById('formCartao');
const campoPergunta = document.getElementById('pergunta');
const campoResposta = document.getElementById('resposta');
const botaoEnviar = document.getElementById('botaoEnviar');
const saida = document.getElementById('saida');
const voltarMenuSecoes = document.getElementById('voltarMenuColecoes')
const MenuSecoes = document.querySelector('[data-secao="colecoes"]')

// ÁREA DOS CARTÕES
const recipienteCartas = document.getElementById('cartasEstudo');

// DADOS
let baralho = JSON.parse(localStorage.getItem('baralho')) || [];
let colecoes = JSON.parse(localStorage.getItem('colecoes')) || [];

// Coleção
const campoNomeColecao = document.getElementById('nomeColecao');
const campoDescricaoColecao = document.getElementById('descricaoColecao');
const botaoCriarColecao = document.getElementById('butaoCriarColecao');

// CONTROLE DE EDIÇÃO
let indiceEdicao = null;


// VIRAR CARTA DO MENU
carta.addEventListener('click', () => {
    cartaInterna.classList.toggle('virada');
});


// ABRIR SEÇÃO DE CRIAÇÃO
botaoCriar.addEventListener('click', () => {
    carta.classList.add('escondido');
    secaoCriar.classList.remove('escondido');
});


// VOLTAR AO MENU
function voltarMenu() {
    secaoCriar.classList.add('escondido');

    carta.classList.remove('escondido');
    cartaInterna.classList.remove('virada');

    indiceEdicao = null;

    botaoEnviar.innerText = 'Adicionar cartão';

    campoPergunta.value = '';
    campoResposta.value = '';

    saida.innerText = '';
}

botaoVoltar.addEventListener('click', voltarMenu);


// CRIAR E EDITAR CARTÕES
formulario.addEventListener('submit', (event) => {

    event.preventDefault();

    const pergunta = campoPergunta.value.trim();
    const resposta = campoResposta.value.trim();

    if (!pergunta || !resposta) {
        saida.innerText = 'Preencha os campos corretamente';
        saida.style.color = 'red';
        return;
    }

    const novaCarta = {
        pergunta,
        resposta
    };

    if (indiceEdicao === null) {

        // CRIAR CARTÃO
        baralho.push(novaCarta);

        saida.innerText = 'Carta criada com sucesso!';

    } else {

        // EDITAR CARTÃO
        baralho[indiceEdicao] = novaCarta;

        saida.innerText = 'Carta atualizada com sucesso!';

        indiceEdicao = null;

    }

    saida.style.color = 'green';

    // SALVAR NO LOCALSTORAGE
    localStorage.setItem('baralho', JSON.stringify(baralho));

    // ATUALIZAR CARTÕES
    renderizarCartas();

    // LIMPAR FORMULÁRIO
    campoPergunta.value = '';
    campoResposta.value = '';

    voltarMenu();

});


// RENDERIZAR CARTÕES
function renderizarCartas() {

    recipienteCartas.innerHTML = '';

    baralho.forEach(cartaAtual => {

        // CRIAR ELEMENTOS
        const divCarta = document.createElement('div');
        const divInner = document.createElement('div');
        const cartaFrente = document.createElement('div');
        const cartaVerso = document.createElement('div');

        const botaoExcluir = document.createElement('button');
        const botaoEditar = document.createElement('button');

        // CONFIGURAR BOTÕES
        botaoExcluir.innerText = '🗑️';
        botaoExcluir.classList.add('excluir');

        botaoEditar.innerText = '✏️';
        botaoEditar.classList.add('editar');

        // ADICIONAR CLASSES
        divCarta.classList.add('carta', 'estudo');

        divInner.classList.add('carta-inner');

        cartaFrente.classList.add('carta-frente');
        cartaVerso.classList.add('carta-verso');

        // ADICIONAR TEXTOS
        cartaFrente.innerText = cartaAtual.pergunta;
        cartaVerso.innerText = cartaAtual.resposta;

        // MONTAR CARTÃO
        divInner.appendChild(cartaFrente);
        divInner.appendChild(cartaVerso);

        divCarta.appendChild(divInner);
        divCarta.appendChild(botaoEditar);
        divCarta.appendChild(botaoExcluir);

        recipienteCartas.appendChild(divCarta);


        // VIRAR CARTÃO
        divCarta.addEventListener('click', () => {
            divInner.classList.toggle('virada');
        });


        // EXCLUIR CARTÃO
        botaoExcluir.addEventListener('click', (event) => {

            event.stopPropagation();

            const indice = baralho.indexOf(cartaAtual);

            baralho.splice(indice, 1);

            localStorage.setItem('baralho', JSON.stringify(baralho));

            renderizarCartas();

        });


        // EDITAR CARTÃO
        botaoEditar.addEventListener('click', (event) => {

            event.stopPropagation();

            indiceEdicao = baralho.indexOf(cartaAtual);

            campoPergunta.value = cartaAtual.pergunta;
            campoResposta.value = cartaAtual.resposta;

            botaoEnviar.innerText = 'Salvar alterações';

            saida.innerText = '';

            carta.classList.add('escondido');
            secaoCriar.classList.remove('escondido');

        });

    });

    atualizarSetas();

}


// NAVEGAÇÃO ENTRE CARTÕES
botaoVoltarCarta.addEventListener('click', () => {

    recipienteCartas.scrollBy({
        left: -420,
        behavior: 'smooth'
    });

});

botaoAvancarCarta.addEventListener('click', () => {

    recipienteCartas.scrollBy({
        left: 420,
        behavior: 'smooth'
    });

});


// ATUALIZAR SETAS DURANTE A ROLAGEM
recipienteCartas.addEventListener('scroll', atualizarSetas);


// CONTROLAR ESTADO DAS SETAS
function atualizarSetas() {

    const quantidadeCartas = baralho.length;

    const posicaoAtual = recipienteCartas.scrollLeft;

    const limiteScroll = recipienteCartas.scrollWidth -
                         recipienteCartas.clientWidth;

    if (quantidadeCartas <= 1) {

        botaoVoltarCarta.disabled = true;
        botaoAvancarCarta.disabled = true;

        return;
    }

    botaoVoltarCarta.disabled = posicaoAtual <= 1;

    botaoAvancarCarta.disabled = posicaoAtual >= limiteScroll - 1;

}


// CARREGAR CARTÕES AO ABRIR A PÁGINA
renderizarCartas();
atualizarSetas();

MenuSecoes.addEventListener('click', () => {
    carta.classList.add('escondido');
    secaoColecoes.classList.remove('escondido');
});

voltarMenuSecoes.addEventListener('click', () => {
    secaoColecoes.classList.add('escondido');
    carta.classList.remove('escondido');
    cartaInterna.classList.remove('virada');
})

botaoNovaColecao.addEventListener('click', () => {
    formularioColecao.classList.remove('escondido');
    botaoNovaColecao.classList.add('escondido');
});

function renderizarColecoes() {

    listaColecoes.innerHTML = '';

    colecoes.forEach((colecao, indice) => {

        const card = document.createElement('div');
        const titulo = document.createElement('h3');
        const descricao = document.createElement('p');
        const quantidade = document.createElement('span');

        card.classList.add('card-colecao');

        titulo.innerText = colecao.nome;
        descricao.innerText = colecao.descricao;
        quantidade.innerText = `${colecao.cartoes.length} cartões`;

        card.appendChild(titulo);
        card.appendChild(descricao);
        card.appendChild(quantidade);

        listaColecoes.appendChild(card);

    });

}

botaoCriarColecao.addEventListener('click', () => {
    let novaColecao = {nome: campoNomeColecao.value.trim(),
        descricao: campoDescricaoColecao.value.trim(),
        cartoes: []
    }
    if (!campoNomeColecao.value.trim()) {
    alert('Digite um nome para a coleção!');
    return;
    }
    colecoes.push(novaColecao);
    localStorage.setItem('colecoes', JSON.stringify(colecoes));
    campoNomeColecao.value = '';
    campoDescricaoColecao.value = ''
    formularioColecao.classList.add('escondido');
    botaoNovaColecao.classList.remove('escondido');
    renderizarColecoes();
});

renderizarColecoes();