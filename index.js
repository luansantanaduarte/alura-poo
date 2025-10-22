// a palavra "Import" importa as classes de outros arquivos
import {
    Cliente
} from './Cliente.js';
import {
    Gerente
} from './Funcionarios/Gerente.js';
import {
    Diretor
} from './Funcionarios/Diretor.js';
import {
    SistemaAutenticacao
} from './Funcionarios/SistemaAutenticacao.js';

const diretor = new Diretor("Rodrigo", 10000, "12345678900");
const gerente = new Gerente("Ricardo", 5000, 123456788901);
diretor.cadastrarSenha("123456789");
gerente.cadastrarSenha("1234");

const cliente = new Cliente("Lais", 78945612379, "456")

const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const diretorEstaLogado = SistemaAutenticacao.login(gerente, "1234");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "457");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);