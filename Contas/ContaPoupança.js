import { Conta } from "./Conta.js";

// o nome do arquivo deve ser o mesmo nome da classe para facilitar a organização do código -> boa prática.
export class ContaPoupança extends Conta {
  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia)
    // uma boa prática é referenciar os os parâmetros do construtor com o mesmo nome dos atributos da classe.
    // this._saldo = saldoInicial;
    // this._cliente = cliente;
    // this._agencia = agencia;
  }
  sacar() {
    const taxa = 1.02;
    return this._sacar(valor, taxa);
  }
}
