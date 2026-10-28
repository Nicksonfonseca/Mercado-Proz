// Array
const produtosArray = ["Arroz 5kg", 25.90, "Mercearia"]
console.log(produtosArray[0])
console.log(produtosArray[1])
console.log(produtosArray[2])

// Objeto ou Lista para quem veio do python
const produto = {
    // chave /index : valor / resultado
    nome: "Arroz 5kg",
    preco: 25.90,
    categoria: "Mercearia"
}

console.log(produto.nome)
console.log(produto.preco)
console.log(produto.categoria)

// array de objeto

const produtos = [
    {
        nome: "Arroz 5kg",
        preco: 25.90,
        categoria: "Mercearia"
    },
    {
        nome: "Feijão 1kg",
        preco: 16.99,
        categoria: "Mercearia"
    },
    {
        nome: "Coca-Cola 2L",
        preco: 15.50,
        categoria: "Bebidas"
    }
]

console.log(produtos[0].nome)
console.log(produtos[0].preco)
console.log(produtos[1].nome)
console.log(produtos[1].preco)
console.log(produtos[2].nome)
console.log(produtos[2].preco)

// Lista todos os produtos
console.log(produtos)
// Lista o produto 1 (o segundo da lista)
console.log(produtos[1])
// Pega o nome do terceiro produto
console.log(produtos[2].nome)

// Lista todos os nomes 
const nomes = produtos.map(produto => produto.nome)
console.log(nomes)

produtos.push({
    nome: "Miojo Turma da Monica de Tomate",
    preco: 2.99,
    categoria: "Mercearia"
})

console.log(produtos)

// SetItem serve para adicionar itens no localStorage
const nome = "Mercearia Proz"
localStorage.setItem("Minha Loja", nome)

// GetItem serve para pegar um item do localStorage
const minhaLoja = localStorage.getItem("Minha Loja", nome)
console.log(`Minha Loja é ${minhaLoja}`)

// 1 - Adicionar 3 produtos no final do array usando .push()
produtos.push({
    nome: "Leite 1L",
    preco: 12,
    categoria: "Laticinios"
},
    {
        nome: "Picanha",
        preco: 79.99,
        categoria: "Proteínas"
    },
    {
        nome: "Iogurte",
        preco: 12,
        categoria: "Laticinios"
    }
)
console.log(produtos)

// JSON = JAVASCRIPT OBJECT NOTASHION
const produtosString = JSON.stringify(produtos)
localStorage.setItem("Produtos", produtosString)

// 2 - Usar o .map() e .filter() para achar o produto mais barato
let menorPreco = Math.min(...produtos.map((produto) => produto.preco))
let maisBarato = produtos.filter((produto) => produto.preco == menorPreco)
console.log(maisBarato[0].nome, maisBarato[0].preco)

// 3 - Usar o .find() para achar algum produto pelo nome
let produtoEncontrado = produtos.find((produto) => produto.nome == "Picanha")
console.log(produtoEncontrado)

// 4 - Usar o .reduce() para fazer a soma dos preços
let somaTotal = produtos.reduce((soma, produtos) => soma + produtos.preco, 0)
console.log(somaTotal)

// 5 - Salvar um dado no localStorage e ler o mesmo
localStorage.setItem("Proprietário", "Nickson")
const proprietario = localStorage.getItem("Proprietário", "Nickson")
console.log(`O proprietário é ${proprietario}`)

const produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos"))
console.log(produtosLocalStorage)

// Crud
// Read
// 0 - Colocar tudo isso em um escutador de evento / função
// 1 - Pegar os valores digitados na tela e colocar em variaveis
const nomeProdutoDigitado = document.getElementById("nome").value
const precoProdutoDigitado = Number(document.getElementById("preco").value)
const categoriaProdutoDigitado = document.getElementById("categoria").value

// 2 - Criar um objeto com esses valores

// 3 - Pegar os valores que estão no local storage (Transformando em JSON)

// 4 - usar o .push() para colocar os valores nesse JSON

// 5 - Salvar o novo JSON no local storage


const listaProdutos = document.getElementById('lista-produtos')
// Usar o .map() para escrever no html os produtos
// ' ' apóstrofo ou aspas simples
// " " aspas duplas
// ` ` crase ${variavel}

listaProdutos.innerHTML =
produtosLocalStorage.map((produto) => `
    <article>
        <h3>Nome: ${produto.nome}</h3>
        <p>Preço: R$ ${produto.preco}</p>
        <p>Categoria: ${produto.categoria}</p>
        <hr>
    </article>
`).join("")
