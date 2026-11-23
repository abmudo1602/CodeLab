const carta = document.getElementById('cartaMenu');
const cartaInterna = carta.querySelector('.carta-inner');

const botaoCriar = document.querySelector('[data-secao="criar"]');
const secaoCriar = document.getElementById('secaoCriar');
const botaoVoltar = document.getElementById('voltarMenu');
const botaoVoltarCarta = document.getElementById('voltarCarta');
const botaoAvancarCarta = document.getElementById('avancarCarta');

const formulario = document.getElementById('formCartao');
const campoPergunta = document.getElementById('pergunta');
const campoResposta = document.getElementById('resposta');
const saida = document.getElementById('saida');

const recipienteCartas = document.getElementById('cartasEstudo');

let baralho = JSON.parse(localStorage.getItem('baralho')) || [];

// VIRAR CARTA DO MENU
carta.addEventListener('click', () => {
    cartaInterna.classList.toggle('virada');
});


// ABRIR SEÇÃO DE CRIAÇÃO
botaoCriar.addEventListener('click', () => {
    carta.classList.add('escondido');
    secaoCriar.classList.remove('escondido');
});


// CRIAR NOVO CARTÃO
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

    baralho.push(novaCarta);
    localStorage.setItem('baralho', JSON.stringify(baralho));

    renderizarCartas();

    saida.innerText = 'Carta criada com sucesso!';
    saida.style.color = 'green';

    campoPergunta.value = '';
    campoResposta.value = '';
    voltarMenu();
});


// RENDERIZAR CARTÕES
function renderizarCartas() {

    recipienteCartas.innerHTML = '';

    baralho.forEach(cartaAtual => {

        // Criando os elementos
        const divCarta = document.createElement('div');
        const divInner = document.createElement('div');
        const cartaFrente = document.createElement('div');
        const cartaVerso = document.createElement('div');
        const botaoExcluir = document.createElement('button');

        // Configurando o botão
        botaoExcluir.innerText = '🗑️';
        botaoExcluir.classList.add('excluir');

        // Adicionando as classes
        divCarta.classList.add('carta', 'estudo');
        divInner.classList.add('carta-inner');
        cartaFrente.classList.add('carta-frente');
        cartaVerso.classList.add('carta-verso');

        // Adicionando os textos
        cartaFrente.innerText = cartaAtual.pergunta;
        cartaVerso.innerText = cartaAtual.resposta;

        // Montando a estrutura
        divInner.appendChild(cartaFrente);
        divInner.appendChild(cartaVerso);
        divCarta.appendChild(divInner);
        divCarta.appendChild(botaoExcluir);

        recipienteCartas.appendChild(divCarta);

        // Fazendo o cartão virar
        divCarta.addEventListener('click', () => {
            divInner.classList.toggle('virada');
        });

        // Excluindo o cartão
        botaoExcluir.addEventListener('click', (event) => {

            event.stopPropagation();

            const indice = baralho.indexOf(cartaAtual);

            baralho.splice(indice, 1);

            localStorage.setItem('baralho', JSON.stringify(baralho));

            renderizarCartas();

        });

    });

    atualizarSetas();
}


function voltarMenu() {
    secaoCriar.classList.add('escondido');
    carta.classList.remove('escondido');
    cartaInterna.classList.remove('virada');
}

botaoVoltar.addEventListener('click', voltarMenu);

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

// Atualizar conforme a rolagem acontece
recipienteCartas.addEventListener('scroll', atualizarSetas);

function atualizarSetas() {
    const quantidadeCartas = baralho.length;

    const posicaoAtual = recipienteCartas.scrollLeft;

    const limiteScroll = recipienteCartas.scrollWidth -
                         recipienteCartas.clientWidth;

    // Desativar ambas se houver apenas um cartão ou nenhum
    if (quantidadeCartas <= 1) {
        botaoVoltarCarta.disabled = true;
        botaoAvancarCarta.disabled = true;
        return;
    }

    // Desativar a seta esquerda no início
    botaoVoltarCarta.disabled = posicaoAtual <= 1;

    // Desativar a seta direita no final
    botaoAvancarCarta.disabled = posicaoAtual >= limiteScroll - 1;
}

renderizarCartas();
atualizarSetas();

botaoExcluir.addEventListener('click', (event) => {
    event.stopPropagation();

    const indice = baralho.indexOf(cartaAtual);

    baralho.splice(indice, 1);

    localStorage.setItem('baralho', JSON.stringify(baralho));

    renderizarCartas();
});