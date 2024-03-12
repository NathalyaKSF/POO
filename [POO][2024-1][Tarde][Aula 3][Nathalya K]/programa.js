let celular1 = {
    marca:'Xiaomi',
    modelo:'Poco c65',
    armazenamento:'256GB',
    ram:'8GB',
    processador:'MediaTek',
    tipoTela:'lcd',
    cor:'azul',
    bateria:'5000mAh',
    preco:'899'
}

let celular2 = {
    marca: 'Sony',
    modelo: 'Sony Xperia 5 III',
    armazenamento: '128GB',
    ram: '8GB',
    processador: 'Snapdragon 888',
    tipoTela: 'OLED',
    cor: 'Green',
    bateria: 'Li-Po 4500 mAh',
    preco: '$999'
}

let celular3 =  {
    marca: 'Samsung',
    modelo: 'Galaxy Z Fold 3',
    armazenamento: '256GB',
    ram: '12GB',
    processador: 'Snapdragon 888',
    tipoTela: 'Dynamic AMOLED 2X',
    cor: 'Phantom Black',
    bateria: 'Li-Ion 4400 mAh',
    preco: '$1799'
}

let celular4 = {
    marca: 'OnePlus',
    modelo: 'OnePlus 10 Pro',
    armazenamento: '256GB',
    ram: '12GB',
    processador: 'Snapdragon 8 Gen 1',
    tipoTela: 'Fluid AMOLED',
    cor: 'Stellar Black',
    bateria: 'Li-Po 5000 mAh',
    preco: '$899'
}

let celular5 = {
    marca: 'Xiaomi',
    modelo: 'Xiaomi 12 Pro',
    armazenamento: '512GB',
    ram: '12GB',
    processador: 'Snapdragon 8 Gen 1',
    tipoTela: 'AMOLED',
    cor: 'Lavender Violet',
    bateria: 'Li-Ion 4500 mAh',
    preco: '$1099'
}

let celular6 = {
    marca: 'Motorola',
    modelo: 'Motorola Edge 30 Pro',
    armazenamento: '256GB',
    ram: '12GB',
    processador: 'Snapdragon 8 Gen 1',
    tipoTela: 'AMOLED',
    cor: 'Nebula Blue',
    bateria: 'Li-Po 5000 mAh',
    preco: '$849'
}

let celular7 = {
    marca: 'Realme',
    modelo: 'Realme GT 2 Pro',
    armazenamento: '256GB',
    ram: '12GB',
    processador: 'Snapdragon 8 Gen 1',
    tipoTela: 'AMOLED',
    cor: 'Paper White',
    bateria: 'Li-Po 5000 mAh',
    preco: '$2700'
}

let listaDeCelular = [];
listaDeCelular.push(celular1)
listaDeCelular.push(celular2)
listaDeCelular.push(celular3)
listaDeCelular.push(celular4)
listaDeCelular.push(celular5)
listaDeCelular.push(celular6)
listaDeCelular.push(celular7)

for (let i= 0; i<listaDeCelular.length; i++){
    console.log(`${listaDeCelular[i].marca} ${listaDeCelular[i].modelo} ${listaDeCelular[i].armazenamento} ${listaDeCelular[i].cor}---> R$ ${listaDeCelular[i].preco}`)
}