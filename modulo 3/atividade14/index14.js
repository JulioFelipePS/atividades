let idNovoProduto = 3
let idpedido = 0
let produtos = [
    {
        id: 1,
        nome: 'pão',
        estoque: 100,
        preco: 0.30
    },
    {
        id: 2,
        nome: 'pão baguete',
        estoque: 50,
        preco: 2.30
    },
    {
        id: 3,
        nome: 'pão australiano',
        estoque: 120,
        preco: 0.70
    }
];
let pedido = []
let menu
do {
    alert(`Bem-vindo ao sistema da Padaria do João. No momento o sistema tem ${produtos.length} produtos cadastrados`)
    menu = Number(prompt(`Bem vindo escolha uma opção do menu:'+\n 1 - Listar Todos os Produtos Disponíveis:\n 2 - Adicionar um Novo Produto\n 3 - Editar Produto do Catálogo:\n 4 - Remover um Produto do Catálogo\n 5 - Receber Pedidos dos Clientes\n 6 - Relatorio de Pedidos\n xx - Sair do sistema`))
    switch (menu) {
        case 1:
            listarProdutos()
            break;
        case 2:
            adicionarProduto()
            break;
        case 3:
            editar()
            break;
        case 4:
            removerProduto()
            break;
        case 5:
            NovoPedido()
            break;
        case 6:
            let min =Number(prompt('data inicial da consulta'))
            let max =Number(prompt('data final da consulta'))
            relatorioPedido(min,max)
        case xx:
            alert('Saindo do sistema.')
            break;
        default:
            alert('Escolha uma opção válida.');
    }
} while (menu!==6)

function listarProdutos(){
    let lista =''

    produtos.forEach((produto)=>{
        lista = lista + `\n ID: ${produto.id} | Nome: ${produto.nome} | Estoque: ${produto.estoque} | Preço: ${produto.preco.toFixed(2)} \n`
    })

    alert(lista)
}

function adicionarProduto(){
    idNovoProduto++
    let nome = prompt('Nome do produto a ser cadastrado')
    let preco = Number(prompt('Preço do produto'))
    let estoque =Number(prompt('Quantidade em estoque'))
    produtos.push({
        nome:nome,
        preco:preco,
        estoque:estoque,
        id: idNovoProduto
    })
}

function editar(){
    let idEditar = Number(prompt('Digite o id do produto a ser editado'))
    let index = produtos.findIndex(produto=> produto.id === idEditar)
    let novoPreco
    let novoEstoque
    if(!(produtos.find(produto=> produto.id === idEditar))){
        alert('Produto não encontrado')
    }else{
        do{
            novoPreco = Number(prompt(`Digite o novo preço do ${produtos[index].nome}`))
        }while(novoPreco<0)
        do{
            novoEstoque = Number(prompt('Digite a quantidade no estoque'))
        }while(novoEstoque<0)
    }
    produtos.forEach(produto =>{
        if(produto.id===idEditar){
            produto.preco = novoPreco
            produto.estoque = novoEstoque
        }
    })
}

function removerProduto(){
    let idEditar = Number(prompt('Digite o id do produto a ser removido'))
    let index = produtos.findIndex(produto=> produto.id === idEditar)
    if(!(produtos.find(produto=> produto.id === idEditar))){
        alert('Produto não encontrado')
    }else{
        produtos.splice(index,1)
    }
}

function NovoPedido(){
    idpedido++
    let lista =''
    let total
    let adicionarProduto
    do{
        adicionarProduto = confirm('Adicionar um produto ao pedido?')
        if(adicionarProduto===true){
            let idProdutoPedido = Number(prompt('qual o id do produto? '))
            let index = produtos.findIndex(produto=> produto.id === idProdutoPedido)
            let qtd = Number(prompt(`Quantidade de ${produtos[index].nome} da compra `))
            produtos[index].estoque = produtos[index].estoque - qtd
            let subtototal = qtd*produtos[index].preco
            lista = lista +`Nome: ${produtos[index].nome} | Qtd: ${qtd}| Preço: ${produtos[index].preco} | Subtotal ${subtototal.toFixed(2)}`
            total = total+subtototal
        }
    }while(adicionarProduto)
    pedido.push({
        id:idpedido,
        descricao:lista,
        total: total,
        data: Date.now()
    })
}

function relatorioPedido(min,max){
    const faixa = pedido.filter((venda)=>venda.data>=min && venda.data<=max)
    let lista =''
    faixa.forEach((venda)=>{
        lista = lista + `Data:${venda.data}+\nDescrição:\n ${venda.descricao}\n Total da venda: ${venda.total.toFixed(2)}\n`
    })
    alert(lista)
}
