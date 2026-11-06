const produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos"))

const listaProdutos = document.getElementById("lista-produtos")
// Usar o .map() para escrever no html os produtos
// '' apóstrofo ou aspas simples
// "" aspas duplas
// `` crase ${variavel}
listaProdutos.innerHTML =
    produtosLocalStorage.map((produto) => `
    <div class="col">
        <div class="card h-100 shadow-sm produto-card">
            <div class="card-body"
                <h3 class="card-title h5">${produto.nome}</h3>
                <p class="fw-bold text-success mb-0" id="preco">R$ ${produto.preco}</p>
                <p class="card-text text-muted" id="categoria">${produto.categoria}</p>
            </div>
        </div>
    </div>
`).join("")