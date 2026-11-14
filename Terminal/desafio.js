// Desafio 14/10
//printar quem venceu "O <nome do jogador> ganhou por x pontos"

let jogador1 ={
nome:"Sergio",
pontos:167
}

let jogador2 ={
nome:"Caio",
pontos:100
}

function vencedor(){
    if(jogador1.pontos > jogador2.pontos){
        return console.log(`O vencedor é: ${jogador1.nome}\nCom uma diferença de: ${jogador1.pontos - jogador2.pontos} pontos`)
    } else if(jogador1.pontos === jogador2.pontos){
        return console.log("Empate")
    } else {
        return console.log(`O vencedor é: ${jogador2.nome}\nCom uma diferença de: ${jogador2.pontos - jogador1.pontos} pontos`)
    }
}
vencedor()