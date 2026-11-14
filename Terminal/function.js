// Dia 30/09: Exercicio de fixação antes da aula

// function media(notas){
//     let somaN = 0

//     for(let i = 0; i < notas.length; i++){
//         somaN += notas[i]
//     }
//     const media = somaN / notas.length
//     return media
// }

// let notas = [6, 5, 10, 8]
// let resultado = media(notas, notas.length)
// console.log(resultado)

// function soma(numeros){
//     let somaN = 0
//         for(let i = 0; i < numeros.length; i++){
//             somaN += numeros[i]
//         }
//                 return somaN
//     }
// let numeros = [52, 6, 4, 5]
// let resultado = soma(numeros)
// console.log(resultado)

// function conta(numeros){
//     let contador = 0
//     for(let i = 0; i < numeros.length; i++){
//         contador++
//     }
//     return contador
// }
// let numeros = [5, 8, 2, 10, 3]
// let resultado = conta(numeros)
// console.log(resultado)

// function par(numeros){
//     let pares = 0
//     for(let i = 0; i < numeros.length; i++){
//         if(numeros[i] % 2 === 0){
//             pares += numeros[i]
//         }
//     }
//     return pares
// }
// let numeros = [3, 8, 5, 2, 10, 7]
// let resultado = par(numeros)
// console.log(resultado)

// function par(numeros){
//     let pares = 0
//     for(let i = 0; i < numeros.length; i++){
//         if(numeros[i] > 0 && numeros[i] % 2 === 0){
//             pares++
//         }
//     }
//     return pares
// }
// let numeros = [-3, 5, -2, 8, 6, 4, -1]
// let resultado = par(numeros)
// console.log(resultado)

// function maior(numeros){
//     grande = 0
//     for(let i = 0; i < numeros.length; i++){
//         if(numeros.length > grande){
//             maior = numeros[i]
//         }
//     }
//     return maior
// }
// let numeros = [7, 12, 4, 19, 3, 15, 67]
// let resultado = maior(numeros)
// console.log(resultado)

//  function dez(numeros){
//      let maior = 0
//      for(let i = 0; i < numeros.length; i++){
//          if(numeros[i] > 10){
//              maior++
//          }
//      }
//      return maior
//  }
//  let numeros = [5, 14, 8, 21, 3, 17, 67]
//  let resultado = dez(numeros)
//  console.log(resultado)

// function dez(numeros){
//     let somaN = 0
//     for(let i = 0; i < numeros.length; i++){
//         if(numeros[i] > 10){
//             somaN += numeros[i]
//         }
//     }
//     return somaN
// }
// let numeros = [5, 14, 8, 21, 3, 17, 67]
// let resultado = dez(numeros)
// console.log(resultado)

// function segundo(numeros){
//     let maior = 0
//     let segundoM = 0
//     for(let i = 0; i < numeros.length; i++){
//         if(numeros[i] > maior){
//             segundoM = maior
//             maior = numeros[i]
//         } else if(numeros[i] > segundoM && numeros[i] < maior){
//             segundoM = numeros[i]
//         }
//     }
//     return segundoM
// }
// let numeros = [12, 45, 7, 89, 34, 67]
// let resultado = segundo(numeros)
// console.log(resultado)

// function par(numeros){
//     let maior = 0
//     let contador = 0
//     for(let i = 0; i < numeros.length; i++){
//         if(numeros[i] > maior){
//             maior = numeros[i]
//         }
//     }

// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] === maior){
//         contador++
//     }
// }
// return contador
// }
// let numeros = [7, 12, 5, 12, 9, 12, 3, 8]
// let total = par(numeros)
// console.log(total)

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------