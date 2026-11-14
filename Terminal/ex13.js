// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

import { notDeepStrictEqual } from "node:assert"

// for(let i = 10; i >= 1; i--){
//     console.log(i)
// }
// console.log(`Lançar!`)

// let tabuada = 6
// for(let i = 1; i <= 10; i++){
//     console.log(`${tabuada} x ${i} = ${tabuada * i}`)
// }

// let soma = 0
// for(let i = 1; i <= 10; i++){
//     soma = soma + i
//     console.log(soma)
// }

// let soma = 0
// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         soma = soma + i
//         console.log(soma)
//     }
// }

// for(let i = 1; i <= 20; i++){
//     if(i > 10){
//         console.log(i)
//     }
// }

// let fatorial = 6
// for(let i = 1; i <= 10; i++){
//     fatorial *= i
// }
// console.log(fatorial)

// let notas = [7.5, 9.0, 4.0, 1.0]
// let aprovados = 0
// let reprovados = 0

// for(let i = 0; i < notas.length; i++){
//     if(notas[i] >= 7.0){
//         aprovados++
//     } else {
//         reprovados++
//     }
// }
// console.log(aprovados)
// console.log(reprovados)

// let notas = [7, 10, 4.0, 1.0, 2.0, 7]
// let media = 0
// let quantidade = 0

// for(let i = 0; i < notas.length; i++){
//     if(notas[i] >= 7){
//         quantidade++
//         notas[i] += notas[i]
//         media = notas[i] / quantidade
//     } else {
//         console.log(`Reprovado`)
//     }
// }
// console.log(media)

//  percorrer array de notas e contar reprovados e aprovados.
//     const notas = [6, 8, 4, 3, 9, 10, 10]

//   function k(notas){
//       let aprovados = 0
//       let reprovados = 0

//      for(let i = 0; i < notas.length; i++){
//           if(notas[i] >= 7){
//               aprovados++
//           } else {
//               reprovados++
//           }
//       }
//       return [aprovados, reprovados]
//   }

//  let resultado = k(notas)
//  console.log(resultado[0])
//  console.log(resultado[1])

const notas = [7, 3, 4, 7, 7, 1, 6, 7]

function k(notas){
    let soma = 0
    let quantidade = 0
    let media = 0
    for(let i = 0; i <= notas.length; i++){
        if(notas[i] >= 7){
            console.log(`Aprovado`)
            soma += notas[i]
            quantidade++
        } else {
            console.log(`Reprovado`)
        }
         media = soma / quantidade
    }

    console.log(media)
}
//  k(notas)


function y(){

for(let i = 1; i <= 20; i++){
    if(i > 10){
        console.log(i)
    }
}
}
//  y()

function ya(){

for(let i = 1; i <= 20; i++){
    let soma = 0
    if(i % 2 === 0){
        soma = soma + i
    }
    console.log(soma)
}
}
//  ya()

function main(opcao){
    if(opcao === 1){
    k(notas)
    } else if(opcao === 2){
        y()
    } else if(opcao === 3){
        ya()
    }
}

main(1)