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
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
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