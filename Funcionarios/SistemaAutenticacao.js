export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        // Polimorfismo -> Capacidade de um objeto de se adequar a diferentres outros métodos de maneira genérica
        if (SistemaAutenticacao.eAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static eAutenticavel(autenticavel) {
        // identifica se o método existe na classe e se, de fato, o método é uma instancia de função.
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}