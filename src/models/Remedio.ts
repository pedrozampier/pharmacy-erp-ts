import { Mercadoria } from "./Mercadoria";
import { Tarja } from "./Tarja";

export default class Remedio extends Mercadoria {

    protected receitaObrigatoria: boolean;
    protected tarja: Tarja;

    constructor(id: number, nome: string, preco: number, receitaObrigatoria: boolean, tarja: Tarja) {
        super(id, nome, preco);
        this.receitaObrigatoria = receitaObrigatoria;
        this.tarja = tarja;
    }

    public isReceitaObrigatoria(): boolean {
        return this.receitaObrigatoria;
    }

    public setReceitaObrigatoria(): void {
        this.receitaObrigatoria = !this.receitaObrigatoria;
    }

    public descarte(): void {
        console.log("Produto não reciclavel, descarte somente em locais autorizados");
    }

    public override getDescricao(): string {
        return `Remédio: ${this.getNome()}, Preço: ${this.getPreco().toFixed(2)}, Receita Obrigatória: ${this.isReceitaObrigatoria() ? "Sim" : "Não"}, Tarja: ${this.tarja}`;
    }
}