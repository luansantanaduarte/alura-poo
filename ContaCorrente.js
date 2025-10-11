// a divisão de classes em arquivos separados é uma boa prática de organização.

// a palavra export faz com que a classe, mesmo em um arquivo diferente, pode ser usado pelo index.
export class ContaCorrente {
    agencia;
    cliente;

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

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}