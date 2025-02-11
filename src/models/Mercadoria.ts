import { IMercadoria } from "../interface/IMercadoria";

export abstract class Mercadoria implements IMercadoria {

    protected id: number;
    protected nome: string;
    protected preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }

    public getDescricao(): string {
        return `Produto: ${this.nome}, Preço: ${this.preco.toFixed(2)}`;
    }

    public abstract descarte(): void;
}