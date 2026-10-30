// Create
// 0 - Colocar tudo isso em um escutador de evento / função
const formCadastro = document.getElementById('formCadastro')

formCadastro.onsubmit = (event) => {
    event.preventDefault()
    console.log("Deu certo")

    // 1 - Pegar os valores digitados na tela e colocar em variaveis
    const nomeProdutoDigitado = document.getElementById("nome").value
    const precoProdutoDigitado = Number(document.getElementById("preco").value)
    const categoriaProdutoDigitado = document.getElementById("categoria").value

    // 2 - Criar um objeto com esses valores
    const produtosInput = {
        nome: nomeProdutoDigitado,
        preco: precoProdutoDigitado,
        categoria: categoriaProdutoDigitado
    }

    // 3 - Pegar os valores que estão no local storage (Transformando em JSON)

    let produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos"))
    if (!produtosLocalStorage) {
        produtosLocalStorage = []
    }
    // 4 - usar o .push() para colocar os valores nesse JSON
    // Eu pego a variavel q eu criei no passo 3 e
    // dou push usando a variavel do passo 2
    produtosLocalStorage.push(produtosInput)

    // 5 - Salvar o novo JSON no local storage
    localStorage.setItem("Produtos", JSON.stringify(produtosLocalStorage))
    location.reload()
}

const produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos"))

const listaProdutos = document.getElementById("itens")
// Usar o .map() para escrever no html os produtos
// '' apóstrofo ou aspas simples
// "" aspas duplas
// `` crase ${variavel}
listaProdutos.innerHTML = 
produtosLocalStorage.map((produto, index) => `
    <li>${index} - ${produto.nome}   <button onClick="excluirProduto(${index})">x</button></li>
`).join("")

function excluirProduto(index) {
    console.log(`Vamos excluir o produto ${index}`)
    console.log(produtosLocalStorage)
    produtosLocalStorage.splice(index, 1)
    console.log(produtosLocalStorage)
    localStorage.setItem("Produtos", JSON.stringify(produtosLocalStorage))
    location.reload()
}