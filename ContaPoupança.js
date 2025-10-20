// o nome do arquivo deve ser o mesmo nome da classe para facilitar a organização do código -> boa prática.
export class ContaPoupança {
  constructor(saldoInicial, cliente, agencia) {
    // uma boa prática é referenciar os os parâmetros do construtor com o mesmo nome dos atributos da classe.
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
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
