"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Venda {
    constructor(id, data, farmaceutico, cliente) {
        this.produtos = [];
        this.remedios = [];
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
    getItensVenda() {
        let itens = this.produtos.concat(this.remedios);
        return itens;
    }
    addProduto(produto) {
        this.produtos.push(produto);
        this.setValorDaVenda();
    }
    removeProduto(produto) {
        let index = this.produtos.indexOf(produto);
        this.produtos.splice(index, 1);
        this.setValorDaVenda();
    }
    addRemedio(remedio) {
        this.remedios.push(remedio);
        this.setValorDaVenda();
    }
    removeRemedio(remedio) {
        let index = this.remedios.indexOf(remedio);
        this.remedios.splice(index, 1);
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
