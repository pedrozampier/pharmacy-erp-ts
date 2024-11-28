"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mercadoria_1 = require("./Mercadoria");
class Produto extends Mercadoria_1.Mercadoria {
    constructor(id, nome, preco) {
        super(id, nome, preco);
    }
    descarte() {
        console.log("Produto reciclavel, descarte em locais apropriados");
    }
}
exports.default = Produto;
