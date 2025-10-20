// a divisão de classes em arquivos separados é uma boa prática de organização.

import { Cliente } from "./Cliente.js";

// a palavra export faz com que a classe, mesmo em um arquivo diferente, pode ser usado pelo index.
export class ContaCorrente {
  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
      // atributo privado -> só pode ser acessado dentro da própria classe.
      this._saldo = 0;
    ContaCorrente.numeroDeContas += 1;
  }
  // cria um atributo estático
  static numeroDeContas = 0;

  // assessor set -> método que é chamado toda vez que um novo valor for atribuído ao cliente. serve para fazer verificações de atribuição.
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  // assesor get -> é chamado toda vez que o valor for mostrado, oferecendo verificações. para além disso, um get escrito sem um set impossibilita quaisquer atribuições posteriores.
  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

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
