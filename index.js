// classe -> Estrutura que será replicada em javascript. ligadas a ela há atributos (nome, cpf, agencia, saldo...)
class Cliente {
    nome;
    cpf;
} 

class ContaCorrente {
    agencia;
    // atributo privado -> só pode ser acessado dentro da própria classe
    _saldo = 0;

    // método -> função que pertence a uma classe
    sacar(valor) {
        // this -> palavra que faz referencia ao atributo da própria class
        if (this._saldo >= valor) {
            this._saldo -= valor;
            // define o valor de retorno do método, análogo ao return em funções com retorno.
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }
}

// cria um novo cliente
const cliente1 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 8882223309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo)