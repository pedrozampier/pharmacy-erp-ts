"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class TelaMenu {
    constructor() {
        this.prompt = (0, prompt_sync_1.default)();
    }
    exibirMenuPrincipal() {
        console.log('==== Kolpier ERP Farmácia ====');
        let escolha = this.prompt('Escolha uma opção: \n1 - Gerenciar Clientes \n2 - Gerenciar Vendas \n3 - Sair \n ');
        switch (escolha) {
            case '1':
                console.log('Gerenciar Clientes');
                break;
            case '2':
                console.log('Gerenciar Vendas');
                break;
            case '3':
                console.log('Saindo...');
                process.exit();
            default:
                console.log('Opção inválida!');
            //this.exibirMenuPrincipal();
        }
    }
}
exports.default = TelaMenu;
