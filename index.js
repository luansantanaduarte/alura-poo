// a palavra "Import" importa as classes de outros arquivos
import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

// cria um novo cliente
const cliente1 = new Cliente('Ricardo', 11122233309)

const cliente2 = new Cliente('Alice', 8882223309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(102, cliente2);

console.log(contaCorrenteRicardo);
console.log(conta2);