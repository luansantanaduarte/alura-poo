// a palavra "Import" importa as classes de outros arquivos
import { Cliente } from './Conta/Cliente.js';
import { ContaCorrente } from './Conta/ContaCorrente.js';
import { ContaPoupança } from './Conta/ContaPoupança.js';

// cria um novo cliente
const cliente1 = new Cliente('Ricardo', 11122233309)

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const ContaPoupanca = new ContaPoupança(50, cliente1, 1001);
ContaPoupanca.sacar(10);

console.log(contaCorrenteRicardo);
console.log(ContaPoupanca);