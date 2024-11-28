"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Venda {
    constructor(id, data, farmaceutico, cliente) {
        this.produtos = [];
        this.id = id;
        this.data = data;
        this.farmaceutico = farmaceutico;
        this.cliente = cliente;
    }
    getId() {
        return this.id;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getFarmaceutico() {
        return this.farmaceutico;
    }
    setFarmaceutico(farmaceutico) {
        this.farmaceutico = farmaceutico;
    }
    getCliente() {
        return this.cliente;
    }
    setCliente(cliente) {
        this.cliente = cliente;
    }
    getProdutos() {
        return this.produtos;
    }
    addProduto(item) {
        this.produtos.push(item);
        this.setValorDaVenda();
    }
    removeProduto(produto) {
        let index = this.produtos.indexOf(produto);
        this.produtos.splice(index, 1);
        this.setValorDaVenda();
    }
    setValorDaVenda() {
        let valor = 0;
        this.produtos.forEach(produto => {
            valor += produto.getPreco();
        });
        this.valor = valor;
    }
    getValorDaVenda() {
        return this.valor;
    }
}
exports.default = Venda;
