const produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos"))

const listaProdutos = document.getElementById("lista-produtos")
// Usar o .map() para escrever no html os produtos
// '' apóstrofo ou aspas simples
// "" aspas duplas
// `` crase ${variavel}
listaProdutos.innerHTML = 
produtosLocalStorage.map((produto) => `
    <article>
        <h3>Nome: ${produto.nome}</h3>
        <p>Preço: R$ ${produto.preco}</p>
        <p>Categoria: ${produto.categoria}</p>
    </article>
    <hr>
`).join("")