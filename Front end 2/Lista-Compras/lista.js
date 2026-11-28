const listaContainer = document.getElementById("lista-produtos");
const inputAdicionar = document.getElementById('input1');
const inputRemover = document.getElementById('input2');
const butaoAdicionar = document.getElementById("butaoAdicionar");
const butaoRemover = document.getElementById("butaoRemover");

const produtos = [
  { id: 1, nome: "Camiseta CodeLab", preco: 49.90 },
  { id: 2, nome: "Caneca JS", preco: 29.90 },
  { id: 3, nome: "Mousepad DOM", preco: 19.90 }
];

function carregarLista(){
    listaContainer.innerHTML = "";
    for (let i = 0; i < produtos.length; i++) {
    const itemLista = document.createElement("li");
    itemLista.textContent = produtos[i].nome;
    listaContainer.appendChild(itemLista);
    }
}

function adicionar(){
    let produto = inputAdicionar.value;

    if(!produto.trim()){
        return
    }

    produtos.push({nome:produto});
    carregarLista();
    inputAdicionar.value = "";
}

function remover(){
    let produtoRemover = inputRemover.value;
    produtos.splice(produtoRemover, 1);
    carregarLista();
}
carregarLista();