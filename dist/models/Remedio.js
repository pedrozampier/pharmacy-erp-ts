"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = __importDefault(require("./Produto"));
class Remedio extends Produto_1.default {
    constructor(id, nome, preco, receitaObrigatoria) {
        super(id, nome, preco);
        this.receitaObrigatoria = receitaObrigatoria;
    }
    isReceitaObrigatoria() {
        return this.receitaObrigatoria;
    }
    setReceitaObrigatoria() {
        this.receitaObrigatoria = !this.receitaObrigatoria;
    }
}
exports.default = Remedio;
