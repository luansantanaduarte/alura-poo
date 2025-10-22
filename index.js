// a palavra "Import" importa as classes de outros arquivos
import { Cliente } from './Conta/Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor("Rodrigo", 10000, "12345678900");
const gerente = new Gerente("Ricardo", 5000, 123456788901);

const estaLogado = SistemaAutenticacao.login(diretor, "123456789");

