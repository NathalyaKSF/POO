class Usuario{ //classe mãe: o que a mãe têm os filhos herdam, herdam os atributos e métodos da mãe
    constructor(nome, cpf, dataNasc){ //entrada
        this.nome = nome; //atributo
        this.cpf = cpf; //atributo
        this.dataNasc = dataNasc; //atributo
    }

    imprimirDados(){ //Ação, não tem entrada pq pega dos atributos de cima
        console.log(`
        Nome: ${this.nome}
        CPF: ${this.cpf}
        Data de Nascimento: ${this.dataNasc}
        `);
    }

}

class Aluno extends Usuario{ //classe Aluno é uma extensão da classe Usuario - Aluno é filha de Usuario - pegando todos atributos e métodos da sua mãe(Usuario)
    constructor(nome, cpf, dataNasc, nomeResponsavel, serie, matricula){ //os da mãe + os novos
        super(nome, cpf, dataNasc); //chama o construtor da classe mãe
        this.nomeResponsavel = nomeResponsavel; //novos = atributos especificos
        this.serie = serie;
        this.matricula = matricula;
    }
}


