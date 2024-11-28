import { Mercadoria } from "./Mercadoria";

export default class Produto extends Mercadoria {
    
    constructor(id: number, nome: string, preco: number) {
        super(id, nome, preco);
    }

    public descarte(): void {
        console.log("Produto reciclavel, descarte em locais apropriados");
    }
}