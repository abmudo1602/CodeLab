// ===== CAPTURA DOS ELEMENTOS HTML =====

const inputNumero1 = document.getElementById('inputNumero1');
const inputNumero2 = document.getElementById('inputNumero2');
const inputQuantidade = document.getElementById('quantificador');

const inputSaida = document.getElementById('saida');

// Captura dos spans individuais
const erroMinimo = document.getElementById('erroMinimo');
const erroMaximo = document.getElementById('erroMaximo');
const erroQuantidade = document.getElementById('erroQuantidade');

// Captura dos botões
const botaoComRepeticao = document.getElementById('comRepeticao');
const botaoSemRepeticao = document.getElementById('semRepeticao');


// ===== OBTENÇÃO DOS VALORES =====

function obterValores() {

    const numero1 = Number(inputNumero1.value);
    const numero2 = Number(inputNumero2.value);
    const quantidade = Number(inputQuantidade.value);

    return {
        minimo: numero1,
        maximo: numero2,
        quantidade: quantidade
    };
}


// ===== VALIDAÇÃO DOS VALORES =====

function validarValores(valores, semRepeticao) {

    // Limpamos as mensagens anteriores
    erroMinimo.innerText = '';
    erroMaximo.innerText = '';
    erroQuantidade.innerText = '';

    inputSaida.innerText = '';

    // Verificamos os campos vazios
    if (inputNumero1.value.trim() === '') {
        erroMinimo.innerText = 'Campo obrigatório';
        erroMinimo.style.color = 'red';
    }

    if (inputNumero2.value.trim() === '') {
        erroMaximo.innerText = 'Campo obrigatório';
        erroMaximo.style.color = 'red';
    }

    if (inputQuantidade.value.trim() === '') {
        erroQuantidade.innerText = 'Campo obrigatório';
        erroQuantidade.style.color = 'red';
    }

    // Interrompemos se algum campo estiver vazio
    if (
        inputNumero1.value.trim() === '' ||
        inputNumero2.value.trim() === '' ||
        inputQuantidade.value.trim() === ''
    ) {
        inputSaida.innerText = 'Preencha todos os campos.';
        inputSaida.style.color = 'red';
        return false;
    }

    // Verificamos se o mínimo é maior que o máximo
    if (valores.minimo > valores.maximo) {
        inputSaida.innerText = 'O número mínimo não pode ser maior que o máximo.';
        inputSaida.style.color = 'red';
        return false;
    }

    // Verificamos se a quantidade é maior que zero
    if (valores.quantidade <= 0) {
        inputSaida.innerText = 'A quantidade precisa ser maior que zero.';
        inputSaida.style.color = 'red';
        return false;
    }

    // Verificamos se os números são inteiros
    if (
        !Number.isInteger(valores.minimo) ||
        !Number.isInteger(valores.maximo) ||
        !Number.isInteger(valores.quantidade)
    ) {
        inputSaida.innerText = 'Utilize somente números inteiros.';
        inputSaida.style.color = 'red';
        return false;
    }

    // Verificamos a disponibilidade no modo sem repetição
    if (semRepeticao) {

        const numerosDisponiveis = valores.maximo - valores.minimo + 1;

        if (valores.quantidade > numerosDisponiveis) {
            inputSaida.innerText = 'Não existem números suficientes no intervalo para realizar o sorteio sem repetição.';
            inputSaida.style.color = 'red';
            return false;
        }
    }

    return true;
}


// ===== GERAÇÃO DE UM NÚMERO ALEATÓRIO =====

function gerarNumeroAleatorio(minimo, maximo) {

    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

}


// ===== GERAÇÃO DOS NÚMEROS (COM REPETIÇÃO) =====

function gerarNumerosComRepeticao(minimo, maximo, quantidade) {

    const numeros = [];

    for (let i = 0; i < quantidade; i++) {

        const numero = gerarNumeroAleatorio(minimo, maximo);

        numeros.push(numero);
    }

    return numeros;
}


// ===== GERAÇÃO DOS NÚMEROS (SEM REPETIÇÃO) =====

function gerarNumerosSemRepeticao(minimo, maximo, quantidade) {

    const numeros = [];

    while (numeros.length < quantidade) {

        const numero = gerarNumeroAleatorio(minimo, maximo);

        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }

    return numeros;
}


// ===== EVENTO DO BOTÃO COM REPETIÇÃO =====

botaoComRepeticao.addEventListener('click', function() {

    const valores = obterValores();

    if (validarValores(valores, false)) {

        const numeros = gerarNumerosComRepeticao(
            valores.minimo,
            valores.maximo,
            valores.quantidade
        );

        inputSaida.innerText = numeros.join(', ');
        inputSaida.style.color = 'green';
    }

});


// ===== EVENTO DO BOTÃO SEM REPETIÇÃO =====

botaoSemRepeticao.addEventListener('click', function() {

    const valores = obterValores();

    if (validarValores(valores, true)) {

        const numeros = gerarNumerosSemRepeticao(
            valores.minimo,
            valores.maximo,
            valores.quantidade
        );

        inputSaida.innerText = numeros.join(', ');
        inputSaida.style.color = 'green';
    }

});