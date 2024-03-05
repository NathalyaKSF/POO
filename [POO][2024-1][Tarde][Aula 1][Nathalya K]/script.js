console.log('Testando o console');
let frutas = []
frutas.push('mamão');
frutas.push('morango');
frutas.push('abacate');
frutas.push('uva');

console.log(frutas);

frutas[3]= 'banana';

console.log(frutas);

for(let i=0; i < frutas.length; i++){
    console.log(frutas[i]);
}

//=============================
//=============================


let lanches  = [];

for (let i = 0; i < 5; i++) {
    let lanche = prompt('digite os lanches');
    lanches.push(lanche)
}
console.log(lanches);


