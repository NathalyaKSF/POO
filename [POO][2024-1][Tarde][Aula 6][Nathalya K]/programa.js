let clienteA = {
    nome: 'João',
    endereco: ' Rua Tal, 10 - Tabuleiro - Maceió - Al - cep: 57000-000'
}

let clienteB = {
    nome: 'Cleiton',
    rua: 'X',
    numero: '15',
    bairro: 'Mata do Rolo',
    cidade: 'Rio Largo' ,
    estado: 'AL',
    cep: '57000-000'
}

let clienteC = {
    nome: 'Rasta',
    endereco: {
        rua: 'ponta da Pedra',
        numero: '224',
        bairro: 'fernao velho',
        cidade: 'Maceio',
        estado: 'AL',
        cep: '57000-000'
    }
}

//Como imprimir a cidade de cada cliente

console.log(clienteA.endereco)
console.log(clienteB.cidade)
console.log(clienteC.endereco.cidade)


//----------------------------------

let playlist = []

let alunoA = {
    nome: 'jose',
    disciplinas: ['POO','PWEB']
}

console.log(alunoA.disciplinas); // Resultado esperado : POO e PWEB
alunoA.disciplinas.push('BD');

console.log(alunoA.disciplinas);

let alunoB ={
    nome: 'Maria',
    historico: {
        poo: 10,
        pweb: 9,
        bd: 9.5,
        aps: 10
    }
}
//------------------------------------
let turmaX = {
    codigo: 'Info034',
    disciplina: 'POO',
    alunos: ['Edilene', 'Sthefany', 'Pedro', 'Daniel', 'Nathalya', 'Katiane', 'Matheus', 'Airton']
    
}

let turmaY = {
    codigo: 'Info034',
    disciplina: 'POO',
    alunos:[
        {
            nome:'daniel',
            cpf: '000.000.000-00'
        },
        {
            nome: 'pedro',
            cpf: '111.111.111-11'
        },
        {
            nome:'airton', 
            cpf: '222.222.222-22'
        }

    ]
}
console.log(turmaY.alunos[1].nome)
console.log(turmaY.alunos[1].cpf)
