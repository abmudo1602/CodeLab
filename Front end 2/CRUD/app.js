document.addEventListener('DOMContentLoaded', () => {
    renderizarContatos();
})

let lista = buscarStorage();

const barra = document.getElementById('sidebar');
const saida = document.getElementById('saida');
const salvar = document.getElementById('butaoSalvar');
const tituloForm = document.getElementById('tituloForm');

let contatos = lista
let indiceEditado = null;

function mostrarFormulario() {
    barra.style.display = "inline";
}

function esconderFormulario() {
    barra.style.display = "none";
    
    // Limpa os campos e mensagens
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cidade').value = '';
    saida.innerText = '';
    
    // Reseta o botão e o título para o padrão
    salvar.textContent = 'Salvar';
    tituloForm.textContent = 'Novo Contato';
    indiceEditado = null;
}

// renderizarContatos();

// Função única para o botão Salvar / Salvar Edição
function salvarContato() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const cidade = document.getElementById('cidade').value;

    if (!nome.trim() || !telefone.trim() || !email.trim() || !cidade.trim()) {
        saida.innerText = 'Preencha os campos corretamente';
        saida.style.color = 'red';
        return;
    }

    // if (telefone.length < 12) {
    //     saida.innerText = 'Preencha o telefone corretamente';
    //     saida.style.color = 'red';
    //     return;
    // }

    // if(!email.includes('@') || !email.includes('.')){
    //     saida.innerText = 'Preencha o email corretamente';
    //     saida.style.color = 'red';
    //     return
    // }

    const dadosContato = { nome, telefone, email, cidade };

    if (indiceEditado === null) {
        // Modo Adicionar
        salvarStorage(dadosContato, contatos);
    } else {
        // Modo Editar
        contatos[indiceEditado] = dadosContato;
    }

    atualizarStorage();

    renderizarContatos();
    esconderFormulario();
}

function renderizarContatos() {
    const corpoTabela = document.getElementById('lista');
    corpoTabela.innerHTML = '';

    contatos.forEach((contato, index) => {
        const linha = document.createElement('tr');

        const celulaNome = document.createElement('td');
        celulaNome.textContent = contato.nome;

        const celulaTelefone = document.createElement('td');
        celulaTelefone.textContent = contato.telefone;

        const celulaAcoes = document.createElement('td');

        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
        botaoEditar.onclick = function () { editarContato(index); };

        const botaoRemover = document.createElement('button');
        botaoRemover.onclick = function () { removerContato(index); };
        botaoRemover.textContent = 'Remover';

        celulaAcoes.appendChild(botaoEditar);
        celulaAcoes.appendChild(botaoRemover);

        linha.appendChild(celulaNome);
        linha.appendChild(celulaTelefone);
        linha.appendChild(celulaAcoes);
        corpoTabela.appendChild(linha);
    });
}

function editarContato(index) {
    const contato = contatos[index];
    
    document.getElementById('nome').value = contato.nome;
    document.getElementById('telefone').value = contato.telefone;
    document.getElementById('email').value = contato.email || '';
    document.getElementById('cidade').value = contato.cidade || '';
    
    indiceEditado = index;
    
    // Altera o texto do botão e do título
    salvar.textContent = 'Salvar Edição';
    tituloForm.textContent = 'Editar Contato';
    
    mostrarFormulario();
}

function salvarEdicao() {
    contatos[indiceEditado] = {
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        cidade: document.getElementById('cidade').value
    };
    renderizarContatos();
    esconderFormulario();
    indiceEditado = null;
}

function removerContato(index){
    contatos.splice(index, 1);
    atualizarStorage();
    esconderFormulario();
    renderizarContatos();
}

function buscarStorage(){
    let storage = localStorage.getItem('busca');
     return storage ? JSON.parse(storage) : [];
}

function salvarStorage(contato, contatos){
    contatos.push(contato);
    let texto = JSON.stringify(contatos);
    const exists = buscarStorage();
    if(exists !== null){
        return localStorage.setItem('busca', texto);
    }
}

function atualizarStorage(){
    localStorage.setItem('busca', JSON.stringify(contatos));
}