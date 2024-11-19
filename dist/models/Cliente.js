"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Cliente extends Pessoa_1.default {
    constructor(id, nome, email, cpf, cartaoDaLoja, limiteCredito) {
        super(id, nome, email, cpf);
        this.cartaoDaLoja = cartaoDaLoja;
        this.limiteCredito = limiteCredito;
    }
    hasCartaoDaLoja() {
        return this.cartaoDaLoja;
    }
    setCartaoDaLoja() {
        this.cartaoDaLoja = !this.cartaoDaLoja;
    }
    getLimiteCredito() {
        return this.limiteCredito;
    }
    setLimiteCredito(limiteCredito) {
        this.limiteCredito = limiteCredito;
    }
}
exports.default = Cliente;
