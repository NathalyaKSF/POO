/*let alunos=["joao ","maria ","jose ","pedro ","paulo "]

//alert(alunos[3])//

alunos.pop()
alunos.push("Gerson")
//alert(alunos)
alunos.push("joaquim")
//alert(alunos)

//========================
//========================

let notas = [ 10,8,5,7,9,6]
//alert(notas)

for (let i = 0; i <= alunos.length; i++) {
   console.log("Aluno: "+ alunos[i] + "Nota: " + notas[i]);
    
}


//====================================================================================
//criação de objetos

let aluno1 = {
    nome: 'Joao', 
    cpf: '00000000000', 
    nota: 10
}
let aluno2 = {
    nome: 'Maria',
    cpf: '11111111111',
    nota: 8
}
let aluno3 = {
    nome:'Jose',
    cpf:'22222222222',
    nota:5
}
let aluno4 = {
    nome:'Pedro',
    cpf:'33333333333',
    nota:7
}
let aluno5 = {
    nome:'Gerson',
    cpf:"44444444444",
    nota:9
}
let aluno6 = {
    nome:'Joaquim',
    cpf:"55555555555",
    nota: 6
}


// Acessando atributos de um objeto
// Em um Array, a gente acessa um elemento atraveś dos colchetes [] e do indice.

//Em objeto, a gente usa. e o nome do atributo. Ex:

console.log(aluno6.nome);
console.log(aluno6.cpf);
console.log(aluno6.nota);

console.log(aluno1.nome);
aluno1.nome = 'John';
console.log(aluno1.nome);*/

//Carros Usados

let carros1 ={
    modelo:'Onix',
    marca: 'Chevrolet',
    ano: 2018,
    quilometragem: 169831,
    potenciamotor:1.0,
    preco:43500,
    cor: 'vermelho'
}

let carros2 ={
    modelo:'T-Cross',
    marca: 'Volkswagen',
    ano: 2022,
    quilometragem: 48850,
    potenciamotor:1.0,
    preco:104184,
    cor:'prata'
}

let carros3 ={
    modelo:'Sandero',
    marca: 'Renault',
    ano: 2012,
    quilometragem: 150000,
    potenciamotor:1.6,
    preco: 28900,
    cor: 'Prata'
}
let carros4 ={
    modelo:'C4 Cactus',
    marca: 'Citroen',
    ano: 2022,
    quilometragem: 37100,
    potenciamotor:1.6,
    preco: 81500,
    cor: 'Branco'
}
let carros5 ={
    modelo:'Celta',
    marca: 'Chevrolet',
    ano: 2008,
    quilometragem: 142000,
    potenciamotor:1.0,
    preco: 18000,
    cor: 'Preto'
}

let carros6 ={
    modelo:'Mobi',
    marca: 'Fiat',
    ano: 2022,
    quilometragem: 20361,
    potenciamotor:1.0,
    preco: 57200,
    cor: 'branco'
}

let carros7 ={
    modelo:'Ecosport',
    marca: 'Ford',
    ano: 2021,
    quilometragem: 71000,
    potenciamotor:1.5,
    preco: 88900,
    cor: 'Preto'
}

let carros8 ={
    modelo:'Jeep Compass',
    marca: 'Jeep',
    ano: 2022,
    quilometragem: 142000,
    potenciamotor:1.0,
    preco: 18.000,
    cor: 'Prata'
}


console.log('CARROS===================================================================')
console.log(`${carros1.marca} ${carros1.modelo} ${carros1.ano} --> R$ ${carros1.preco}`)
console.log(`${carros2.marca} ${carros2.modelo} ${carros2.ano} --> R$ ${carros2.preco}`)
console.log(`${carros3.marca} ${carros3.modelo} ${carros3.ano} --> R$ ${carros3.preco}`)
console.log(`${carros4.marca} ${carros4.modelo} ${carros4.ano} --> R$ ${carros4.preco}`)
console.log(`${carros5.marca} ${carros5.modelo} ${carros5.ano} --> R$ ${carros5.preco}`)
console.log(`${carros6.marca} ${carros6.modelo} ${carros6.ano} --> R$ ${carros6.preco}`)
console.log(`${carros7.marca} ${carros7.modelo} ${carros7.ano} --> R$ ${carros7.preco}`)
console.log(`${carros8.marca} ${carros8.modelo} ${carros8.ano} --> R$ ${carros8.preco}`)

console.log('CARROS===================================================================')

let listaDeCarros = [];
listaDeCarros.push(carros1);
listaDeCarros.push(carros2);
listaDeCarros.push(carros3);
listaDeCarros.push(carros4);
listaDeCarros.push(carros5);
listaDeCarros.push(carros6);
listaDeCarros.push(carros7);
listaDeCarros.push(carros8);

for(let i = 0; i<listaDeCarros.length; i++){
    console.log(`${listaDeCarros[i].marca} ${listaDeCarros[i].modelo} ${listaDeCarros[i].ano}`);
}
