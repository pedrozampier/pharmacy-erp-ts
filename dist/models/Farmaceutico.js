"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Farmaceutico extends Pessoa_1.default {
    constructor(id, nome, email, cpf, crf, salario) {
        super(id, nome, email, cpf);
        this.setCrf(crf);
        this.salario = salario;
    }
    getCrf() {
        return this.crf;
    }
    setCrf(crf) {
        let crfSemEspacos = crf.trim();
        if (crfSemEspacos.length <= 0) {
            throw new Error("CRF inválido");
        }
        this.crf = crfSemEspacos;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(salario) {
        this.salario = salario;
    }
}
exports.default = Farmaceutico;
