import Farmaceutico from './Farmaceutico';
import Cliente from './Cliente';
import Produto from './Produto';

export default class Venda {
    id: number;
    data: Date;
    valor!: number;
    farmaceutico: Farmaceutico;
    cliente: Cliente;
    produtos: Produto[] = [];

    constructor(id: number, data: Date, farmaceutico: Farmaceutico, cliente: Cliente) {
        this.id = id;
        this.data = data;
        this.farmaceutico = farmaceutico;
        this.cliente = cliente;
    }

    public getId(): number {
        return this.id;
    }

    public getData(): Date {
        return this.data;
    }

    public setData(data: Date): void {
        this.data = data;
    }

    public getFarmaceutico(): Farmaceutico {
        return this.farmaceutico;
    }

    public setFarmaceutico(farmaceutico: Farmaceutico): void {
        this.farmaceutico = farmaceutico;
    }

    public getCliente(): Cliente {
        return this.cliente;
    }

    public setCliente(cliente: Cliente): void {
        this.cliente = cliente;
    }

    public getProdutos(): Produto[] {
        return this.produtos;
    }

    public addProduto(produto: Produto): void {
        this.produtos.push(produto);
        this.setValorDaVenda();
    }

    public removeProduto(produto: Produto): void {
        let index: number = this.produtos.indexOf(produto);
        this.produtos.splice(index, 1);
        this.setValorDaVenda();
    }

    public setValorDaVenda(): void {
        let valor: number = 0;

        this.produtos.forEach(produto => {
            valor += produto.getPreco();
        });

        this.valor = valor;
    }

    public getValorDaVenda(): number {
        return this.valor;
    }

}