const nome = document.getElementById("inputNome");
const email = document.getElementById("inputEmail");
const butao = document.getElementById("butaoCadastrar");
const lista = document.getElementById("listaMinha");

function carregarUsuarios(){
    const users = JSON.parse(localStorage.getItem("user")) || [];
    lista.innerHTML = "";

    users.forEach(doc => {
        let liElement = document.createElement("li");
        liElement.textContent = doc;
        lista.appendChild(liElement);
    });
}

document.addEventListener("DOMContentLoaded", () =>{
    carregarUsuarios();
})

butao.addEventListener("click", (event) =>{
    event.preventDefault();
    if(!nome.value.trim()) return;
    let users = JSON.parse(localStorage.getItem("user")) || [];
    users.push(nome.value);
    localStorage.setItem("user", JSON.stringify(users));
    carregarUsuarios();
    nome.value = "";
})