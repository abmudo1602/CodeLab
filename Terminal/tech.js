//let textoMaisNumero = "5" + 3;
//console.log(textoMaisNumero);

// let TmNmN = "60" - 76 + 200;
// let TxN = "5" * 2
// let NP = (TmNmN) + (TxN)
// console.log(NP);

// let T = "67.67";
// let numeroConvertido = Number(T);
// console.log(numeroConvertido);

// let c = 5 == "5";
// console.log(c);    

// let c = 520 === "520";
// console.log(c); 

// let A = 18
// let IM = 18
// let PE = A >= IM
// console.log(PE)

// let A = 16
// let IM = 18
// let PE = A >= IM
// console.log(PE)

// let nota = 6

// if (nota >= 7) {
//     console.log("Aprovado")
// } else {
//     if (nota >= 5) {
//         console.log("Recuperação")
//     } else {
//         console.log("Reprovado")
//     }
// }

// let nota = 10

// if (nota>=7) {
//     console.log("Aprovado")
// } else {
//     if (nota >= 5) {
//         console.log("Recuperação")
//     } else {
//         console.log("Reprovado")
//     }
// }

// let C = 10;

// while(C >= 1) {
//     console.log(C);
//     C = C - 1;
// }
// console.log("Largada");

// let C = 2

// while(C <= 100) {
//     console.log(C)
//     C = C + 2
// }

//  let C = 1

// while(C <= 100) {
//     if(C % 2 === 0)
//     console.log(C)
//     C = C + 1
// }

// for (let x = 1; x <= 3; x++) {
//     console.log(`Tabuada do ${x}:`)
//     for (let y = 1; y <= 3; y++) {
//         console.log(`${x} x ${y} = ${x * y}`)
//     }
// }

// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
// const rl = readline.createInterface({ input, output });
// const resposta = await rl.question('Qual é o seu nome? ');

// let soma = 0;
// for(let contador = 1; contador <= 10; contador++){
//     console.log(`${soma} + ${contador} = ${soma + contador}`)
//     soma = soma + contador; //soma += contador;
// }
// console.log(`O resultado da soma é ${soma}`)

// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
// const rl = readline.createInterface({ input, output });

// let c = await rl.question('Qual tabuada? ');
// c = Number(c)
// let contador = 1;
// while(contador <= 10){
//     console.log(`${c} * ${contador} = $(c * contador)`)
//     contador++
// }

// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
// const rl = readline.createInterface({ input, output });

// let P = await rl.question('Qual peso? ');
// P = Number(P) / 100
// let A = await rl.question('Qual altura? ');
// A = Number(A)

//  const R = P / (A * A)

//  console.log(`O seu peso é ` + P)
//  console.log(`A sua altura é ` + A)
// console.log(`O seu imc é ` + R)
// +
// if(R >= 18.5){
//         console.log("Magreza")
//  } else if(R <= 24.9){
//          console.log("Normal")
//  } else if(R <= 29.9){
//          console.log("Pré-Obesidade")
// } else if(R <= 34.9){
//          console.log("moderada")
//  } else if(R <= 39.9){
//          console.log("severa")
//  } else {
//      console.log(`Você está na Obesidade grave`)
// }
// -----------------------------------------------------------------------------------------------------------------------------
// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
// const rl = readline.createInterface({ input, output });

// let altura = await rl.question('Qual a sua altura? ');
// altura = Number(altura)
// altura = altura / 100 //Converter para metros
// let peso = await rl.question('Qual o seu peso? ');
// peso = Number(peso)

// const imc = peso / (altura * altura)

// console.log('O seu peso é: ' + peso)
// console.log('A sua altura é: ' + altura)
// console.log('A seu IMC é: ' + imc)

// if(imc < 18.5){
//   console.log('Você está abaixo do peso')
// } else if(imc >= 18.5 && imc < 24.9){
//   console.log('Você está no peso adequado')
// } else if(imc >= 25 && imc < 29.9){
//   console.log('Você está no Sobrepeso (pré-obesidade)')
// } else if(imc >= 30 && imc < 34.9){
//   console.log('Você está no Obesidade Grau I (moderada)')
// } else if(imc >= 35 && imc < 39.9){
//   console.log('Você está no Obesidade Grau II (severa)')
// }else{
//   console.log('Você está no Obesidade Grau III (grave ou mórbida)')
// }

// const imcRef = 22
// const pesoIdeal = (altura * altura) * imcRef

// console.log(`O seu peso ideal é ` + pesoIdeal)
// -----------------------------------------------------------------------------------------------------------------------------

// function preço(preço, desconto){
//         let preçoDesconto = (preço * desconto) / 100;
//         let preçoFinal = preço - preçoDesconto;
//         return(preçoFinal)
// }
       
// let resultado = preço(100, 20)
// console.log(resultado)

// function soma(nu, num){
//         let somaTotal = nu + num;
//         return(somaTotal)
// }

// let resultado = soma(8, 12)
// console.log(resultado)

// function subtração(nu, num){
//         let resultadoTotal = nu - num
//         return(resultadoTotal)
// }
// let resultado = subtração(20, 7)
// console.log(resultado)

// function media(x, y, z){
//         let resultadoTotal = (x + z + y) / 2
//         return(resultadoTotal)
// }
// let resultado = media(8, 10, 4)
// console.log(resultado)

// function triplo(x){
//         let mult = x * x * x
//         return (mult)
// }
// let resultado = triplo(5, 5, 5)
// console.log(resultado)

// function compra(p, q){
//         let pq = p * q
//         return (pq)
// }
// let resultado = compra(15, 2)
// console.log(resultado)

// function compra(p, q, d){
//         let pq = p * q;
//         let desconto = pq - d;
//         return (desconto)
// }
// let resultado = compra(20, 6, 20)
// console.log(resultado)

//  import * as readline from 'node:readline/promises';
//  import { stdin as input, stdout as output } from 'node:process';
//  const rl = readline.createInterface({ input, output });

//  let produto = await rl.question('Quantos produtos comprou? ');
//  produto = Number(produto)
//  let preço = await rl.question('Qual o preço do produto? ');
//  preço = Number(preço)
//  let desconto = await rl.question('Qual o desconto? ');
//  desconto = Number(desconto)
 
//  function compras(produto, preço, desconto){
//         let soma = produto * preço;
//         let descontaço = soma - desconto;
//         return(descontaço)
//  }
//  let resultado = compras(produto, preço, desconto)
//         if(resultado <= 0){
//         console.log(`Inválido`)
//         } else {
//                 console.log(resultado)
//         }

//  import * as readline from 'node:readline/promises';
//  import { stdin as input, stdout as output } from 'node:process';
//  const rl = readline.createInterface({ input, output });

//  let cpf = await rl.question('Qual o seu cpf? ');
// cpf = cpf.replaceAll(`,`,``)
// cpf = cpf.replaceAll(`-`,``)
// let repetido = cpf[0] === cpf[1] && cpf[1] === cpf[2] && cpf[2] === cpf[3] && cpf[3] === cpf[4] && 
//                                 cpf[4] === cpf[5] && cpf[5] === cpf[6] && cpf[6] === cpf[7] && cpf[7] === cpf[8] 
//                                 && cpf[8] === cpf[9] && cpf[9] === cpf[10]

//  function validador(q, w, e, r, t, y, u, i, o){
//         let mult = q * 10 + w * 9 + e * 8 + r * 7 + t * 6 + y * 5 + u * 4 + i * 3 + o * 2
//         let v = mult % 11
//         let primeirod = 0
//         if(v < 2){
//                 primeirod = 0
//         } else {
//                 primeirod = 11 - v
//         }
//         return primeirod
//  }
//  let resultado = validador(Number(cpf[0]), Number(cpf[1]), Number(cpf[2]), Number(cpf[3]), Number(cpf[4]), Number(cpf[5]), Number(cpf[6]), 
//                   Number(cpf[7]),Number(cpf[8]))
//                   function segundo(a, s, d, f, g, h, j, k, l, primeirod){
//                         let mul = a * 11 + s * 10 + d * 9 + f * 8 + g * 7 + h * 6 + j * 5 + k * 4 + l * 3 + primeirod * 2
//                         let b = mul % 11
//                         let segundod = 0
//                         if(b < 2){
//                                 segundod = 0
//                         } else {
//                                 segundod = 11 - b
//                         }
//                         return segundod
//                   }
// let segundod = segundo(Number(cpf[0]), Number(cpf[1]), Number(cpf[2]), Number(cpf[3]), Number(cpf[4]), Number(cpf[5]), Number(cpf[6]), 
//                   Number(cpf[7]),Number(cpf[8]), resultado)
//                         if(resultado === Number(cpf[9]) && segundod === Number(cpf[10]) && !repetido){
//                                 console.log(`CPF válido`)
//                         } else {
//                                 console.log(`CPF inválido`)
//                         }

// function s(x, z){
//         let soma = x + z
//         return(soma)
// }
// let resultado = s(4, 5)
// console.log(resultado)

// let resultado = calcularDesconto(80, 20)
// function calcularDesconto(preco, percentual) {
//   const valorDesconto = preco * (percentual / 100);
//   const precoFinal = preco - valorDesconto;
//   console.log(`Preço final: R$${precoFinal}`);
// }

// função media


//    import * as readline from 'node:readline/promises';
//    import { stdin as input, stdout as output } from 'node:process';
//    const rl = readline.createInterface({ input, output });

//    let nota = await rl.question('Quanto tirou? ');
//          nota = Number(nota)
//    let notas = await rl.question('Quanto tirou? ');
//          notas = Number(notas)
//    let not = await rl.question('Quanto tirou? ');
//          not = Number(not)

//   function m(nota, notas, not){
//           const soma = nota + notas + not;
//           const media = soma / 3
//           return(media)
//   }
//   let resultado = m(nota, notas, not)
//         console.log(`Você tirou ${resultado} na média`)

//         if(resultado < 7){
//                 console.log(`Reprovado`)
//         } else {
//                 console.log(`Aprovado`)
//         }


// function m(notas) {
//     let somaN = 0;

//     for (let i = 0; i < notas.length; i++) {
//         somaN += notas[i];
//     }

//     const media = somaN / notas.length;
//     return media;
// }

// let notas = [10, 5, 7, 6];

// let resultado = m(notas, 4);

// console.log(resultado);

