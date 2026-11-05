
// Create
    const formCadastro = document.getElementById('formCadastro')
    var isEditando = false
// 0 - Colocar tudo isso em um escutador de evento / função


formCadastro.onsubmit = (event) => {
    event.preventDefault()
    console.log("Deu certo")

    // 1 - Pegar os valores digitados na tela e colocar em variaveis
    const nomeProdutoDigitado = document.getElementById("nome").value
    const precoProdutoDigitado = Number(document.getElementById("preco").value)
    const categoriaProdutoDigitado = document.getElementById("categoria").value

    // 2 - Criar um objeto com esses valores
    const produto = {
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
    if (isEditando) {
        produtosLocalStorage[isEditando] = produto
    } else {
        produtosLocalStorage.push(produto)
    }

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
    <tr>
        <td>${index}</td>
        <td>${produto.nome}</td>
        <td>${produto.preco}</td>
        <td>${produto.categoria}</td>
        <td>
        <button class="btn btn-danger btn-sm" onclick="excluirProduto(${index}">Excluir</button>
        <button class="btn btn-warning btn-sm" onclick="editarProduto(${index}">Editar</button>
        </td>
    </tr>
`).join("")

function excluirProduto(index) {
    console.log(`Vamos excluir o produto ${index}`)
    console.log(produtosLocalStorage)
    produtosLocalStorage.splice(index, 1)
    console.log(produtosLocalStorage)
    localStorage.setItem("Produtos", JSON.stringify(produtosLocalStorage))
    location.reload()
}

function editarProduto(index) {
    console.log(produtosLocalStorage[index])
    const produto = produtosLocalStorage[index]

    document.getElementById("nome").value = produto.nome
    document.getElementById("preco").value = produto.preco
    document.getElementById("categoria").value = produto.categoria
    isEditando = index
}