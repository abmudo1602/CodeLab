// Aula - Dia 10/10

let cpf = "087.225.763-04"
const numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let cpfLimpo = "";

function somenteNumero(cpf){
    for(let y = 0; y < cpf.length; y++){
        if(numero.includes(Number(cpf[y]))){
            cpfLimpo += cpf[y];
            cpfLimpo.toString()
        }
    }
    console.log(cpfLimpo)
}
 somenteNumero(cpf)

function verificarQuantidade(cpfLimpo){
    if(cpfLimpo.length === 11){
        console.log("Cpf existe")
    } else {
        console.log("Cpf não existe")
    }
}
verificarQuantidade(cpfLimpo)

function impedirRepetido(cpf){
    for(let y = 0; y < cpfLimpo.length; y++){
        if(cpf[y] === cpf[y + 1]){
            return console.log("Todos iguais")
        } else {
            return console.log("Cpf válido")
        }
    }
}
impedirRepetido(cpfLimpo)

function digito1(cpfLimpo){
    let soma = 0
    for(let y = 0; y < 9; y++){
        let peso = 10 - y
        soma += peso * Number(cpfLimpo[y])
    }
    let resto = soma % 11;
    if(resto < 2){
        return 0
    } else {
        return 11 - resto
    }
}
digito1(cpfLimpo)

function digito2(cpfLimpo){
    let soma = 0
    for(let y = 0; y < 10; y++){
        let peso = 11 - y
        soma += peso * Number(cpfLimpo[y])
    }
    let resto = soma % 11;
    if(resto < 2){
        return 0
    } else {
        return 11 - resto
    }
}
digito2(cpfLimpo)

function validar(cpfLimpo){
    const primeiro = digito1(cpfLimpo)
    const segundo = digito2(cpfLimpo)
    if(Number(cpfLimpo[9]) === primeiro && Number(cpfLimpo[10]) === segundo){
        console.log(("CPF 100% validado"))
    } else {
        console.log("CPF inválidado")
    }
}
validar(cpfLimpo)