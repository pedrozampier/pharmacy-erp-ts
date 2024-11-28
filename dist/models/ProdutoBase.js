"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoBase = void 0;
class ProdutoBase {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getPreco() {
        return this.preco;
    }
    setPreco(preco) {
        this.preco = preco;
    }
}
exports.ProdutoBase = ProdutoBase;
