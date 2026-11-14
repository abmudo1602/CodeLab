// const nomeInput = document.getElementById('nome');
// const idadeInput = document.getElementById('idade');
// const emailInput = document.getElementById('email')
// const confirmarButao = document.getElementById('butaoConfirmar');
// const saidaTeste = document.getElementById('saidaTeste');

// confirmarButao.addEventListener('click', function(){
//     const nomeDigitado = nomeInput.value;
//     const idadeDigitada = idadeInput.value;
//     const emailDigitado = emailInput.value;

//     saidaTeste.innerText = `Nome: ${nomeDigitado}\nIdade: ${idadeDigitada} anos\nEmail: ${emailDigitado}`;
// });

const nomeInput = document.getElementById('nome');
const idadeInput = document.getElementById('idade');
const emailInput = document.getElementById('email')
const confirmarButao = document.getElementById('butaoConfirmar');
const saida = document.getElementById('saidaTeste');

//Validar
const validarNome = document.getElementById('spanNome');
const validarIdade = document.getElementById('spanIdade');
const validarEmail = document.getElementById('spanEmail');

confirmarButao.addEventListener('click', function(){
    const nomeDigitado = nomeInput.value.trim();
    const idadeDigitada = idadeInput.value.trim();
    const emailDigitado = emailInput.value.trim();

    let validarFormulario = true;

    if(nomeDigitado === ""){
        validarNome.innerText = 'Faltando preencher o Nome';
        validarFormulario = false
    }else{
        validarNome.innerText = '';
    }

        if(idadeDigitada === ""){
        validarIdade.innerText = 'Faltando preencher a Idade';
        validarFormulario = false
    }else{
        validarIdade.innerText = '';
    }

    if (emailDigitado === "") {
    validarEmail.innerText = 'Faltando preencher o Email';
    validarFormulario = false;
    } else if (!emailInput.checkValidity()) {
    validarEmail.innerText = 'Digite um e-mail válido (ex: nome@dominio.com)';
    validarFormulario = false;
    } else {
    validarEmail.innerText = '';
    }

    // if (!nomeDigitado || !idadeDigitada || !emailDigitado || nomeDigitado === '' || idadeDigitada === '' || emailDigitado === '') {
    //     saida.innerText = 'Por favor, preencha todos os campos antes de confirmar!';
    //     saida.style.color = 'red'; 
    //     return;
    // }

    if(validarFormulario){
    saida.style.color = '';
    saida.innerText = `Nome: ${nomeDigitado}\nIdade: ${idadeDigitada} anos\nEmail: ${emailDigitado}`;
    } else {
        saida.innerText = 'Aguardando dados'
    }
});
