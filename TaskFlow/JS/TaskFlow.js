// ===== CAPTURA DOS ELEMENTOS HTML =====

const inputTarefa = document.getElementById('campoTexto');
const inputDescricao = document.getElementById('campoDescricao');
const botaoAdicionar = document.getElementById('butao');
const listaTarefas = document.getElementById('listaTarefas');
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function adicionarTarefa(){
    const titulo = inputTarefa.value;
    const descricao = inputDescricao.value;

    const tarefa = {
        titulo,
        descricao,
        concluida: false,
    }

    tarefas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    inputTarefa.value = "";
    inputDescricao.value = "";

    renderizarTarefa(tarefa);
}

botaoAdicionar.addEventListener('click',adicionarTarefa)

function renderizarTarefa(tarefa){
    const liCriada = document.createElement('li');
    const tituloCriado = document.createElement('h3');
    const descricaoCriada = document.createElement('p');
    const botaoConcluir = document.createElement('button');
    tituloCriado.innerText = tarefa.titulo;
    descricaoCriada.innerText = tarefa.descricao;
    
    listaTarefas.appendChild(liCriada)
    
    liCriada.appendChild(tituloCriado);
    liCriada.appendChild(descricaoCriada);
    liCriada.appendChild(botaoConcluir);

    botaoConcluir.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    botaoConcluir.classList.add('botaoConcluir');
    botaoConcluir.addEventListener('click', () => {
        tarefaConcluida(tarefa, liCriada)
    })
}

tarefas.forEach(tarefa => {
    renderizarTarefa(tarefa)
});

function tarefaConcluida(tarefa, liCriada){
    tarefa.concluida = !tarefa.concluida;
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    liCriada.classList.toggle('concluida', tarefa.concluida);

}