const nome = document.getElementById("inputNome");
const email = document.getElementById("inputEmail");
const formulario = document.querySelector(".cadastro");
const lista = document.getElementById("listaMinha");

// GERAR ID ÚNICO
function gerarId() {
    return crypto.randomUUID();
}

// VALIDAR E-MAIL
function emailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// RECUPERAR E MIGRAR USUÁRIOS
function obterUsuarios() {
    const dados = JSON.parse(localStorage.getItem("user")) || [];

    const users = dados.map(usuario => {
        // Converter registros antigos (strings) em objetos
        if (typeof usuario === "string") {
            return {
                id: gerarId(),
                nome: usuario,
                email: ""
            };
        }

        return usuario;
    });

    localStorage.setItem("user", JSON.stringify(users));

    return users;
}

// CARREGAR USUÁRIOS NA LISTA
function carregarUsuarios() {
    const users = obterUsuarios();
    lista.innerHTML = "";

    users.forEach(usuario => {
        const liElement = document.createElement("li");
        const divInfo = document.createElement("div");
        const spanNome = document.createElement("span");
        const spanEmail = document.createElement("small");
        const botaoExcluir = document.createElement("button");

        divInfo.classList.add("usuario-info");
        spanEmail.classList.add("usuario-email");

        spanNome.textContent = usuario.nome;
        spanEmail.textContent = usuario.email || "E-mail não registrado";

        botaoExcluir.innerHTML = '<i class="fa-solid fa-trash"></i>';
        botaoExcluir.type = "button";
        botaoExcluir.setAttribute("aria-label", "Excluir usuário");

        // EXCLUIR PELO ID
        botaoExcluir.addEventListener("click", () => {
            const usuariosAtualizados = obterUsuarios().filter(
                usuarioAtual => usuarioAtual.id !== usuario.id
            );

            localStorage.setItem("user", JSON.stringify(usuariosAtualizados));

            carregarUsuarios();
        });

        divInfo.appendChild(spanNome);
        divInfo.appendChild(spanEmail);

        liElement.appendChild(divInfo);
        liElement.appendChild(botaoExcluir);

        lista.appendChild(liElement);
    });
}

// CARREGAR AO ABRIR A PÁGINA
document.addEventListener("DOMContentLoaded", () => {
    carregarUsuarios();
});

// AVANÇAR DO NOME PARA O E-MAIL
nome.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        email.focus();
    }
});

// CADASTRAR USUÁRIO
formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nomeDigitado = nome.value.trim();
    const emailDigitado = email.value.trim();

    // 1. VERIFICAR CAMPOS VAZIOS
    if (!nomeDigitado || !emailDigitado) {
        alert("Preencha todos os campos!");
        
        if (!nomeDigitado) {
            nome.focus();
        } else {
            email.focus();
        }

        return;
    }

    // 2. VALIDAR E-MAIL
    if (!emailValido(emailDigitado)) {
        alert("Digite um e-mail válido!");
        email.focus();
        return;
    }

    const users = obterUsuarios();

    // 3. VERIFICAR NOME DUPLICADO
    const nomeExiste = users.some(usuario =>
        usuario.nome.toLowerCase() === nomeDigitado.toLowerCase()
    );

    if (nomeExiste) {
        alert("Este nome já está cadastrado!");
        nome.focus();
        return;
    }

    // 4. VERIFICAR E-MAIL DUPLICADO
    const emailExiste = users.some(usuario =>
        (usuario.email || "").toLowerCase() === emailDigitado.toLowerCase()
    );

    if (emailExiste) {
        alert("Este e-mail já está cadastrado!");
        email.focus();
        return;
    }

    // 5. CRIAR OBJETO DO USUÁRIO
    const novoUsuario = {
        id: gerarId(),
        nome: nomeDigitado,
        email: emailDigitado
    };

    // 6. SALVAR USUÁRIO
    users.push(novoUsuario);

    localStorage.setItem("user", JSON.stringify(users));

    carregarUsuarios();

    // 7. LIMPAR CAMPOS
    nome.value = "";
    email.value = "";

    // VOLTAR O FOCO PARA O NOME
    nome.focus();
});