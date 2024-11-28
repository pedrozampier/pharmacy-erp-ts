"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mercadoria = void 0;
class Mercadoria {
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
    getDescricao() {
        return `Produto: ${this.nome}, Preço: ${this.preco.toFixed(2)}`;
    }
}
exports.Mercadoria = Mercadoria;
