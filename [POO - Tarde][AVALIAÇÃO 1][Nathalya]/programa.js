let serie1 = {
    poster: 'tbbt.jpg',
    nome: 'The Big Bang Theory',
    atorPrincipal: {
        nome: 'Jim Parsons',
        dataDeNascimento:'24/03/1973',
        nacionalidade: 'Norte-americano'
    },
    temporadas:'12 Temporadas',
    anoDeLancamento:'2007'
}

let serie2 = {
    poster: 'friends1.jpg',
    nome: 'Friends',
    atorPrincipal: {
        nome: 'Jennifer Aniston',
        dataDeNascimento:'11/02/1969',
        nacionalidade: 'Norte-americana'
    },
    temporadas:'10 Temporadas',
    anoDeLancamento:'1994'
}

let serie3 = {
    poster: 'got.jpeg',
    nome: 'Game of Thrones',
    atorPrincipal: {
        nome: 'Emilia Clarke',
        dataDeNascimento:'23/10/1986',
        nacionalidade: 'Britânica'
    },
    temporadas:'8 Temporadas',
    anoDeLancamento:'2011'
}

let serie4 = {
    poster: 'theoffice.jpg',
    nome: 'The Office',
    atorPrincipal: {
        nome: 'John Krasinski',
        dataDeNascimento:'20/10/1979',
        nacionalidade: 'Norte-americano'
    },
    temporadas:'9 Temporadas',
    anoDeLancamento:'2005'
}

let serie5 = {
    poster: 'twd.jpg',
    nome: 'The Vampires Diaries',
    atorPrincipal: {
        nome: 'Nina Dobrev',
        dataDeNascimento:'09/01/1989',
        nacionalidade: 'Canadiana'
    },
    temporadas:' 8 Temporadas',
    anoDeLancamento:'2009'
}

let serie6 = {
    poster: 'sobrenatural.jpg',
    nome: 'Sobrenatural',
    atorPrincipal: {
        nome: 'Jensen Ackles',
        dataDeNascimento:'01/03/1973',
        nacionalidade: 'Norte-americano'
    },
    temporadas:'15 Temporadas',
    anoDeLancamento:'2005'
}

let serie7 = {
    poster: 'twdd.jpg',
    nome: 'The Walking Dead',
    atorPrincipal: {
        nome: 'Andrew Lincoln',
        dataDeNascimento:'14/09/1973',
        nacionalidade: 'Britânico'
    },
    temporadas:'11 Temporadas',
    anoDeLancamento:'2010'
}

let serie8 = {
    poster: 'twdd.jpg',
    nome: 'A Casa do Dragão',
    atorPrincipal: {
        nome: "Emma D'Arcy",
        dataDeNascimento:'27/06/1992',
        nacionalidade: 'Britânica'
    },
    temporadas:'2 Temporadas',
    anoDeLancamento:'2022'
}

let serie9 = {
    poster: 'ga.jpg',
    nome: 'Greys Anatomy',
    atorPrincipal: {
        nome: "Ellen Pompeo",
        dataDeNascimento:'10/11/1969',
        nacionalidade: 'Norte-americana'
    },
    temporadas:'20 Temporadas',
    anoDeLancamento:'2005'
};

let serie10 = {
    poster: 'thm.jpg',
    nome: 'Dois Homens e meio',
    atorPrincipal: {
        nome: "Charlie Sheen",
        dataDeNascimento:'03/09/1965',
        nacionalidade: 'Norte-americano'
    },
    temporadas:'12 Temporadas',
    anoDeLancamento:'2003'
}

let top5 = [serie1,serie2,serie3,serie4,serie5]

let lancamentos = [serie6,serie7,serie8,serie9,serie10]

for (let i = 0; i < top5.length; i++) {
    document.write(`
    <div class="card">
    <img class='foto' src='img/${top5[i].poster}'>
    <p class= 'nome'> ${top5[i].nome} </p>
    <p class= 'ator'> Ator/Atriz Princpal: ${top5[i].atorPrincipal.nome} </p>
    <p class= 'ator'> Data de Seu Nascimento: ${top5[i].atorPrincipal.dataDeNascimento}</p>
    <p class= 'ator'> Nacionalidade: ${top5[i].atorPrincipal.nacionalidade} </p>
    <p class= 'temporadas'> Temporadas: ${top5[i].temporadas} </p>
    <p class= 'anodelanc'> Ano de Lancamento: ${top5[i].anoDeLancamento} </p>
    </div>  
    `);
}


for (let i = 0; i < lancamentos.length; i++) {
    document.write(`
    <div class="card">
    <img class='foto' src='img/${lancamentos[i].poster}'>
    <p class= 'nome'> ${lancamentos[i].nome} </p>
    <p class= 'ator'> Ator/Atriz Princpal: ${lancamentos[i].atorPrincipal.nome} </p>
    <p class= 'ator'> Data de Seu Nascimento: ${lancamentos[i].atorPrincipal.dataDeNascimento} </p>
    <p class= 'ator'> Nacionalidade: ${lancamentos[i].atorPrincipal.nacionalidade} </p>
    <p class= 'temporadas'> Temporadas: ${lancamentos[i].temporadas} </p>
    <p class= 'anodelanc'>  Ano de Lancamento: ${lancamentos[i].anoDeLancamento} </p>
    </div>  
    `);
}