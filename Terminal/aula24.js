// Aula 24/10

let jogos = [
    {id: 1, nome: "Minecraft", genero: "Sandbox", nota: 8},
    {id: 2, nome: "Call of Duty", genero: "FPS", nota: 9},
    {id: 3, nome: "Mineirinho Ultra Adventures", genero: "Indie", nota: 6.7},
    {id: 4, nome: "CodeLab games", genero: "Quiz", nota: 10},
    {id: 5, nome: "Fortnite", genero: "FPS", nota: 5}
    ]

let favoritos = []

function listar(jogos){
    jogos.forEach(y => {
        {return console.log(`Id: ${y.id}, Nome: ${y.nome}, Gênero: ${y.genero}, Nota: ${y.nota}`)}      
    });
}
// listar(jogos)

function buscarJogo(nome){
    let game = jogos.find(jogo => jogo.nome === nome)
    if(game){
         console.log(game)
          return game
    } else{
       return console.log("Jogo não encontrado")
       
    }    
}
// buscarJogo("Call of Duty")

function filtrarNota(notaMinima){
    let filtro = jogos.filter(nota => {
        return nota.nota >= notaMinima
    })
    return console.log(filtro)
    }
// filtrarNota(9)

function filtrarGenero(genero){
    let filtro = jogos.filter(doc => {
        return doc.genero === genero
    })
    return console.log(filtro)
    }
// filtrarGenero("FPS")

function catalogo(jogos){
    let catalogo = jogos.map(y => {
        return{nome: y.nome, 
               genero: y.genero, 
               nota: y.nota}
    })
    return catalogo
    }
// catalogo(jogos)

function adicionarFavorito(id){
    let busca = jogos.find(y => y.id === id)
    let buscaFavoritos = favoritos.find(ya => ya.id === id)
    if(!busca)return console.log("Jogo não existe")
    if(buscaFavoritos)return console.log("Jogo já existe na lista de favoritos")

    favoritos.push(busca);
    console.log("Jogo adicionado aos favoritos");

    }
// adicionarFavorito(5)
// adicionarFavorito(2)
// adicionarFavorito(5)

function recomendar(notaMinima){
    let recomendacao = jogos.filter(y => {return y.nota >= notaMinima})
    console.log(recomendacao)
    } 
// recomendar(7)

function resumoFavoritos(favoritos){
    let resumo = favoritos.map(y => {return y.nome})
    let resultado = "Favoritos: " + resumo.join(", ")
    console.log(resultado)
    }
// resumoFavoritos(favoritos)

function main(){
    console.log("======================================= GAMEUB =======================================")
    console.log("====================================== CATALOGO ======================================")
    console.log(catalogo(jogos))
    console.log("====================================== LISTA ======================================")
    listar(jogos)
    console.log("====================================== BUSCA DE JOGOS ======================================")
    buscarJogo("Call of Duty")
    buscarJogo("CodeLab games")
    console.log("====================================== FAVORITOS ======================================")
    adicionarFavorito(2)
    adicionarFavorito(5)
    resumoFavoritos(favoritos)
    }
main()