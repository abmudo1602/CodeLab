const inputNome = document.getElementById('inputNome');
const inputNomeDeUsuario = document.getElementById('inputNomeDeUsuario');
const inputEmail = document.getElementById('inputEmail');
const inputSenha = document.getElementById('inputSenha');
const inputConfirmarSenha = document.getElementById('inputConfirmarSenha');

const saida = document.getElementById('saida');
const formulario = document.querySelector('.cadastro');

// SPAN
const spanErroEmail = document.getElementById('spanErroEmail');
const spanErroSenha = document.getElementById('spanErroSenha');

// CONTADOR
const contadorSenha = document.getElementById('contadorSenha');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = inputNome.value.trim();
    const nickName = inputNomeDeUsuario.value.trim();
    const email = inputEmail.value.trim();
    const senha = inputSenha.value;
    const confirmarSenha = inputConfirmarSenha.value;

    // LIMPAR MENSAGENS ANTERIORES
    saida.innerText = '';
    spanErroSenha.innerText = '';
    spanErroEmail.innerText = '';

    // RESETAR CORES
    spanErroEmail.style.color = '';
    spanErroSenha.style.color = '';

    // VALIDAR EMAIL
    if (!email.includes("@") || !email.includes(".")) {
        spanErroEmail.innerText = 'Digite um Email válido';
        spanErroEmail.style.color = 'red';
        return;
    }

    if (
        email.startsWith("@") ||
        email.endsWith("@") ||
        email.indexOf("@") === 0 ||
        email.lastIndexOf("@") !== email.indexOf("@")
    ) {
        spanErroEmail.innerText = 'Digite um email em formato válido';
        spanErroEmail.style.color = 'red';
        return;
    }

    // VALIDAR TAMANHO DA SENHA
    if (senha.length < 8) {
        spanErroSenha.innerText = 'A senha precisa ter, pelo menos, 8 caracteres.';
        spanErroSenha.style.color = 'red';
        return;
    }

    // VALIDAR CONFIRMAÇÃO DA SENHA
    if (senha !== confirmarSenha) {
        saida.style.color = 'red';
        saida.innerText = 'As senhas não coincidem.';
        return;
    }

    // CADASTRO VÁLIDO
    saida.style.color = 'green';
    saida.innerText = 'Dados preenchidos corretamente!';
});

inputSenha.addEventListener('input', () => {
    const quantidade = inputSenha.value.length;

    contadorSenha.innerText = `${quantidade} caracteres`;
});