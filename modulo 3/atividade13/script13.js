
// let alunosSicredi = [
//     {
//     id : Date.now()+Math.floor(Math.random()*1000),
//     nome : 'Julio',
//     email : 'j@gmail.com'
//     },
//     {
//     id : Date.now()+Math.floor(Math.random()*1000),
//     nome : 'pepe',
//     email : 'pp@gmail.com'
// }]
// function editarAluno(id,novoNome,novoEmail){
//     alunosSicredi = alunosSicredi.map((aluno) => {
//         if (aluno.id === id) {
//             return {
//                 id,
//                 nome: novoNome,
//                 email: novoEmail,
//             }
//         }
//         return aluno
//     })
// }
// console.log(alunosSicredi)
// const indexPepe = alunosSicredi.findIndex(aluno=>aluno.nome==='pepe')
// editarAluno(alunosSicredi[indexPepe].id,'pepe2','zaga@gmail')
// // console.log(alunosSicredi)


// // let string=''
// // carros.forEach((carro)=>{
//     string = sting +'nome: ${carro.nome} + modelo: ${carro.,odelo}'
// })

let carros = [];


let menu
do {
    alert(`Bem-vindo ao sistema de CRUD de veículos. No momento o sistema tem ${carros.length} carros cadastrados`)
    menu = Number(prompt(`Bem vindo escolha uma opção do menu:'+\n 1 - Cadastrar veículo\n 2 - Listar todos os veículos\n 3 - Filtrar veículos por marca\n 4 - Atualizar veículo\n 5 - Remover veículo\n 6 - Sair do sistema`))
    switch (menu) {
        case 1:
            cadastrado()
            break;
        case 2:
            listar()
            break;
        case 3:
            let filtro = prompt('Digite a marca que gostaria de consultar')
            consultar(filtro)
            break;
        case 4:
            atualizar()
            break;
        case 5:
            deletar()
            break;
        case 6:
            alert('Saindo do sistema.');
            break;
        // case 7:
        //     let min =Number(prompt('Limite inferior da busca'))
        //     let max =Number(prompt('Limite superior da busca'))
        //     faixaDePreco(min, max)
        //     break;
        // case 8:
        //     maisCaro()
        //     break;
        // case 9:
        //     agruparMarca()
        //     break;
        // case 10:
        //     media()
        //     break;
        // case 11:
        //     listarOrdemAlfabetica()
        //     break;
        default:
            alert('Escolha uma opção válida.');
    }
} while (menu!==6)

function cadastrado(){
    let modelo = prompt('Modelo do veiculo')
    let marca = prompt('Marca do modelo')
    let ano = prompt('Ano do carro')
    let cor = prompt('cor do carro ')
    let preco = Number(prompt('preco do carro'))
    let id = Date.now()+Math.floor(Math.random()*1000)
    carros.push({
        modelo:modelo,
        marca:marca,
        ano:ano,
        cor:cor,
        preco:preco,
        id:id
    })
}

function listar(){
    let list = ''
    carros.sort((a, b) => a.preco - b.preco);
    // for (let i = 0; i < carros.length; i++) {
    //     list = list + `\n ${carros[i].id}|${carros[i].modelo} |${carros[i].cor}|${carros[i].preco} \n`    
    // }

    // for (const car of carros) {
    //     list = list + `\n ID ${car.id} | Modelo: ${car.modelo} | Cor: ${car.cor} | Preço:R$ ${car.preco.toFixed(2)} \n`
    // }
    //     alert(list)

    carros.forEach((car)=>{
             list = list +`\n ID ${car.id} | Modelo: ${car.modelo} | Cor: ${car.cor} | Preço:R$ ${car.preco.toFixed(2)} \n`
    })
    alert(list)
}


function consultar(filtro){
    const result = carros.filter((car)=> car.marca === filtro)
    let list =''
    result.sort((a, b) => a.preco - b.preco);
    for (const car of result ) {
        list = list + `\n ID ${car.id} | Modelo: ${car.modelo} | Cor: ${car.cor} | Preço:R$ ${car.preco.toFixed(2)} \n`
    }
   
    return alert(list)
}
//7
function faixaDePreco(min, max){
    const result = carros.filter((car)=> car.preco >=min&& car.preco<=max)
    let list = ''
    result.forEach((car)=>{
        list = list +`\n ID ${car.id} | Modelo: ${car.modelo} | Cor: ${car.cor} | Preço:R$ ${car.preco.toFixed(2)} \n`
    })
    alert(list)
}
//8
function maisCaro(){
    let maisCaro = carros[0]
    carros.forEach((car)=>{
        if(maisCaro.preco<=car.preco){
            maisCaro = car
        }    
    })
    alert(`Carro mais caro:\n ID ${maisCaro.id} | Modelo: ${maisCaro.modelo} | Cor: ${maisCaro.cor} | Preço:R$ ${maisCaro.preco.toFixed(2)} \n`)
}

//9
function agruparMarca() {
    const carrosPorMarca = {}

    carros.forEach((car) => {
        if (!carrosPorMarca[car.marca]) {
            carrosPorMarca[car.marca] = []
        }
        carrosPorMarca[car.marca].push(car)
    });

    for (const marca in carrosPorMarca) {
        const carrosDaMarca = carrosPorMarca[marca]
        let lista = ''
        carrosDaMarca.forEach((car) => {
            lista = lista + `\n ID ${car.id} | Modelo: ${car.modelo} | Cor: ${car.cor} | Preço: R$ ${car.preco.toFixed(2)} \n`;
        });
        alert('Carros da marca: '+ marca + lista);
    }
}

function media(){
    let soma = 0
    carros.forEach((car)=>{
        soma = soma+car.preco   
    })
    const media = soma/carros.length
    alert(`Media dos precos ${media.toFixed(2)} \n`)
}

function listarOrdemAlfabetica(){
    let list = ''
    let result = carros.sort((a, b) =>{
    if (a.modelo > b.modelo) {
        return 1;
    } else if (a.modelo < b.modelo) {
        return -1;
    } else {
        return 0;
    }
});
    result.forEach((car)=>{
        list = list +`\n ID ${car.id} | Modelo: ${car.modelo} | Cor: ${car.cor} | Preço:R$ ${car.preco.toFixed(2)} \n`
    })
    alert(list)
}

function atualizar(){
    let idAtualizar = Number(prompt('Digite o id do veículo que deseja atualizar a cor e o preço'))
    if(!(carros.find(car=> car.id===idAtualizar))){
        alert('Veiculo não encontrado')
    }else {
        let novaCor = prompt('Digite a nova cor')
        let novoPreco = Number(prompt('Digite o novo preço'))
        carros.forEach(car => {
            if (car.id === idAtualizar) {
                car.cor = novaCor;
                car.preco = novoPreco;
            }
            })
        }
    }

    function deletar(){
        let idRemover = Number(prompt('Digite o id do veículo que deseja atualizar a cor e o preço'))
    if(!(carros.find(car=> car.id===idRemover))){
        alert('Veiculo não encontrado')
    }else {
            carros.splice(carros.findIndex(car => car.id === idRemover),1)
            alert('Veiculo removido')
        }
    }