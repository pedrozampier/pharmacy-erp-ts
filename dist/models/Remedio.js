"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mercadoria_1 = require("./Mercadoria");
class Remedio extends Mercadoria_1.Mercadoria {
    constructor(id, nome, preco, receitaObrigatoria, tarja) {
        super(id, nome, preco);
        this.receitaObrigatoria = receitaObrigatoria;
        this.tarja = tarja;
    }
    isReceitaObrigatoria() {
        return this.receitaObrigatoria;
    }
    setReceitaObrigatoria() {
        this.receitaObrigatoria = !this.receitaObrigatoria;
    }
    descarte() {
        console.log("Produto não reciclavel, descarte somente em locais autorizados");
    }
    getDescricao() {
        return `Remédio: ${this.getNome()}, Preço: ${this.getPreco().toFixed(2)}, Receita Obrigatória: ${this.isReceitaObrigatoria() ? "Sim" : "Não"}, Tarja: ${this.tarja}`;
    }
}
exports.default = Remedio;
