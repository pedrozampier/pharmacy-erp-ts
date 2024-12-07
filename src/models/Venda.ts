import Farmaceutico from './Farmaceutico';
import Cliente from './Cliente';
import Produto from './Produto';
import Remedio from './Remedio';
import VendaException from '../exceptions/VendaException';

export default class Venda {

    private id: number;
    private data!: Date;
    private valor!: number;
    private farmaceutico: Farmaceutico;
    private cliente: Cliente;
    private produtos: Produto[] = [];
    private remedios: Remedio[] = [];

    constructor(id: number, data: Date, farmaceutico: Farmaceutico, cliente: Cliente) {
        this.id = id;
        this.setDataParaVenda(data);
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

        const currentDate = new Date();

        if (data < currentDate) {
            throw new VendaException();
        }

        this.data = data;
    }

    public setDataParaVenda(data: Date): void {
        try {
            this.setData(data);
        } catch (error: any) {
            console.error(error.message);
        }
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

        if(item instanceof Remedio) {
            this.remedios.push(item);
        } else {
            this.produtos.push(item);
        }

        this.setValorDaVenda();
    }

    public removeProduto(remedio: Remedio): void;
    public removeProduto(produto: Produto): void;

    public removeProduto(produto: Produto | Remedio): void {

        if(produto instanceof Produto) {
            let index: number = this.produtos.indexOf(produto);
            this.produtos.splice(index, 1);
        } else {
            let index: number = this.remedios.indexOf(produto);
            this.remedios.splice(index, 1);
        }
        
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