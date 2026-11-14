const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');

// Spans de validação
const validarNumero1 = document.getElementById('spanNumero1');
const validarNumero2 = document.getElementById('spanNumero2');

// Botões
const btnSomar = document.getElementById('butaoConfirmar');
const btnSubtrair = document.getElementById('butaoConfirmar2');
const btnMultiplicar = document.getElementById('butaoConfirmar3');
const btnDividir = document.getElementById('butaoConfirmar4');

// Função que valida se os campos foram preenchidos
function validarCampos() {
    let valido = true;

    validarNumero1.textContent = '';
    validarNumero2.textContent = '';

    if (numero1.value.trim() === '') {
        validarNumero1.textContent = 'Digite o primeiro número!';
        validarNumero1.style.color = 'red';
        valido = false;
    }

    if (numero2.value.trim() === '') {
        validarNumero2.textContent = 'Digite o segundo número!';
        validarNumero2.style.color = 'red';
        valido = false;
    }

    return valido;
}

function calcular(operacao) {
    if (!validarCampos()) {
        return;
    }

    const n1 = parseFloat(numero1.value);
    const n2 = parseFloat(numero2.value);
    let resultado = 0;

// O parseFloat() serve para transformar um texto (string) em um número com casas 
// decimais (float).

    if (operacao === '+') {
        resultado = n1 + n2;
    } else if (operacao === '-') {
        resultado = n1 - n2;
    } else if (operacao === '*') {
        resultado = n1 * n2;
    } else if (operacao === '/') {
        if (n2 === 0) {
            validarNumero2.textContent = 'Não é possível dividir por zero!';
            validarNumero2.style.color = 'red';
            return;
        }
        resultado = n1 / n2;
    }

    alert(`O resultado é: ${resultado}`);
}

// Eventos de clique para cada botão
btnSomar.addEventListener('click', () => calcular('+'));
btnSubtrair.addEventListener('click', () => calcular('-'));
btnMultiplicar.addEventListener('click', () => calcular('*'));
btnDividir.addEventListener('click', () => calcular('/'));