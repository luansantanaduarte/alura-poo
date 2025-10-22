// classe -> Estrutura que será replicada em javascript. ligadas a ela há atributos (nome, cpf, agencia, saldo...);

// a divisão de classes em arquivos separados é uma boa prática de organização.

// a palavra export faz com que a classe, mesmo em um arquivo diferente, pode ser usado pelo index.
export class Cliente {
    get cpf() {
        return this._cpf;
    }

    // cria um construtor
    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    } 

    autenticar() {
        return true;
    }
} 