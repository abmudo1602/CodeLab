let produtos = [
 {nome: "Teclado", preco: 40, estoque: 3},
 {nome: "Mouse", preco: 25, estoque: 1},
 {nome: "Monitor", preco: 100, estoque: 6},
 {nome: "Professor", preco: 50, estoque: 7},
 {nome: "Suquinho", preco: 10, estoque: 67},
 {nome: "", preco: 20, estoque: 10}
]

let carrinho = []

function verificarProduto(nome){
 if(produtos.find(y => y.nome == nome)){
 console.log("Tem Produto")
 return true
 } else {
 console.log("Não temos")
 return false
 }
}
// verificarProduto("Teclado")

function buscarProdutos(nome) {
 console.log(produtos.findIndex(y => y.nome == nome))
}
// buscarProdutos("Suquinho")

function mostrarCatalogo(){
 produtos.forEach(y => console.log(y))
}
// mostrarCatalogo()

function adicionarCarrinho(novo){
 let verificar = carrinho.find(doc => doc.nome === novo.nome)
 if(verificar){
 carrinho = carrinho.map(doc => {
 if(verificar.nome === doc.nome){
 return {...doc, estoque: doc.estoque +1}
 }
 return doc
 })
 } else {
 console.log("Não tem, adicionando um novo")
// carrinho.push(novo)
// O carrinho recebia a quantidade disponível no catálogo, como se ele tivesse comprado tudo isso(67+)
 carrinho.push({...novo, estoque: 1})
// Agora o carrinho recebe uma cópia do produto coma quantidade comprada começando em 1
 console.log(carrinho)
 }
 console.log("Resultado", carrinho)
}

let novoObjeto = {nome: "Railson", preco: 200, estoque: 23}
let objeto2 = {nome: "Suquinho", preco: 10, estoque: 67}

adicionarCarrinho(objeto2);
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)

function calcularTotal(carrinho){
// O reduce pega vários elementos de um array e transforma tudo em um único resultado

// Estrutura original:
// array.reduce((total, doc) => {
// return total + doc.preco * doc.estoque 
//}, 0)

  let total = carrinho.reduce((total, doc) => {
    return total + doc.preco * doc.estoque
  }, 0)
  console.log(total)
}
calcularTotal(carrinho)

// O "total" é o acumulador. Ele guarda o valor que já foi somado até aquele momento.
// doc é o produto atual que o reduce() tá analisando.
// 0 é o valor inicial do acumulador, nessa função,começando com R$ 0
// O "total" e "doc" são nomes opicionais, à escolha do programador
// Por que "total +..." e não "total =..."?
// Porque com o "=", ele só calcula o valor do produto atual, descartando os valores antoriores.
// Agora, com "+", ele pega o acumulador "total" e adiciona o valor do produto atual.
// No exemplo do suquinho, o total começa em 0 e soma com o preco do suquinho que é 10.
// Ou seja, 0 + 10, depois o total vira 10 e soma com + 10 do próximo suquinho e assim por diante.
