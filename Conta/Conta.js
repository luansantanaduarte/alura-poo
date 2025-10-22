export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    // uma boa prática é referenciar os os parâmetros do construtor com o mesmo nome dos atributos da classe.
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    let taxa = 1
    return this._sacar(valor, taxa)
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }

  // Quando dois metódos são escritos, o último sobrescreve o primeiro, de maneira que com a palavra reservada "super" faz com que o metódo da classe mãe seja chamado.
}