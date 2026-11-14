// Aula 19/10 - Exercício pra fixação dos metodos de Arrays
// forEach: array.forEach(item => executa algo), não retorna nada
// map: array.map(item => novoValor), retorna array transformado
// filter: array.filter(item => condição), retorna array filtrado
// find: array.find(item => condição), retorna só um elemento
// join: array.join(separador), retorna uma string

const turma = [
  { id: 1, nome: "Abner Levi", funcao: "Aluno" },
  { id: 2, nome: "Jadson", funcao: "Aluno" },
  { id: 3, nome: "Diogo", funcao: "Aluno (E funcionário infiltrado)" },
  { id: 4, nome: "Mathews", funcao: "Aluno" },
  { id: 5, nome: "João", funcao: "Aluno" },
  { id: 6, nome: "Ryan", funcao: "Aluno" },
  { id: 7, nome: "Thales", funcao: "Aluno" }
];

function maior21(turma) {
  turma.forEach(y => {
    if (y.idade >= 21) {
      return console.log(`Meu nome é ${y.nome}, tenho ${y.idade} anos, minha função é ${y.funcao} e tenho ${y.altura}m de altura`)
    }
  }
  )
}
// maior21(turma)

const alunosNotas = [
  { id: 1, aluno: "Abner", nota1: 7.5, nota2: 8.5, nota3: 8 },
  { id: 2, aluno: "Jadson", nota1: 9.5, nota2: 4.5, nota3: 7 },
  { id: 3, aluno: "Diogo", nota1: 5.5, nota2: 8.9, nota3: 6.0 },
  { id: 4, aluno: "Ryan", nota1: 3.8, nota2: 7.2, nota3: 9.5 },
  { id: 5, aluno: "Mathews", nota1: 10.0, nota2: 6.4, nota3: 8.1 },
  { id: 6, aluno: "Thales", nota1: 4.9, nota2: 9.3, nota3: 5.7 },
  { id: 7, aluno: "João Erick", nota1: 8.0, nota2: 7.1, nota3: 6.6 }
];

function media(alunosNotas) {
  const alunosComMedia = alunosNotas.map(y => {
    return { ...y, media: (y.nota1 + y.nota2 + y.nota3) / 3 }
  }
  ).forEach(ya => console.log(`Id ${ya.id}| Nome: ${ya.aluno}| Nota 1: ${ya.nota1}| Nota 2: ${ya.nota2}| Nota 3: ${ya.nota3}| Media: ${ya.media.toFixed(2)}`));
}
// media(alunosNotas);

//ANTES
let menus = [
  { id: 1, nome: "menu principal" },
  { id: 2, nome: "menu reserva" }
]

let produtos = [
  { id: 1, idMenu: 1, p1: "salada", p2: "Manga", p3: "Maçãzinha" },
  { id: 2, idMenu: 2, p1: "hamburger", p2: "Batatinhas fritas", p3: "Milkshake" }
]


function listarProdutosMenu(produtos, menus) {
  let produtosNovo = produtos.map(produto => {
    //menu
    let buscarMenu = menus.find(menu => menu.id === 1)
    //return
    return buscarMenu
  })
  console.log(produtosNovo)
}
// listarProdutosMenu(produtos, menus)



//DEPOIS
// [ 
// {id:1, idMenu:1, nome:"salada", nomeMenu:"menu principal"}
// 
// 
// 
// 
// 
// ...
// ]

// *O que você deve fazer:*
// Criar um programa em Node que descubra quais pedidos da cantina ainda não foram pagos e quem está devendo.

// *O programa deve:*
// 1. Separar só os pedidos que *não* foram pagos
// 2. Colocar em cada pedido o nome do cliente que fez ele
// 3. Mostrar no final uma frase com o nome de quem está devendo, separados por vírgula
//
//*Exemplo de como deve ficar no final:*
// Devendo: Bruno, Carla, Ana_

// *Regras:*
// • Use o *filter* para separar os pedidos não pagos
// • Use o *join* para juntar os nomes na frase final
// • Para achar o nome do cliente, lembre do que fizemos no exercício do menu e dos produtos
// • Não vale escrever os nomes direto no console.log, o programa tem que descobrir sozinho

// Passo 1: Separa os que não foram pagos em um array

let clientes = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Bruno" },
  { id: 3, nome: "Carla" }
];

let pedidos = [
  { id: 1, idCliente: 1, item: "Coxinha", valor: 6, pago: true },
  { id: 2, idCliente: 2, item: "Pastel", valor: 8, pago: false },
  { id: 3, idCliente: 3, item: "Suco", valor: 5, pago: false },
  { id: 4, idCliente: 1, item: "Bolo", valor: 7, pago: false },
  { id: 5, idCliente: 2, item: "Refri", valor: 6, pago: true }
];

function nãoPago(pedidos) {
  let pedidosNãoPagos = pedidos.filter(pedido => {
    return pedido.pago === false
  })
  return pedidosNãoPagos
}

function encontrarCliente(clientes, pedido) {
  let clienteN = clientes.find(y => {
    return y.id === pedido.idCliente
  })
  return clienteN
}

let pedidosNaoPagos = nãoPago(pedidos)

function devendo(clientes, pedidos) {

  let nomes = pedidosNaoPagos.map(pedido => {
    let cliente = encontrarCliente(clientes, pedido)
    return cliente.nome
  })
  let resultado = "Devendo: " + nomes.join(", ")
  console.log(resultado)
}
// devendo(clientes, pedidos)

// *Desafio extra (opcional):* ⭐
// Mostre também quanto a cantina ainda tem para receber (o total dos pedidos não pagos).

function pendente(pedidosNaoPagos) {
  let totalPendente = pedidosNaoPagos.reduce((acumulador, pedido) => {
    return acumulador + pedido.valor
  }, 0)
  console.log("Total a receber: R$ " + totalPendente)
}
// pendente(pedidosNaoPagos)