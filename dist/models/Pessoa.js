"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(id, nome, email, cpf) {
        this.id = id;
        this.setNome(nome);
        this.setEmail(email);
        this.setCpf(cpf);
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        let nomeSemEspacos = nome.trim();
        if (nomeSemEspacos.length <= 0) {
            throw new Error("Nome inválido");
        }
        this.nome = nomeSemEspacos;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        let emailSemEspacos = email.trim();
        if (emailSemEspacos.length <= 0) {
            throw new Error("Email inválido");
        }
        this.email = emailSemEspacos;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        let cpfSemEspacos = cpf.trim();
        if (cpfSemEspacos.length <= 0 || cpfSemEspacos.length != 11) {
            throw new Error("CPF inválido");
        }
        this.cpf = cpfSemEspacos;
    }
}
exports.default = Pessoa;
