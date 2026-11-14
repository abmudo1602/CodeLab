let produtos = [
    {nome: "Teclado", preco: 40, estoque: 3},
    {nome: "Mouse", preco: 25, estoque: 1},
    {nome: "Monitor", preco: 100, estoque: 6},
    {nome: "Professor", preco: 50, estoque: 7},
    {nome: "Suquinho", preco: 10, estoque: 67},
    {nome: "", preco: 20, estoque: 10}
]

let carrinho = []

function verificarProduto(nome) {
    if (produtos.find(y => y.nome == nome)) {
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

function mostrarCatalogo() {
    produtos.forEach(y => console.log(y))
}
// mostrarCatalogo()

function adicionarCarrinho(novo) {
    let verificar = carrinho.find(doc => doc.nome === novo.nome)

    if (verificar) {
        carrinho = carrinho.map(doc => {
            if (verificar.nome === doc.nome) {
                return {...doc, quantidade: doc.quantidade + 1}
            }
            return doc
        })
    } else {
        console.log("Não tem, adicionando um novo")

        // O estoque continua com o valor original do catálogo.
        // A quantidade começa em 1 no carrinho.
        carrinho.push({...novo, quantidade: 1})

        console.log(carrinho)
    }

    console.log("Resultado", carrinho)
}

let novoObjeto = {nome: "Railson", preco: 200, estoque: 23}
let objeto2 = {nome: "Suquinho", preco: 10, estoque: 67}

adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)
adicionarCarrinho(objeto2)

function calcularTotal(carrinho) {
    // O reduce transforma os produtos do carrinho em um único valor.

    let total = carrinho.reduce((total, doc) => {
        return total + doc.preco * doc.quantidade
    }, 0)

    console.log(total)
}

calcularTotal(carrinho)

// total: acumulador que guarda a soma anterior.
// doc: produto que o reduce está analisando.
// 0: valor inicial do acumulador.
//
// O reduce soma o valor de cada produto ao acumulado anterior.
// Exemplo: 0 + 10, depois 10 + 10, depois 20 + 10...
//
// A quantidade comprada fica separada do estoque disponível.