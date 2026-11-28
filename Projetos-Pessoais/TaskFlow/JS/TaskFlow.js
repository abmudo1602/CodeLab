// ===== CAPTURA DOS ELEMENTOS HTML =====

const inputTarefa = document.getElementById('campoTexto');
const inputDescricao = document.getElementById('campoDescricao');
const botaoAdicionar = document.getElementById('butao');
const listaTarefas = document.getElementById('listaTarefas');
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
const saidaSpan = document.getElementById('saidaSpan');

function adicionarTarefa(){
    const titulo = inputTarefa.value;
    const descricao = inputDescricao.value;

    const tarefa = {
        titulo,
        descricao,
        concluida: false,
    }

    if (titulo.trim() === "") {
        saidaSpan.innerText = "Digite um nome para sua tarefa!";
        saidaSpan.style.color='red'
        return;
    }

    tarefas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    inputTarefa.value = "";
    inputDescricao.value = "";

    renderizarTarefa(tarefa);
}

botaoAdicionar.addEventListener('click',adicionarTarefa);
inputTarefa.addEventListener('input', () => {
    saidaSpan.innerText = "";
});

function renderizarTarefa(tarefa){
    const liCriada = document.createElement('li');
    liCriada.classList.toggle('concluida', tarefa.concluida);
    const tituloCriado = document.createElement('h3');
    const descricaoCriada = document.createElement('p');
    const botaoConcluir = document.createElement('button');
    const botaoExcluir = document.createElement('button');
    botaoConcluir.type = 'button';
    tituloCriado.innerText = tarefa.titulo;
    descricaoCriada.innerText = tarefa.descricao;
    
    listaTarefas.appendChild(liCriada)
    
    liCriada.appendChild(tituloCriado);
    liCriada.appendChild(descricaoCriada);
    liCriada.appendChild(botaoConcluir);
    liCriada.appendChild(botaoExcluir);

    botaoConcluir.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    botaoConcluir.classList.add('botaoConcluir');
    botaoConcluir.addEventListener('click', () => {
        tarefaConcluida(tarefa, liCriada)
    })

    botaoExcluir.type = 'button';
    botaoExcluir.innerHTML = '<i class="fa-solid fa-trash"></i>';
    botaoExcluir.classList.add('botaoExcluir');

    botaoExcluir.addEventListener('click', () => {
    excluirTarefa(tarefa, liCriada);
    });
}

tarefas.forEach(tarefa => {
    renderizarTarefa(tarefa)
});

function tarefaConcluida(tarefa, liCriada){
    tarefa.concluida = !tarefa.concluida;
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    liCriada.classList.toggle('concluida', tarefa.concluida);

}

function excluirTarefa(tarefa, liCriada){
   const indice = tarefas.indexOf(tarefa)
   tarefas.splice(indice, 1)
   localStorage.setItem("tarefas", JSON.stringify(tarefas));
   liCriada.remove();
}