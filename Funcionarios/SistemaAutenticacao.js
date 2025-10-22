export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        // Polimorfismo -> Capacidade de um objeto de se adequar a diferentres outros métodos de maneira genérica
        return autenticavel.autenticar(senha);
    }
}