// Aula 07/10

let produtos = ["Teclado", "Mouse", "Monitor", "Professor", "Suquinho"];
let preco = [40, 25, 100, 50, 10];
let carrinho = []

function verificarProduto(produto){
    if(produtos.includes(produto)){
        console.log("Tem Produto")
        return true
    } else {
        console.log("Não temos")
        return false
    }
}
// verificarProduto("Suquinho")


let produto = ["Teclado", "Mouse", "Monitor", "Professor", "Suquinho"]
let posicao = 0

function verificarPosição(produto){
    posição = produtos.indexOf(produto) +1
    console.log(posição)
    return posicao
}
// console.log(preco[posicao])   
// VerificarPosição("Suquinho")


function mostrarCatalogo(){
    for(let i = 0; i < produtos.length; i++){
        console.log([i + 1], produtos[i], "R$", preco[i])
    }
}
// mostrarCatalogo()

function adicionarCarrinho(produto){
    if(!verificarProduto(produto)) return "Esse item não existe.";
    if(carrinho.includes(produto)) return "Esse item já foi adicionado.";
    carrinho.push(produto)
    return console.log(produto + " adicionado ao carrinho")
    
}
adicionarCarrinho("Suquinho")
adicionarCarrinho("Mouse")
adicionarCarrinho("Teclado")


function caclularTotal(){
    let total = 0
    for(let i = 0; i < carrinho.length; i++){
        let posicao = produtos.indexOf(carrinho[i])
        total += preco[posicao]
    }
    console.log(total)
    return total
}
caclularTotal()