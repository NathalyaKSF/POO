let alunos=["joao ","maria ","jose ","pedro ","paulo "]

//alert(alunos[3])//

alunos.pop()
alunos.push("Gerson")
//alert(alunos)
alunos.push("joaquim")
alert(alunos)

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
onsole.log(aluno6.cpf);
onsole.log(aluno6.nota);

console.log(aluno1.nome);
aluno1.nome = 'John';
console.log(aluno1.nome);

//Carros Usados

let carros1 ={
    modelo:'Onix',
    marca: 'Chevrolet',
    ano: 2018,
    quilometragem: 169831,
    potenciamotor:1.0,
    preco:43.500,
    cor: 'vermelho'
}

let carros2 ={
    modelo:'T-Cross',
    marca: 'Volkswagen',
    ano: 2022,
    quilometragem: 48850,
    potenciamotor:1.0,
    preco:104.184,
    cor:'prata'
}

let carros3 ={
    modelo:'Sandero',
    marca: 'Renault',
    ano: 2012,
    quilometragem: 150000,
    potenciamotor:1.6,
    preco: 28.900,
    cor: 'Prata'
}
let carros4 ={
    modelo:'C4 Cactus',
    marca: 'Citroen',
    ano: 2022,
    quilometragem: 37100,
    potenciamotor:1.6,
    preco: 81.500,
    cor: 'Branco'
}
let carros5 ={
    modelo:'Celta',
    marca: 'Chevrolet',
    ano: 2008,
    quilometragem: 142000,
    potenciamotor:1.0,
    preco: 18.000,
    cor: 'Preto'
}