import Produto from "./Produto";

export default class Remedio extends Produto{

    receitaObrigatoria: boolean;

    constructor(id: number, nome: string, preco: number, receitaObrigatoria: boolean) {
        super(id, nome, preco);
        this.receitaObrigatoria = receitaObrigatoria;
    }

    public isReceitaObrigatoria(): boolean {
        return this.receitaObrigatoria;
    }

    public setReceitaObrigatoria(): void {
        this.receitaObrigatoria = !this.receitaObrigatoria;
    }
}