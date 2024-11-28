import Farmaceutico from './Farmaceutico';
import Cliente from './Cliente';
import Produto from './Produto';
import Remedio from './Remedio';

export default class Venda {
    private id: number;
    private data: Date;
    private valor!: number;
    private farmaceutico: Farmaceutico;
    private cliente: Cliente;
    private produtos: Produto[] = [];
    private remedios: Remedio[] = [];

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

    public getItensVenda(): Produto[] {
        let itens: Produto[] = this.produtos.concat(this.remedios);
        return itens;
    }

    public addProduto(produto: Produto): void;
    public addProduto(remedio: Remedio): void;

    public addProduto(item: Produto | Remedio): void {
        this.produtos.push(item);
        this.setValorDaVenda();
    }

    public removeProduto(produto: Produto): void {
        let index: number = this.produtos.indexOf(produto);
        this.produtos.splice(index, 1);
        this.setValorDaVenda();
    }

    public setValorDaVenda(): void {
        let valor: number = 0;

        let itens: Produto[] = this.getItensVenda();

        itens.forEach(produto => {
            valor += produto.getPreco();
        });

        this.valor = valor;
    }

    public getValorDaVenda(): number {
        return this.valor;
    }

}