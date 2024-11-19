"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(id, nome, preco) {
        this.id = id;
        this.setNome(nome);
        this.setPreco(preco);
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
    getPreco() {
        return this.preco;
    }
    setPreco(preco) {
        if (preco <= 0) {
            throw new Error("Preço inválido");
        }
        this.preco = preco;
    }
}
exports.default = Produto;
