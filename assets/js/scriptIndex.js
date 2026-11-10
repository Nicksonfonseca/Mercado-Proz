const produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos")) || []

const listaProdutos = document.getElementById("lista-produtos")
listaProdutos.innerHTML = produtosLocalStorage.length
    ? produtosLocalStorage.map((produto) => `
        <div class="col">
            <div class="card h-100 shadow-sm produto-card">
                ${produto.img ? `<img src="${produto.img}" class="card-img-top" alt="${produto.nome}">` : ""}
                <div class="card-body">
                    <h3 class="card-title h5">${produto.nome}</h3>
                    <p id="preco" class="fw-bold text-success mb-0">R$ ${produto.preco}</p>
                    <p id="categoria" class="card-text text-muted">${produto.categoria}</p>
                </div>
            </div>
        </div>
    `).join("")
    : `<div class="col-12"><div class="empty-state">Nenhum Produto Cadastrado</div></div>`

// Passo 1 - Pegar o elemento select do html
const filtroCategoria = document.getElementById("filtroCategoria")
// Passo 2 - Pegar as categorias e transforma-las em unicas 
const categoria = produtosLocalStorage.map((produto) => produto.categoria)
const categoriasUnicas = [...new Set(categoria)]
// Passo 3 Escrever as categoria na tela 
filtroCategoria.innerHTML += categoriasUnicas.map((categoria) => `
    <option>${categoria}</option>
`).join("")