// ===== CAPTURA DOS ELEMENTOS HTML =====

const inputTarefa = document.getElementById('campoTexto');
const inputDescricao = document.getElementById('campoDescricao');
const botaoAdicionar = document.getElementById('butao');
const listaTarefas = document.getElementById('listaTarefas');

const tarefas = []

function adicionarTarefa(){
    const titulo = inputTarefa.value;
    const descricao = inputDescricao.value;

    const tarefa = {
        titulo,
        descricao,
        concluida: false,
    }

    tarefas.push(tarefa);

    inputTarefa.value = "";
    inputDescricao.value = "";

    const liCriada = document.createElement('li');
    const tituloCriado = document.createElement('h3');
    const descricaoCriada = document.createElement('p');
    const botaoConcluir = document.createElement('button');

    tituloCriado.innerText = titulo;
    descricaoCriada.innerText = descricao;

    botaoConcluir.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    botaoConcluir.classList.add('botaoConcluir');

    liCriada.appendChild(tituloCriado);
    liCriada.appendChild(descricaoCriada);
    liCriada.appendChild(botaoConcluir);

    listaTarefas.appendChild(liCriada);
}

botaoAdicionar.addEventListener('click',adicionarTarefa)


