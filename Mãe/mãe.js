// ======================================
// ELEMENTOS DO HTML
// ======================================

const botaoAdicionar = document.getElementById('butao');

const modal = document.getElementById('modalCliente');

const botaoFechar = document.getElementById('fecharModal');
const botaoCancelar = document.getElementById('cancelarModal');

const formulario = document.getElementById('formCliente');

const campoNome = document.getElementById('nome');
const campoTelefone = document.getElementById('telefone');
const campoEmail = document.getElementById('email');
const campoObservacoes = document.getElementById('observacoes');

const campoPesquisa = document.getElementById('pesquisar');

const gradeClientes = document.getElementById('gradeClientes');
const contadorClientes = document.getElementById('contadorClientes');


// ======================================
// ARMAZENAMENTO
// ======================================

// Recupera os clientes salvos no navegador.
// Caso não exista nenhum cadastro, começa com um array vazio.

let clientes = JSON.parse(localStorage.getItem('clientes')) || [];


// ======================================
// MODAL
// ======================================

// Abre o modal

function abrirModal() {
    modal.style.display = 'flex';
    campoNome.focus();
}


// Fecha o modal

function fecharModal() {
    modal.style.display = 'none';
    formulario.reset();
}


// Eventos de abertura e fechamento

botaoAdicionar.addEventListener('click', abrirModal);

botaoFechar.addEventListener('click', fecharModal);

botaoCancelar.addEventListener('click', fecharModal);


// Fecha ao clicar fora da janela

modal.addEventListener('click', function(event) {

    if (event.target === modal) {
        fecharModal();
    }

});


// Fecha ao pressionar ESC

document.addEventListener('keydown', function(event) {

    if (event.key === 'Escape') {
        fecharModal();
    }

});


// ======================================
// SALVAR CLIENTES
// ======================================

formulario.addEventListener('submit', function(event) {

    // Impede o recarregamento da página
    event.preventDefault();

    // Cria um objeto com os dados do formulário
    const novoCliente = {

        id: crypto.randomUUID(),

        nome: campoNome.value.trim(),

        telefone: campoTelefone.value.trim(),

        email: campoEmail.value.trim(),

        observacoes: campoObservacoes.value.trim()

    };


    // Verifica se o nome foi preenchido
    if (novoCliente.nome === '') {
        campoNome.focus();
        return;
    }


    // Adiciona o cliente ao array
    clientes.push(novoCliente);


    // Salva os clientes no localStorage
    salvarClientes();


    // Atualiza os cards
    renderizarClientes();


    // Fecha e limpa o modal
    fecharModal();

});


// ======================================
// SALVAR NO LOCALSTORAGE
// ======================================

function salvarClientes() {

    localStorage.setItem('clientes', JSON.stringify(clientes));

}


// ======================================
// RENDERIZAR CLIENTES
// ======================================

function renderizarClientes(lista = clientes) {

    // Limpa os cards anteriores
    gradeClientes.innerHTML = '';


    // Atualiza o contador
    contadorClientes.textContent = String(clientes.length).padStart(2, '0');


    // Verifica se existem clientes
    if (lista.length === 0) {

        const mensagem = document.createElement('p');

        mensagem.classList.add('mensagem-vazia');

        mensagem.textContent = clientes.length === 0
            ? 'Nenhum cliente cadastrado ainda.'
            : 'Nenhum cliente encontrado.';

        gradeClientes.appendChild(mensagem);

        return;
    }


    // Percorre a lista de clientes
    lista.forEach(function(cliente) {

        // Cria o card
        const card = document.createElement('article');

        card.classList.add('card-cliente');


        // Parte superior do card
        const topo = document.createElement('div');

        topo.classList.add('card-topo');


        const icone = document.createElement('div');

        icone.classList.add('icone-pasta');

        icone.textContent = '▱';


        const status = document.createElement('span');

        status.classList.add('status');

        status.textContent = 'Ativo';


        topo.appendChild(icone);
        topo.appendChild(status);


        // Informações do cliente
        const informacoes = document.createElement('div');

        informacoes.classList.add('card-info');


        const nome = document.createElement('h3');

        nome.textContent = cliente.nome;


        const email = document.createElement('p');

        email.textContent = cliente.email || 'Sem e-mail cadastrado';


        informacoes.appendChild(nome);
        informacoes.appendChild(email);


        // Rodapé do card
        const rodape = document.createElement('div');

        rodape.classList.add('card-rodape');


        const inventarios = document.createElement('span');

        inventarios.textContent = '0 inventários';


        const botaoAbrir = document.createElement('button');

        botaoAbrir.classList.add('botao-abrir');

        botaoAbrir.textContent = 'Abrir →';

        botaoAbrir.type = 'button';


        // Ainda vamos implementar a tela de inventários
        botaoAbrir.addEventListener('click', function() {

            alert('A área de inventários será implementada em breve!');

        });


        rodape.appendChild(inventarios);
        rodape.appendChild(botaoAbrir);


        // Monta o card completo
        card.appendChild(topo);

        card.appendChild(informacoes);

        card.appendChild(rodape);


        // Adiciona o card à página
        gradeClientes.appendChild(card);

    });

}


// ======================================
// PESQUISAR CLIENTES
// ======================================

campoPesquisa.addEventListener('input', function() {

    const pesquisa = campoPesquisa.value.trim().toLowerCase();


    // Filtra os clientes
    const clientesFiltrados = clientes.filter(function(cliente) {

        return (
            cliente.nome.toLowerCase().includes(pesquisa) ||

            cliente.email.toLowerCase().includes(pesquisa) ||

            cliente.telefone.includes(pesquisa)
        );

    });


    // Exibe apenas os resultados encontrados
    renderizarClientes(clientesFiltrados);

});


// ======================================
// INICIALIZAÇÃO
// ======================================

// Executa quando a página é carregada

renderizarClientes();